const scriptURL = 'https://script.google.com/macros/s/AKfycbzMp6-BDSt8KqI2ndCYlI6RMpTXXiT2qMu2ieO9LatjYCI4pd0jZ7A86cF2UxQnVzLq/exec'
const form = document.forms['traspasoForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
