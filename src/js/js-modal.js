(() => {
  const refs = {
    openModalBtn1: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn1: document.querySelector('[data-modal-close]'),
    modal1: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn1.forEach(item =>
    item.addEventListener('click', toggleModal1)
  );

  refs.closeModalBtn1.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs.modal1.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }

  if ('ontouchstart' in window) {
    refs.openModalBtn1.forEach(item =>
      item.addEventListener('touchstart', toggleModal1)
    );
  }
})();
