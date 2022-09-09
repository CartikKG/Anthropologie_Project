$(document).ready(function() {
    $('#SignUp1').modal('show');
});



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







function signUp(event) {

    event.preventDefault();

    flag = false;

    var countrycode = document.getElementById("select").value;
    var email = document.getElementById("getemailid").value;
    var mobile = document.getElementById("mobileno").value;
    var password = document.getElementById("getpassword").value;

    data.map(function(element) {
        if (element.email === email || element.mobile === password) {
            flag = true;

        }
    });

    if (flag) {
        alert("User is Already Registered")
    } else {




        console.log(email, mobile, password);

        var tempdata = {
            email: email,
            mobile: mobile,
            password: password,
        }
        data.push(tempdata);

        window.localStorage.setItem("data", JSON.stringify(data));

        console.log(data)

        document.getElementById("getemailid").value = "";
        document.getElementById("mobileno").value = ""
        document.getElementById("getpassword").value = ""

        alert(" Congratulations! Account Successfully Created! we have sent verification link on your given Mobile Number +" + countrycode + " " + mobile + " and on given Email ID " + email + " Follow the link to complete the verification process come back  and Sign In here.")

        window.location.href = "../Sign_In/Sign_In.html";

    }





}