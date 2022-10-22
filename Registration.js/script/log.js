let formL = document.forms.log
let input = document.querySelectorAll('input')
let name = localStorage.getItem('name')
let password = localStorage.getItem('password')
let surname = localStorage.getItem('surname')
let email = localStorage.getItem('email')

formL.onsubmit = (event) => {

    event.preventDefault()


    let user = {}


    let fm = new FormData(formL)

    fm.forEach((value, key) =>{
        user[key] = value
    })

    
    console.log(user);


    if(email === user.email && password === user.password){
        window.location = "../html/home.html"
        // alert('welcom')
        // console.log('hi');
    } else{
        window.location = "../html/home.html"
        // window.location = "../html/reg.html"
        // console.log('bye-bye');
        // // alert('bye-bye')
    }
}