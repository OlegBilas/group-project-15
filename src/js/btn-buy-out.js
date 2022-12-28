(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-buy-out]'),
    closeModalBtn: document.querySelector('[data-close-buy-out]'),
    modal: document.querySelector('[data-buy-out]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();