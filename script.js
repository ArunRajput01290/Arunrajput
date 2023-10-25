const scriptURL = 'https://script.google.com/macros/s/AKfycbzxwiivcl2Q1OETJMR4LW1t5xmjkHUO0fYAAHky3mEsZn3EOswKvEh2Pwdbh2dpKWzW/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },10000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
