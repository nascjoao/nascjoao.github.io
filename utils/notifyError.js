let timeoutToClose = null;

function close(notificationElement) {
  notificationElement.classList.add('closing')
  timeoutToClose = setTimeout(() => {
    notificationElement.remove()
  }, 300)
}

function stopClosing(notificationElement, delayToClose) {
  notificationElement.onmouseover = () => {
    clearTimeout(timeoutToClose)
  }
  
  notificationElement.onmouseout = () => {
    if (delayToClose) {
      timeoutToClose = setTimeout(() => {
        close(notificationElement)
      }, delayToClose)
    }
  }
}

function createElement(text) {
  const div = document.createElement('div');
  const strong = document.createElement('strong');
  const p = document.createElement('p');
  const button = document.createElement('button');
  strong.textContent = 'Ops! Algo deu errado'
  p.textContent = text;
  button.textContent = '✕';
  div.appendChild(button);
  div.appendChild(strong);
  div.appendChild(p);
  div.className = 'notification error';
  button.onclick = () => close(div);
  document.body.appendChild(div);
  return div;
}

export default function notifyError(text, delayToClose) {
  const notificationElement = createElement(text);
  stopClosing(notificationElement, delayToClose);
  if (delayToClose) {
    timeoutToClose = setTimeout(() => {
      close(notificationElement)
    }, delayToClose)
  }
}
