(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=[{label:"1",title:"Checkout",detail:"GitHub Actions pulls the latest code from the main branch."},{label:"2",title:"Install",detail:"The runner installs dependencies with npm ci for repeatable builds."},{label:"3",title:"Test",detail:"A smoke test verifies the app metadata before deployment."},{label:"4",title:"Build",detail:"Vite creates optimized static assets in the dist folder."},{label:"5",title:"Deploy",detail:"The built site is published automatically to GitHub Pages."}],n=document.querySelector("#app");n.innerHTML=`
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
    ${a.map(i=>`
      <article class="stage">
        <span>${i.label}</span>
        <h2>${i.title}</h2>
        <p>${i.detail}</p>
      </article>
    `).join("")}
  </section>
`;
