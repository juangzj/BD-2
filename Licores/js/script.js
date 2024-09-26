document.getElementById('menuToggle').addEventListener('click', function () {
  const enlaces = document.getElementById('enlaces');
  if (enlaces.classList.contains('oculto')) {
    enlaces.classList.remove('oculto');
    enlaces.classList.add('mostrar');
  } else {
    enlaces.classList.remove('mostrar');
    enlaces.classList.add('oculto');
  }
});
