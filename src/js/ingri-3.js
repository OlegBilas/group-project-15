(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-ingri-3]'),
    closeModalBtn: document.querySelector('[data-close-ingri-3]'),
    modal: document.querySelector('[data-ingri-3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();