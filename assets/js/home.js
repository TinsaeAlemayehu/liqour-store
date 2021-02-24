const id = localStorage.getItem("userid")

const loggedInUser = document.querySelector("#loggedInUser")
const logout = document.querySelector("#logout")

document.addEventListener("DOMContentLoaded", showLoggedUser)
logout.addEventListener("click", logsout)
async function showLoggedUser() {
    const user = await db.users.where("userId").equals(parseInt(id)).first()
    loggedInUser.innerHTML =  `
        <li>${ user.email }</li>
        <li>${ user.password }</li>
    `
}

function logsout(){
    alert("logged out")
    localStorage.removeItem("userid")
    window.location.reload()
}
