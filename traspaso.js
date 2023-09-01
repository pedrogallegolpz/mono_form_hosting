const scriptURL = 'https://script.google.com/macros/s/AKfycbwKrnfjHNb8CTbiLYMRznaCTZf6QgHVrWZyLvYH_SHeXiKXHuH4RMFYRhibtnmTsZ4a/exec'
const form = document.forms['traspasoForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
