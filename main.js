var typed = new Typed('#role', {
  strings: ['Full stack developer','Angular developer','ASP.Net developer'],
  typeSpeed:50,
  backSpeed:50,
  backDelay:50,
  loop:true
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbz_0mrb61SppcDa40pPCurtPZJkRJQrhNdOwiuEyOymlHYJuyYmovt0O0UeWG7ryuOKng/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML= "Message sent successfully"
      setTimeout(function(){
          msg.innerHTML= ""
      },4000)
      form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})