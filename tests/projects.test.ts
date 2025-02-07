import { describe, it, expect, beforeAll } from 'vitest';
import { loadBuiltPage, containsText, hasElement, hasLink } from './utils';
import { JSDOM } from 'jsdom';

describe('Projects Page', () => {
  let dom: JSDOM;

  beforeAll(() => {
    // Load the projects page from the built files
    dom = loadBuiltPage('projects/index.html');
  });

  it('has the correct title', () => {
    const title = dom.window.document.title;
    expect(title).toContain('Projects');
    expect(title).toContain('Wojtek Erbetowski');
  });

  it('contains the projects page heading', () => {
    const h1 = dom.window.document.querySelector('h1');
    expect(h1?.textContent).toContain('Projects');
  });

  it('has projects listed', () => {
    // Check for project elements
    const projectElements = dom.window.document.querySelectorAll('article');
    expect(projectElements.length).toBeGreaterThan(0);
  });

  it('has links to individual projects', () => {
    // Check for at least one project link
    expect(hasLink(dom, '/projects/')).toBe(true);
  });

  it('contains the L8 Conference project', () => {
    expect(containsText(dom, 'L8 Conference')).toBe(true);
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