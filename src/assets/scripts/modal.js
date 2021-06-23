const $overlay = document.querySelector('.overlay');

if ($overlay) {
  $overlay.addEventListener('click', () => {
    $overlay.classList.remove('active');

    document.querySelectorAll('.modal').forEach($modal => {
      $modal.classList.remove('active');
    });
  });
}

document.addEventListener('click', (e) => {
  const $target = e.target;

  if ($target.dataset.modalBtn) {
    e.preventDefault();

    $overlay.classList.add('active');
    document
        .querySelector(`.modal[data-modal="${$target.dataset.modalBtn}"]`)
        .classList.add('active');
  } else if ($target.dataset.modalClose) {
    $target.closest('.modal[data-modal]')
        .classList.remove('active');
  }

});
