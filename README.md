# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Deployment

Every push to `main` runs the Nuxt production build and deploys the application to Vercel through GitHub Actions.

Add these repository secrets before the first deployment:

- `VERCEL_TOKEN`: a Vercel access token
- `VERCEL_ORG_ID`: the Vercel team or account ID
- `VERCEL_PROJECT_ID`: the Vercel project ID

The workflow is defined in `.github/workflows/deploy.yml`.
