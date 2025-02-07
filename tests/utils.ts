import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

/**
 * Reads an HTML file from the dist directory and returns a JSDOM instance
 */
export function loadBuiltPage(pagePath: string): JSDOM {
  const filePath = path.join(process.cwd(), 'dist', pagePath);
  const html = fs.readFileSync(filePath, 'utf-8');
  return new JSDOM(html);
}

/**
 * Checks if a specific text is present in the document
 */
export function containsText(dom: JSDOM, text: string): boolean {
  return dom.window.document.body.textContent?.includes(text) || false;
}

/**
 * Checks if a specific element with the given selector exists
 */
export function hasElement(dom: JSDOM, selector: string): boolean {
  return dom.window.document.querySelector(selector) !== null;
}

/**
 * Checks if a link with the given href exists
 */
export function hasLink(dom: JSDOM, href: string): boolean {
  const links = dom.window.document.querySelectorAll('a');
  return Array.from(links).some((link: Element) => link.getAttribute('href')?.includes(href) || false);
}

/**
 * Gets all meta tags with a specific property
 */
export function getMetaTags(dom: JSDOM, property: string): HTMLMetaElement[] {
  const metaTags = dom.window.document.querySelectorAll(`meta[property="${property}"]`);
  return Array.from(metaTags) as HTMLMetaElement[];
}

/**
 * Checks if a specific image exists in the document
 */
export function hasImage(dom: JSDOM, src: string): boolean {
  const images = dom.window.document.querySelectorAll('img');
  return Array.from(images).some((img: Element) => img.getAttribute('src')?.includes(src) || false);
} 