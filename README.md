# GitHub Actions Pages Demo

A small Vite site for demonstrating a CI/CD pipeline with GitHub Actions and GitHub Pages.

## What the Pipeline Shows

Every push to `main` runs this flow:

1. Checkout the repository.
2. Install dependencies with `npm install`.
3. Run a smoke test with `npm test`.
4. Build the static site with `npm run build`.
5. Deploy the `dist` folder to the `gh-pages` branch.

Pull requests run the test and build stages but skip deployment.

## Local Development

```bash
npm install
npm run dev
```

## Local Validation

```bash
npm test
npm run build
```

## GitHub Pages Setup

The workflow publishes the built site to the `gh-pages` branch. If the Pages URL is not live yet, open repository settings, go to Pages, and set the source to `Deploy from a branch`, then choose `gh-pages` and `/root`.

## Demo Script

1. Open the repository Actions tab.
2. Show `.github/workflows/deploy.yml`.
3. Edit a visible line in `src/main.js` or `src/styles.css`.
4. Commit the change to `main`.
5. Watch the workflow run through test, build, and deploy.
6. Open the GitHub Pages URL after the workflow succeeds.

## Useful Links

- Repository: https://github.com/alodha100/github-actions-pages-demo
- Actions: https://github.com/alodha100/github-actions-pages-demo/actions
- Pages URL: https://alodha100.github.io/github-actions-pages-demo/
