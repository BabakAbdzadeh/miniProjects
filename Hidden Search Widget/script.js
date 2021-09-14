const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

const input = document.querySelector('input'); // NOTE:  To add typung focus on search bar



btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
})
