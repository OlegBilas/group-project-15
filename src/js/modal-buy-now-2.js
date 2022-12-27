(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-buy-2]'),
    closeModalBtn: document.querySelector('[data-close-buy-2]'),
    modal: document.querySelector('[data-buy-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();