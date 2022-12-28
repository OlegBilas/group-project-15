(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-ingri]'),
    closeModalBtn: document.querySelector('[data-close-ingri]'),
    modal: document.querySelector('[data-ingri]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();