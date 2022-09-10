let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let total = cartItems.reduce((value, value1) => {
  return Number(value) + Number(value1.price) * Number(value1.quantity);
}, 0);
let totalll = Number(total);

let totaltax = (Number(totalll) / 100) * 18;
let totalamontaftertax = Number(totalll) + Number(totaltax);

document.querySelector(".totalpricebeforetax").innerText =
  "$" + Math.round(totalll) + ".00";
document.querySelector(".totaltax").innerText =
  "$" + Math.round(totaltax) + ".00";
document.querySelector(".totalprice").innerText =
  "$" + Math.round(totaltax + totalll) + ".00";

let amount = {
  total: totalll,
  tax: totaltax,
  after: totalamontaftertax,
};

localStorage.setItem("totalamountincart", JSON.stringify(amount));
let cartItemstotalqty = JSON.parse(localStorage.getItem("cartItems")) || [];
document.getElementById("cartitemstotalcount").innerHTML =
  cartItemstotalqty.length;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("SLIDEDIVS");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
}
document.querySelector("form").addEventListener("submit", showmsg);

function showmsg() {
  alert("Card Added Succesfully");
}
function Changeui() {
  document.getElementById("NAVBARUL").classList.toggle("changewholenav");
  document.getElementById("MOBILECLICK").classList.toggle("MOBILECLICKDISPLAY");
}
let flagg = localStorage.getItem("flag");
let dataa = JSON.parse(localStorage.getItem("data")) || [];
// if(data)
if (dataa.length != 0) {
  document.getElementById("emaildata").innerText = "Logged In";
  console.log("Kartik");
}
document.getElementById("btn").addEventListener("click", openPopUp);
function openPopUp() {
  swal({
    title: "Your Order is Placed!",
    text: "Thank you for shopping with us!",
    icon: "success",
    button: "ok",
  });
  //   button.addEventListener("click", gotoo);
}
