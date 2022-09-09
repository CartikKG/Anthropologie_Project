$(document).ready(function() {
    $('#parent1').modal('show');
})




document.getElementById("ShowPassword").addEventListener("click", showPassword);

function showPassword(event) {

    event.preventDefault();
    var password = document.getElementById("getpassword");

    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }



}
document.querySelector("form").addEventListener("submit", signUp);

var data = JSON.parse(window.localStorage.getItem("data")) || [];
var tempmail = window.localStorage.getItem("tempmail")



document.getElementById("back").addEventListener("click", removedata);
document.getElementById("ACCOUNT").addEventListener("click", removedata);


function removedata() {
    window.localStorage.removeItem("tempmail");
}


function signUp(event) {

    event.preventDefault();

    flag = false;


    var password = document.getElementById("getpassword").value;


    data.map(function(element) {
        if (element.email === tempmail && element.password === password) {
            flag = true;

        }
    });

    if (flag == false) {
        alert("Please Check Password")
    } else {

        document.getElementById("getpassword").value = ""

        window.localStorage.removeItem("tempmail");
        window.location.href = "../../index.html";

        alert(" Login Successfull");




    }
}