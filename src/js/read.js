(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-read]'),
    closeModalBtn: document.querySelector('[data-close-read]'),
    modal: document.querySelector('[data-read]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();