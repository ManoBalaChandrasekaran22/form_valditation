function handleRegister(event) {
    event.preventDefault();
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let userDetails;
    if(user=="") {
        alert("please enter you username");
    }else if(pass==""){
        alert("please enter you password");
    }else{
        userDetails = {
            username:user,
            password:pass
        }
    }
console.log(userDetails);
}