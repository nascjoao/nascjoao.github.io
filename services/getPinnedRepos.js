import isDevelopmentMode from "../utils/isDevelopmentMode.js";
import notifyError from "../utils/notifyError.js";

export default async function getPinnedRepos() {
  try {
    const API_ENDPOINT = isDevelopmentMode() ? 'http://localhost:3001' : 'https://api.nasc.dev';
    const response = await fetch(`${API_ENDPOINT}/repos/pinned`);
    const repos = await response.json();
    return repos;
  } catch (error) {
    notifyError('Não foi possível obter as informações sobre os projetos. Esse erro não deveria ter acontecido. Se persistir, por favor, faça contato comigo através do e-mail oi@nasc.dev', 7000);
  }
}
