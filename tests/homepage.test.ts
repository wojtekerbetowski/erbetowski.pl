import { describe, it, expect, beforeAll } from 'vitest';
import { loadBuiltPage, containsText, hasElement, hasLink } from './utils';
import { JSDOM } from 'jsdom';

describe('Homepage', () => {
  let dom: JSDOM;

  beforeAll(() => {
    // Load the homepage from the built files
    dom = loadBuiltPage('index.html');
  });

  it('has the correct title', () => {
    const title = dom.window.document.title;
    expect(title).toContain('Wojtek Erbetowski');
  });

  it('contains the introduction section', () => {
    expect(containsText(dom, "Hi, I'm Wojtek")).toBe(true);
    expect(containsText(dom, "I'm a hands-on leader")).toBe(true);
  });

  it('has navigation links', () => {
    expect(hasElement(dom, 'nav')).toBe(true);
    expect(hasLink(dom, '/about')).toBe(true);
    expect(hasLink(dom, '/work')).toBe(true);
    expect(hasLink(dom, '/projects')).toBe(true);
    expect(hasLink(dom, '/blog')).toBe(true);
  });

  it('has a latest posts section', () => {
    expect(containsText(dom, 'Latest posts')).toBe(true);
  });

  it('has a work experience section', () => {
    expect(containsText(dom, 'Work Experience')).toBe(true);
    expect(containsText(dom, 'Island')).toBe(true);
  });

  it('has a recent projects section', () => {
    expect(containsText(dom, 'Recent projects')).toBe(true);
  });

  it('has a contact section', () => {
    expect(containsText(dom, "Let's Connect")).toBe(true);
    expect(containsText(dom, 'wojtek@erbetowski.pl')).toBe(true);
  });

  it('has a footer with copyright information', () => {
    expect(hasElement(dom, 'footer')).toBe(true);
    expect(containsText(dom, '© 2025')).toBe(true);
    expect(containsText(dom, 'Wojtek Erbetowski')).toBe(true);
  });
}); 