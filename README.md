# Wojtek Erbetowski's Personal Website

This is my personal website built with Astro, showcasing my work experience, projects, and blog posts.

## Technology Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Cloudflare Pages](https://pages.cloudflare.com/) - For hosting and deployment

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Deployment

This site is automatically deployed to Cloudflare Pages via GitHub Actions whenever changes are pushed to the main branch.

### Setting up Cloudflare Pages Deployment

1. Create a Cloudflare Pages project:
   - Go to the Cloudflare dashboard
   - Navigate to Pages
   - Create a new project named "astro-nano"
   - Connect it to your GitHub repository

2. Set up GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`: Create a Cloudflare API token with "Edit Cloudflare Pages" permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID (found in the dashboard URL)

3. Push changes to the main branch to trigger deployment

## License

All rights reserved.