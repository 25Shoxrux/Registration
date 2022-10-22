let formR = document.forms.reg

formR.onsubmit = (e) => {
    e.preventDefault()

    let user = {}


    let fm = new FormData(formR)

    fm.forEach((value, key) =>{
        user[key] = value
    })

    alert('welcom')
   console.log(user);

    localStorage.setItem('user', JSON.stringify(user))

    window.location = '../html/log.html'
}