import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('SEO Files', () => {
  it('has a robots.txt file with sitemap reference', () => {
    const filePath = path.join(process.cwd(), 'dist', 'robots.txt');
    expect(fs.existsSync(filePath)).toBe(true);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('User-agent');
    expect(content).toContain('Allow');
    expect(content).toContain('Sitemap:');
    expect(content).toContain('sitemap-index.xml');
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

  it('has a sitemap-index.xml file', () => {
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
  
  it('has a sitemap.xml file that references sitemap-index.xml', () => {
    const filePath = path.join(process.cwd(), 'dist', 'sitemap.xml');
    expect(fs.existsSync(filePath)).toBe(true);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(content).toContain('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(content).toContain('<sitemap>');
    expect(content).toContain('<loc>');
    expect(content).toContain('sitemap-index.xml');
  });
  
  it('has a manifest.json file', () => {
    const filePath = path.join(process.cwd(), 'dist', 'manifest.json');
    expect(fs.existsSync(filePath)).toBe(true);
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(content);
    expect(manifest.name).toBe('Wojtek Erbetowski');
    expect(manifest.short_name).toBe('Erbetowski');
    expect(manifest.icons).toBeDefined();
    expect(manifest.icons.length).toBeGreaterThan(0);
  });
}); 