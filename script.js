const form = document.getElementById('form')
const tutorMessage = document.getElementById('tutorMessage')
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    form.style.display = 'none'
    const p = document.createElement('p')
    p.innerHTML = 'Valeu Tutor!'
    tutorMessage.appendChild(p)
})