# Wojtek Erbetowski's Personal Website

This is my personal website built with Astro, showcasing my work experience, projects, and blog posts.

## Technology Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vitest](https://vitest.dev/) - Unit testing framework
- [Cloudflare Pages](https://pages.cloudflare.com/) - For hosting and deployment

## Development

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/wojtekerbetowski/erbetowski.pl.git
cd erbetowski.pl
npm install
```

### Development Server

To run the development server:

```bash
npm run dev
```

For network access (to view on other devices):

```bash
npm run dev:network
```

### Building

To build the site:

```bash
npm run build
```

To preview the built site:

```bash
npm run preview
```

## Testing

This project uses Vitest for unit testing. Tests are located in the `tests` directory.

To run tests:

```bash
npm run test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To build and test in one command:

```bash
npm run build:test
```

## Code Quality

This project uses several tools to ensure code quality:

- **ESLint**: For static code analysis
  ```bash
  npm run lint
  ```

- **Prettier**: For code formatting
  ```bash
  # Format with Prettier (requires global installation)
  npx prettier --write .
  ```

- **TypeScript**: For type checking
  ```bash
  # Type checking is part of the build process
  npm run build
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

## Project Structure

```
erbetowski.pl/
├── .github/            # GitHub Actions workflows
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Blog posts and project content (MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components and routes
│   ├── styles/         # Global styles
│   └── lib/            # Utility functions
├── tests/              # Unit tests
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## License

All rights reserved.