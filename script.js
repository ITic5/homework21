let username = document.querySelector('#username');
let password = document.querySelector('#password');
let button = document.querySelector('#login-button');


button.addEventListener('click', function() {
    if (username.value.toLowerCase() === "admin" && password.value === "123456") {
        localStorage.setItem("loggedIn", true);
    }else {
        alert("Use valid username and password");
    }
});

let logoutButton = document.querySelector('#logout-button');
let loggedInData = document.querySelector('#loggedin-data');
let loggedInInfo = localStorage.getItem("loggedIn");

if(loggedInInfo === "true"){
    loggedInData.classList.remove('hidden');
    document.querySelector("form").classList.add('hidden');
}else {
    loggedInData.classList.add('hidden');
    document.querySelector("form").classList.remove('hidden');
}

logoutButton.addEventListener('click', function() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
})
