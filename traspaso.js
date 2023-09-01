const scriptURL = 'https://script.google.com/macros/s/AKfycbyCWrznjm5EuUMYJ8VO1OiMzBhJGHv5g3idVCnuRkoYmj0ywyonT762YxGBIe-f36u0/exec'
const form = document.forms['traspasoForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
