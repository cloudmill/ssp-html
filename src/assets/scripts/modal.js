document.addEventListener('click', (e) => {
  const $target = e.target;

  if ($target.dataset.modalBtn) {
    e.preventDefault();

    document
        .querySelector(`.modal[data-modal="${$target.dataset.modalBtn}"]`)
        .classList.add('active');
  } else if ($target.dataset.modalClose) {
    $target.closest('.modal[data-modal]')
        .classList.remove('active');
  }

});
