$(document).ready(function() {
    $('#parent1').modal('show');
})

document.querySelector("form").addEventListener("submit", signUp);

var data = JSON.parse(window.localStorage.getItem("data")) || [];




function signUp(event) {

    event.preventDefault();

    flag = false;


    var email = document.getElementById("getemailid").value;


    data.map(function(element) {
        if (element.email === email) {
            flag = true;

        }
    });

    if (flag === false) {
        alert("You Are Not Registered ! Please Go to Create an Account Button ")
    } else {
        window.localStorage.setItem("tempmail", email);
        window.location.href = "../Sign_In_By_Email/Sign_In_By_Email.html";
        document.getElementById("getemailid").value = "";


    }





}