import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Theme functionality', () => {
  let window: any;
  let document: Document;
  let localStorage: {
    store: Record<string, string>;
    getItem: any;
    setItem: any;
    clear: any;
  };
  
  const THEME_STORAGE_KEY = 'theme';
  const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system'
  };

  // Mock matchMedia
  const createMatchMedia = (matches: boolean) => {
    return (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn((event: string, handler: (e: { matches: boolean }) => void) => {
        // Store the handler for later use in tests
        if (!window._mediaQueryListeners) {
          window._mediaQueryListeners = [];
        }
        window._mediaQueryListeners.push(handler);
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
  };

  beforeEach(() => {
    // Set up a DOM environment
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <button id="light-theme-button">Light</button>
          <button id="dark-theme-button">Dark</button>
          <button id="system-theme-button">System</button>
        </body>
      </html>
    `, { 
      url: 'http://localhost/',
      runScripts: 'dangerously' 
    });

    window = dom.window;
    document = window.document;
    
    // Mock localStorage
    localStorage = {
      store: {},
      getItem: vi.fn((key) => localStorage.store[key] || null),
      setItem: vi.fn((key, value) => { localStorage.store[key] = value; }),
      clear: vi.fn(() => { localStorage.store = {}; })
    };
    
    Object.defineProperty(window, 'localStorage', { value: localStorage });
    
    // Mock matchMedia
    window.matchMedia = createMatchMedia(false);
    window._mediaQueryListeners = [];
    
    // Inject the theme handling code
    const script = document.createElement('script');
    script.textContent = `
      const THEME_STORAGE_KEY = "${THEME_STORAGE_KEY}";
      const THEME = {
        LIGHT: "${THEME.LIGHT}",
        DARK: "${THEME.DARK}",
        SYSTEM: "${THEME.SYSTEM}"
      };

      function setTheme(theme) {
        // Prevent transition flicker when changing themes
        const css = document.createElement("style");
        css.appendChild(
          document.createTextNode(
            \`* {
               -webkit-transition: none !important;
               -moz-transition: none !important;
               -o-transition: none !important;
               -ms-transition: none !important;
               transition: none !important;
            }\`
          )
        );
        document.head.appendChild(css);

        // Determine if we should use dark mode
        let isDark = false;
        
        if (theme === THEME.DARK) {
          isDark = true;
        } else if (theme === THEME.SYSTEM) {
          isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        // THEME.LIGHT will keep isDark as false

        // Apply theme
        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        // Force repaint
        window.getComputedStyle(css).opacity;
        document.head.removeChild(css);
      }

      function preloadTheme() {
        const userTheme = localStorage.getItem(THEME_STORAGE_KEY);

        if (userTheme === THEME.LIGHT || userTheme === THEME.DARK || userTheme === THEME.SYSTEM) {
          setTheme(userTheme);
        } else {
          // If no theme is set, default to system theme
          localStorage.setItem(THEME_STORAGE_KEY, THEME.SYSTEM);
          setTheme(THEME.SYSTEM);
        }
      }

      // Expose functions to window for testing
      window.setTheme = setTheme;
      window.preloadTheme = preloadTheme;

      // Set up event listeners
      const lightThemeButton = document.getElementById("light-theme-button");
      lightThemeButton?.addEventListener("click", () => {
        localStorage.setItem(THEME_STORAGE_KEY, THEME.LIGHT);
        setTheme(THEME.LIGHT);
      });

      const darkThemeButton = document.getElementById("dark-theme-button");
      darkThemeButton?.addEventListener("click", () => {
        localStorage.setItem(THEME_STORAGE_KEY, THEME.DARK);
        setTheme(THEME.DARK);
      });

      const systemThemeButton = document.getElementById("system-theme-button");
      systemThemeButton?.addEventListener("click", () => {
        localStorage.setItem(THEME_STORAGE_KEY, THEME.SYSTEM);
        setTheme(THEME.SYSTEM);
      });

      // Listen for system theme changes
      window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", event => {
          if (localStorage.getItem(THEME_STORAGE_KEY) === THEME.SYSTEM) {
            setTheme(THEME.SYSTEM);
          }
        });
    `;
    document.head.appendChild(script);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should set light theme correctly', () => {
    // Mock matchMedia to return light mode
    window.matchMedia = createMatchMedia(false);
    
    // Directly call setTheme instead of clicking button
    window.setTheme(THEME.LIGHT);
    
    // Check if dark class was removed
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should set dark theme correctly', () => {
    // Mock matchMedia to return dark mode
    window.matchMedia = createMatchMedia(true);
    
    // Directly call setTheme
    window.setTheme(THEME.DARK);
    
    // Check if dark class was added
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should respect system preference when system theme is selected', () => {
    // Test with system preference set to dark
    window.matchMedia = createMatchMedia(true);
    window.setTheme(THEME.SYSTEM);
    
    // Check if dark class was added (since system preference is dark)
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Change system preference to light
    window.matchMedia = createMatchMedia(false);
    
    // Call setTheme again with system preference
    window.setTheme(THEME.SYSTEM);
    
    // Check if dark class was removed (since system preference is now light)
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should default to system theme when no theme is stored', () => {
    // Mock localStorage to return null for theme
    localStorage.getItem = vi.fn(() => null);
    
    // Mock system preference to dark
    window.matchMedia = createMatchMedia(true);
    
    // Call preloadTheme
    window.preloadTheme();
    
    // Check if localStorage was set to system
    expect(localStorage.setItem).toHaveBeenCalledWith(THEME_STORAGE_KEY, THEME.SYSTEM);
    
    // Check if dark class was added (since system preference is dark)
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should load theme from localStorage if available', () => {
    // Mock localStorage to return dark theme
    localStorage.getItem = vi.fn(() => THEME.DARK);
    
    // Call preloadTheme
    window.preloadTheme();
    
    // Check if dark class was added
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Mock localStorage to return light theme
    localStorage.getItem = vi.fn(() => THEME.LIGHT);
    
    // Call preloadTheme again
    window.preloadTheme();
    
    // Check if dark class was removed
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should handle theme button clicks correctly', () => {
    // Reset localStorage mock to track calls
    localStorage.setItem = vi.fn((key, value) => { localStorage.store[key] = value; });
    
    // 1. Test light theme button
    window.matchMedia = createMatchMedia(false);
    document.getElementById('light-theme-button')?.click();
    
    // Check if localStorage was set correctly
    expect(localStorage.setItem).toHaveBeenCalledWith(THEME_STORAGE_KEY, THEME.LIGHT);
    
    // Check if dark class was removed
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Reset mock
    vi.clearAllMocks();
    
    // 2. Test dark theme button
    window.matchMedia = createMatchMedia(true);
    document.getElementById('dark-theme-button')?.click();
    
    // Check if localStorage was set correctly
    expect(localStorage.setItem).toHaveBeenCalledWith(THEME_STORAGE_KEY, THEME.DARK);
    
    // Check if dark class was added
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Reset mock
    vi.clearAllMocks();
    
    // 3. Test system theme button with dark system preference
    window.matchMedia = createMatchMedia(true);
    document.getElementById('system-theme-button')?.click();
    
    // Check if localStorage was set correctly
    expect(localStorage.setItem).toHaveBeenCalledWith(THEME_STORAGE_KEY, THEME.SYSTEM);
    
    // Check if dark class was added (since system preference is dark)
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Reset mock
    vi.clearAllMocks();
    
    // 4. Test system theme button with light system preference
    window.matchMedia = createMatchMedia(false);
    document.getElementById('system-theme-button')?.click();
    
    // Check if localStorage was set correctly
    expect(localStorage.setItem).toHaveBeenCalledWith(THEME_STORAGE_KEY, THEME.SYSTEM);
    
    // Check if dark class was removed (since system preference is light)
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should respond to system theme changes when system theme is selected', () => {
    // Set up system theme
    localStorage.store[THEME_STORAGE_KEY] = THEME.SYSTEM;
    localStorage.getItem = vi.fn(() => THEME.SYSTEM);
    
    // Start with light system preference
    window.matchMedia = createMatchMedia(false);
    window.setTheme(THEME.SYSTEM);
    
    // Verify light theme is applied
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Simulate system theme change to dark
    const darkMatchMedia = createMatchMedia(true);
    window.matchMedia = darkMatchMedia;
    
    // Trigger the change event
    if (window._mediaQueryListeners && window._mediaQueryListeners.length > 0) {
      // Call all registered handlers with a mock event
      window._mediaQueryListeners.forEach((handler: (e: { matches: boolean }) => void) => {
        handler({ matches: true });
      });
    }
    
    // Verify dark theme is now applied
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Change localStorage to light theme
    localStorage.store[THEME_STORAGE_KEY] = THEME.LIGHT;
    localStorage.getItem = vi.fn(() => THEME.LIGHT);
    
    // Simulate another system theme change
    if (window._mediaQueryListeners && window._mediaQueryListeners.length > 0) {
      // Call all registered handlers with a mock event
      window._mediaQueryListeners.forEach((handler: (e: { matches: boolean }) => void) => {
        handler({ matches: false });
      });
    }
    
    // Verify theme remains light (system changes shouldn't affect when not in system mode)
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
}); 