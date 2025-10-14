// === Modo oscuro / claro ===
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Aplicar tema guardado
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Evento de cambio
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
