(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-buy-in]'),
    closeModalBtn: document.querySelector('[data-close-buy-in]'),
    modal: document.querySelector('[data-buy-in]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    const scrollLockMethod = !refs.modal.classList.contains('is-hidden')
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
