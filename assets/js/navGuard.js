const userId = localStorage.getItem("userid")

if(userId) {
    console.log("logged in")
}else{
    window.location.href = "signup.html"
}