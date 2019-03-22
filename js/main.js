const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  alert('We Have Received Your Message!');
  form.reset();

});
