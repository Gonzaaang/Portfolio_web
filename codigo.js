

const cambiarTemaBtn = document.getElementById('cambiar-tema');
let temaOscuro = true;

cambiarTemaBtn.addEventListener('click', () => {
  document.body.classList.toggle('tema-claro');
  temaOscuro = !temaOscuro;
  cambiarTemaBtn.textContent = temaOscuro ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro';
});
