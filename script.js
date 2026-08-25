// Abre e fecha o menu no celular
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var list = document.querySelector('.nav-list');
  if (!toggle || !list) return;
  toggle.addEventListener('click', function () {
    list.classList.toggle('is-open');
  });
});
