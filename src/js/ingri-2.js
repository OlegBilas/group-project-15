(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-ingri-2]'),
    closeModalBtn: document.querySelector('[data-close-ingri-2]'),
    modal: document.querySelector('[data-ingri-2]'),
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
