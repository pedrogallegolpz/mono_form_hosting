const scriptURL = 'https://script.google.com/macros/s/AKfycbzSTpjf9VpsJuKzH5MIEbiZaavwhI-_UUicwfuuYXA/dev'
const form = document.forms['traspasoForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
