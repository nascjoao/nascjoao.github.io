import getPinnedRepos from "./services/getPinnedRepos.js";

async function loadProjects() {
  const repos = await getPinnedRepos();
  const gridElement = document.querySelector('#projects .grid');
  if (!repos) {
    const p = document.createElement('p');
    const a = document.createElement('a');
    p.textContent = 'Nenhum projeto foi carregado. Isso pode ter sido um erro. Se persistir, por favor, entre em contato comigo pelo e-mail '
    a.textContent = 'oi@nasc.dev'
    a.href = 'mailto:oi@nasc.dev'
    p.appendChild(a);
    p.append('.');
    gridElement.appendChild(p);
  }
  for (const repo of repos) {
    const div = document.createElement('div');
    const strong = document.createElement('strong');
    const p = document.createElement('p');
    const link = document.createElement('p');
    const a = document.createElement('a');

    a.href = repo.url;
    a.setAttribute('target', '_blank');
    strong.textContent = repo.name;
    p.textContent = repo.description;
    link.textContent = repo.url;
    
    a.appendChild(div);
    div.appendChild(strong);
    div.appendChild(p);
    div.appendChild(link);

    gridElement.appendChild(a);
  }
}

window.onload = async () => {
  await loadProjects();
}
