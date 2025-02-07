import { describe, it, expect, beforeAll } from 'vitest';
import { loadBuiltPage, containsText, hasElement } from './utils';
import { JSDOM } from 'jsdom';

describe('Work Page', () => {
  let dom: JSDOM;

  beforeAll(() => {
    // Load the work page from the built files
    dom = loadBuiltPage('work/index.html');
  });

  it('has the correct title', () => {
    const title = dom.window.document.title;
    expect(title).toContain('Work');
    expect(title).toContain('Wojtek Erbetowski');
  });

  it('contains the work page heading', () => {
    const h1 = dom.window.document.querySelector('h1');
    expect(h1?.textContent).toContain('Work');
  });

  it('has work experience listed', () => {
    // Check for work experience elements
    const workElements = dom.window.document.querySelectorAll('article');
    expect(workElements.length).toBeGreaterThan(0);
  });

  it('contains specific work experiences', () => {
    expect(containsText(dom, 'Island')).toBe(true);
    expect(containsText(dom, 'Site Lead')).toBe(true);
    expect(containsText(dom, 'L8 Conference')).toBe(true);
    expect(containsText(dom, 'Co-Founder')).toBe(true);
  });

  it('has a navigation menu', () => {
    expect(hasElement(dom, 'nav')).toBe(true);
  });

  it('has a footer with copyright information', () => {
    expect(hasElement(dom, 'footer')).toBe(true);
    expect(containsText(dom, '© 2025')).toBe(true);
    expect(containsText(dom, 'Wojtek Erbetowski')).toBe(true);
  });
}); 