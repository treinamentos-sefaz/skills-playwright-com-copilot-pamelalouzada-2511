const form = document.getElementById('newsletter-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Inscrição confirmada!';
});
