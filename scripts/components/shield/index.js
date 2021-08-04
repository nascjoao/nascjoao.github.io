const css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('href', './scripts/components/shield/styles.css');

const fontAwesome = document.createElement('link');
fontAwesome.setAttribute('rel', 'stylesheet');
fontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

function newShield() {
  const button = document.createElement('button');
  const icon = document.createElement('i');
  icon.setAttribute('aria-hidden', true);
  const a = document.createElement('a');
  a.classList.add('shield');
  const p = document.createElement('p');

  a.appendChild(button);
  button.appendChild(icon);
  button.appendChild(p);

  return { button, icon, element: a, text: p }
}

export class Shield extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const shield = newShield();
    
    shield.element.href = this.getAttribute('href');
    this.getAttributeNode('openinnewtab') && shield.element.setAttribute('target', '_blank');
    shield.text.append(this.textContent);
    shield.icon.className = this.getAttribute('icon');
    
    this.shadowRoot.append(shield.element);
    shadow.appendChild(css);
    shadow.appendChild(fontAwesome);
  }
}
