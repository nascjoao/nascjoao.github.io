function resetRoute() {
  const languages = ['en-US', 'pt-BR'];
  let pathname = location.pathname.split('/').splice(1);
  if (pathname.splice(0, 1).includes(...languages)) {
    pathname = pathname.splice(1).join();
  }
  return pathname;
}

export default function i18nRouting() {
  const i18n = sessionStorage.getItem('i18n');

  if (!i18n) {
    switch (navigator.language) {
      case 'pt-BR':
        location.pathname = resetRoute();
        sessionStorage.setItem('i18n', 'true')
        break;

      case 'pt-PT':
        location.pathname = resetRoute();
        sessionStorage.setItem('i18n', 'true')
        break;
        
      default:
        location.pathname = `en-US${location.pathname}`
        sessionStorage.setItem('i18n', 'true')
        break;
    }
  }
}
