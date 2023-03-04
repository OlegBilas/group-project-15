(() => {
  //const mobileMenuOverlay = document.querySelector('.js-overlay-modal:not(.is-hidden)');
  // const openMenuBtn = document.querySelector('.js-open-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');
  // const menuLink = document.querySelectorAll('.mobile-menu-close');
  // const toggleMenu = () => {
  //   const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  //   openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  //   mobileMenu.classList.toggle('is-open');
  //   const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  //   bodyScrollLock[scrollLockMethod](document.body);
  // };
  // openMenuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);
  // menuLink.forEach(link =>
  //   link.addEventListener('click', () => {
  //     mobileMenu.classList.remove('is-open');
  //     openMenuBtn.classList.toggle('is-open');
  //     bodyScrollLock.enableBodyScroll(document.body);
  //   })
  // );
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    const mobileMenuOverlay = document.querySelector('.js-overlay-modal:not(.is-hidden)');
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('is-hidden');
    }
    // openMenuBtn.classList.remove('is-open');
    // openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
