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

The live site is available at [erbetowski.pl](https://erbetowski.pl).

### Current Deployment Status

✅ Successfully deployed to Cloudflare Pages on March 2, 2025.

### Useful Links

- [Live Website](https://erbetowski.pl)
- [GitHub Repository](https://github.com/wojtekerbetowski/erbetowski.pl)
- [GitHub Actions Workflows](https://github.com/wojtekerbetowski/erbetowski.pl/actions)
- [Cloudflare Pages Dashboard](https://dash.cloudflare.com/6ed2b21bc52cc88088ef444a227eb1d9/pages/view/erbetowski-pl)

### Setting up Cloudflare Pages Deployment

1. Create a Cloudflare Pages project:
   - Go to the [Cloudflare dashboard](https://dash.cloudflare.com/)
   - Navigate to [Workers & Pages](https://dash.cloudflare.com/6ed2b21bc52cc88088ef444a227eb1d9/workers-and-pages)
   - Create a new project named "erbetowski-pl"
   - Connect it to your GitHub repository

2. Set up GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`: Create a Cloudflare API token with "Edit Cloudflare Pages" permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID (found in the dashboard URL)

3. Push changes to the main branch to trigger deployment

## License

All rights reserved.