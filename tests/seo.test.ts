import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('SEO Files', () => {
  it('has a robots.txt file', () => {
    const filePath = path.join(process.cwd(), 'dist', 'robots.txt');
    expect(fs.existsSync(filePath)).toBe(true);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('User-agent');
    expect(content).toContain('Allow');
  });

  it('has an RSS feed', () => {
    const filePath = path.join(process.cwd(), 'dist', 'rss.xml');
    expect(fs.existsSync(filePath)).toBe(true);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('<rss');
    expect(content).toContain('<channel>');
    expect(content).toContain('<item>');
    expect(content).toContain('Wojtek Erbetowski');
  });

  it('has a sitemap', () => {
    const filePath = path.join(process.cwd(), 'dist', 'sitemap-index.xml');
    expect(fs.existsSync(filePath)).toBe(true);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('<sitemapindex');
    
    // Check for sitemap-0.xml
    const sitemapFilePath = path.join(process.cwd(), 'dist', 'sitemap-0.xml');
    expect(fs.existsSync(sitemapFilePath)).toBe(true);
    
    const sitemapContent = fs.readFileSync(sitemapFilePath, 'utf-8');
    expect(sitemapContent).toContain('<urlset');
    expect(sitemapContent).toContain('<url>');
    expect(sitemapContent).toContain('https://erbetowski.pl');
  });
}); 