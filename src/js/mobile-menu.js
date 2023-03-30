(() => {
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    const mobileMenuOverlay = document.querySelector('.js-overlay-modal:not(.is-hidden)');
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('is-hidden');
    }
    
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
