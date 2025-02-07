import { describe, it, expect, beforeAll } from 'vitest';
import { loadBuiltPage, containsText, hasElement, hasLink } from './utils';
import { JSDOM } from 'jsdom';

describe('Blog Page', () => {
  let dom: JSDOM;

  beforeAll(() => {
    // Load the blog page from the built files
    dom = loadBuiltPage('blog/index.html');
  });

  it('has the correct title', () => {
    const title = dom.window.document.title;
    expect(title).toContain('Blog');
    expect(title).toContain('Wojtek Erbetowski');
  });

  it('contains the blog page heading', () => {
    const h1 = dom.window.document.querySelector('h1');
    expect(h1?.textContent).toContain('Blog');
  });

  it('has blog posts listed', () => {
    // Check for blog post elements
    const articles = dom.window.document.querySelectorAll('article');
    expect(articles.length).toBeGreaterThan(0);
  });

  it('has links to individual blog posts', () => {
    // Check for at least one blog post link
    expect(hasLink(dom, '/blog/')).toBe(true);
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