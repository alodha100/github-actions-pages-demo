import './styles.css';

const pipelineSteps = [
  {
    label: '1',
    title: 'Checkout',
    detail: 'GitHub Actions pulls the latest code from the main branch.'
  },
  {
    label: '2',
    title: 'Install',
    detail: 'The runner installs dependencies with npm ci for repeatable builds.'
  },
  {
    label: '3',
    title: 'Test',
    detail: 'A smoke test verifies the app metadata before deployment.'
  },
  {
    label: '4',
    title: 'Build',
    detail: 'Vite creates optimized static assets in the dist folder.'
  },
  {
    label: '5',
    title: 'Deploy',
    detail: 'The built site is published automatically to GitHub Pages.'
  }
];

const app = document.querySelector('#app');

app.innerHTML = `
  <section class="hero" aria-labelledby="page-title">
    <p class="eyebrow">GitHub Actions Demo</p>
    <h1 id="page-title">CI/CD pipeline from commit to live site</h1>
    <p class="intro">
      This tiny Vite app is built, tested, and deployed by GitHub Actions whenever code is pushed to main.
    </p>
    <div class="actions">
      <a href="https://github.com/alodha100/github-actions-pages-demo/actions" target="_blank" rel="noreferrer">View workflow runs</a>
      <a href="https://github.com/alodha100/github-actions-pages-demo" target="_blank" rel="noreferrer">Open repository</a>
    </div>
  </section>

  <section class="pipeline" aria-label="Pipeline stages">
    ${pipelineSteps.map((step) => `
      <article class="stage">
        <span>${step.label}</span>
        <h2>${step.title}</h2>
        <p>${step.detail}</p>
      </article>
    `).join('')}
  </section>
`;
