const scriptURL = 'https://script.google.com/macros/s/AKfycbwibGD3peLlHgB8ayv_K2cVQJ99wY2KMG82voQbaEU_npMIuKegd1u38R21PZM8Lnj1/exec'
const form = document.forms['traspasoForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'doPOST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
