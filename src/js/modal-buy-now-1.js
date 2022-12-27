(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-buy-1]'),
    closeModalBtn: document.querySelector('[data-close-buy-1]'),
    modal: document.querySelector('[data-buy-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();