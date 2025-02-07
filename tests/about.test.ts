import { describe, it, expect, beforeAll } from 'vitest';
import { loadBuiltPage, containsText, hasElement } from './utils';
import { JSDOM } from 'jsdom';

describe('About Page', () => {
  let dom: JSDOM;

  beforeAll(() => {
    // Load the about page from the built files
    dom = loadBuiltPage('about/index.html');
  });

  it('has the correct title', () => {
    const title = dom.window.document.title;
    expect(title).toContain('About');
    expect(title).toContain('Wojtek Erbetowski');
  });

  it('contains the about page heading', () => {
    const h1 = dom.window.document.querySelector('h1');
    expect(h1?.textContent).toContain('About');
  });

  it('contains personal information', () => {
    expect(containsText(dom, 'Wojtek Erbetowski')).toBe(true);
    // Add more specific content checks based on your about page
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