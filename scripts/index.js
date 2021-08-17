import Shield from './components/shield/index.js';
import i18nRouting from './i18n/routing.js';

customElements.define('shield-button', Shield);

window.onload = () => {
  i18nRouting();
}
