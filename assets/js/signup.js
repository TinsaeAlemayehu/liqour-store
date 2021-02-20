const email = document.querySelector('#email')
const password = document.querySelector("#pass")
const username = document.querySelector('#user')

const signUpBtn = document.querySelector("#signupbtn")
const logInBtn = document.querySelector('#signinbtn')
const logbox =document.querySelector('.login-html')
logInBtn.addEventListener('click', login)
signUpBtn.addEventListener('click', signUp)

async function signUp(){
    const user = {
        username: username.value,
        password: password.value,
        email: email.value,
    }

    await db.users.add(user).then((result) => {
        localStorage.setItem('user', result)
        window.location.href="index.html"
    }).catch((error) => {
        console.log(error)
    })
}

async function login(){
    // alert("login")
    // const user = await db.user.where(['email', 'password']).equals([email.value, password.value]).first()

    if(true) {
        localStorage.setItem('userid', user.userId)
        logbox.style.display = "none"
    }else{
        console.log("can't login")
    }
}

