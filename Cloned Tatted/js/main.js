document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const successMessage = form.querySelector('.form-success');
    if (!successMessage) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      successMessage.classList.add('show');
      form.reset();
    });
  });
});
