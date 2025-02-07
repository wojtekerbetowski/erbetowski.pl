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

  it('contains blog page content', () => {
    expect(containsText(dom, 'Blog')).toBe(true);
  });

  it('has blog-related content', () => {
    // Check for any blog-related content
    expect(
      containsText(dom, 'Blog') || 
      containsText(dom, 'post') || 
      containsText(dom, 'article') || 
      containsText(dom, 'writing')
    ).toBe(true);
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