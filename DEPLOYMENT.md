# Deployment Guide

This guide explains how to deploy the Loom CSS documentation and example apps.

## Overview

The Loom CSS project includes:
- **Documentation**: Docusaurus site with component documentation
- **React Example App**: Next.js app showcasing React components
- **Vue Example App**: Vue.js app showcasing Vue components

## Prerequisites

Before deploying, ensure you have the following installed:

- Node.js (v18 or higher)
- npm
- Vercel CLI: `npm install -g vercel`
- Netlify CLI: `npm install -g netlify-cli`

## Quick Deployment

Use the provided deployment script to deploy all apps:

```bash
./scripts/deploy-apps.sh
```

## Manual Deployment

### 1. Deploy React Example App (Vercel)

```bash
# Navigate to React app
cd apps/web

# Install dependencies
npm install

# Build the app
npm run build

# Deploy to Vercel
vercel --prod
```

### 2. Deploy Vue Example App (Netlify)

```bash
# Navigate to Vue app
cd apps/vue-example

# Install dependencies
npm install

# Build the app
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### 3. Deploy Documentation (Vercel)

```bash
# From project root
npm run docs:build
vercel --prod --cwd=.
```

## Configuration Files

### Vercel Configuration (React App)

The React app includes a `vercel.json` configuration file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Netlify Configuration (Vue App)

The Vue app includes a `netlify.toml` configuration file:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Environment Variables

### React App

No additional environment variables are required for the React app.

### Vue App

No additional environment variables are required for the Vue app.

### Documentation

No additional environment variables are required for the documentation.

## Custom Domains

### Vercel (React App & Documentation)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Configure DNS records as instructed

### Netlify (Vue App)

1. Go to your Netlify dashboard
2. Select your site
3. Go to Domain settings
4. Add your custom domain
5. Configure DNS records as instructed

## Continuous Deployment

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Loom CSS

on:
  push:
    branches: [main]

jobs:
  deploy-react:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: cd apps/web && npm install && npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: apps/web

  deploy-vue:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: cd apps/vue-example && npm install && npm run build
      - uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './apps/vue-example/dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"

  deploy-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run docs:build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.DOCS_PROJECT_ID }}
```

### Required Secrets

Add these secrets to your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel API token
- `ORG_ID`: Your Vercel organization ID
- `PROJECT_ID`: Your React app project ID
- `DOCS_PROJECT_ID`: Your documentation project ID
- `NETLIFY_AUTH_TOKEN`: Your Netlify API token
- `NETLIFY_SITE_ID`: Your Netlify site ID

## Monitoring and Analytics

### Vercel Analytics

Enable Vercel Analytics for both the React app and documentation:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Analytics tab
4. Enable Web Analytics

### Netlify Analytics

Enable Netlify Analytics for the Vue app:

1. Go to your Netlify dashboard
2. Select your site
3. Go to Analytics tab
4. Enable Analytics

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Clear node_modules and reinstall dependencies
   - Check for TypeScript errors

2. **Deployment Failures**
   - Verify API tokens and credentials
   - Check build logs for specific errors
   - Ensure all required environment variables are set

3. **Domain Issues**
   - Verify DNS configuration
   - Check SSL certificate status
   - Ensure domain is properly configured in platform settings

### Getting Help

- Check the [GitHub Issues](https://github.com/HR199812/loom-css/issues)
- Review platform-specific documentation:
  - [Vercel Docs](https://vercel.com/docs)
  - [Netlify Docs](https://docs.netlify.com/)

## URLs

After deployment, your apps will be available at:

- **React App**: `https://loom-css-react.vercel.app`
- **Vue App**: `https://loom-css-vue.netlify.app`
- **Documentation**: `https://loom-css-docs.vercel.app`

Update these URLs in your documentation and component examples.
