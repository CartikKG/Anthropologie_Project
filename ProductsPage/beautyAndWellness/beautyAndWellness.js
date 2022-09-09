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

function Changeui() {
  document.getElementById("NAVBARUL").classList.toggle("changewholenav");
  document.getElementById("MOBILECLICK").classList.toggle("MOBILECLICKDISPLAY");
}
var Clothing_WomensClothing = [
  {
    name: "Pinch Provisions Minimergency Kit",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79565768_237_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79276986_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "16.80",
    strickedPrice: "21.00",
  },
  {
    name: "Glissant CBD & CBG Intimate Lubricant",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79253464_070_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79277018_213_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "44.00",
    strickedPrice: "55.00",
  },
  {
    name: "Well Kept Bubble Bath",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79277034_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79193165_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    image_3:
      "https://images.urbndata.com/is/image/Anthropologie/79193165_014_a10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "22.40",
    strickedPrice: "28.00",
  },
  {
    name: "Well Kept Bath Oil",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79277018_213_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79277018_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    price: "28.80",
    strickedPrice: "36.00",
  },
  {
    name: "Tabu The Kit",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79252987_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/78752185_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "116.00",
    strickedPrice: "145.00",
  },
  {
    name: "Glissant Sea Salt & Caramel Intimate Lubricant",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79253456_070_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79253464_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "44.00",
    strickedPrice: "55.00",
  },
  {
    name: "NuStrips Sleep In a Strip",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/78024080_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/78799558_050_a11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    image_3:
      "https://images.urbndata.com/is/image/Anthropologie/78799558_050_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "23.30",
    strickedPrice: "29.00",
  },
  {
    name: "Objecto F5 Adjustable Aromatherapy Fan",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/78202090_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/78070745_055_a11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    image_3:
      "https://images.urbndata.com/is/image/Anthropologie/78070745_055_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "240.00",
    strickedPrice: "300.00",
  },
  {
    name: "Black + Jane Palo Santo and Wildflower Bundle",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/79138442_270_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/68691286_070_a?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    image_3:
      "https://images.urbndata.com/is/image/Anthropologie/68691286_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "17.60",
    strickedPrice: "22.00",
  },
  {
    name: "More Labs Dream Well Supplements, Set of 12",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/58915182_050_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79183141_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    image_3:
      "https://images.urbndata.com/is/image/Anthropologie/79183141_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "28.80",
    strickedPrice: "36.00",
  },
  {
    name: "Ketish The Quickie Pre-Play Intimate Sheets",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/78455185_070_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/79567657_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "21.60",
    strickedPrice: "27.00",
  },
  {
    name: "NuStrips Beauty In a Strip",
    image_1:
      "https://images.urbndata.com/is/image/Anthropologie/78024072_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    image_2:
      "https://images.urbndata.com/is/image/Anthropologie/78024502_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
    price: "23.20",
    strickedPrice: "29.00",
  },
];
displaydatafunction(Clothing_WomensClothing);
// funtion for mapping all the data of items
function displaydatafunction(Clothing_WomensClothing) {
  document.getElementById("productsItemsAll").innerHTML = "";
  Clothing_WomensClothing.map(function (elem, index) {
    var div = document.createElement("div");
    var image1 = document.createElement("img");
    var image2 = document.createElement("img");
    var image3 = document.createElement("img");
    var clickable = document.createElement("a");
    var name = document.createElement("a");
    var price = document.createElement("p");
    var circleBox = document.createElement("div");
    var imgCircle1 = document.createElement("div");
    var imgCircle2 = document.createElement("div");
    var imgCircle3 = document.createElement("div");
    var innerCircle1 = document.createElement("div");
    var innerCircle2 = document.createElement("div");
    var innerCircle3 = document.createElement("div");

    innerCircle1.style.backgroundColor = "#682020";
    innerCircle2.style.backgroundColor = "rgb(44 71 98)";
    innerCircle3.style.backgroundColor = "#74637e";

    // filling the boxes of items with image, name, price and circle
    image1.setAttribute("src", elem.image_1);
    image2.setAttribute("src", elem.image_2);
    image3.setAttribute("src", elem.image_3);
    image1.setAttribute("class", "productsImg");
    price.innerText = "$" + elem.price;
    name.innerText = elem.name;

    // setting attribute for giving styles
    name.setAttribute("href", "");
    circleBox.setAttribute("id", "productsCircleBox");
    imgCircle1.setAttribute("class", "productsCircle");
    imgCircle2.setAttribute("class", "productsCircle");
    imgCircle3.setAttribute("class", "productsCircle");
    clickable.setAttribute(
      "href",
      "../../productsReviewPage/productReviewPage.html"
    );
    // image1.addEventListener("click", function () {
    //   adddatatoprductview(index);
    // });
    image1.addEventListener("click", adddatatoprductview);

    function adddatatoprductview() {
      localStorage.setItem("itemName", elem.name);
      localStorage.setItem("image_1", elem.image_1);
      localStorage.setItem("image_2", elem.image_2);
      localStorage.setItem("image_3", elem.image_3);
      localStorage.setItem("price", elem.price);
    }

    // function for changing image on mouseover and mouseleave
    image1.addEventListener("mouseover", changeImg1);
    image1.addEventListener("mouseleave", changeImg2);
    function changeImg1() {
      image1.setAttribute("src", elem.image_2);
    }
    function changeImg2() {
      image1.setAttribute("src", elem.image_1);
    }

    // function for changing Border color while clicking on the circle
    imgCircle1.addEventListener("click", cngImg1);
    imgCircle2.addEventListener("click", cngImg2);
    imgCircle3.addEventListener("click", cngImg3);
    function cngImg1() {
      image1.setAttribute("src", elem.image_1);
      imgCircle1.style.borderColor = "black";
      imgCircle2.style.borderColor = "white";
      imgCircle3.style.borderColor = "white";
    }
    function cngImg2() {
      image1.setAttribute("src", elem.image_2);
      imgCircle2.style.borderColor = "black";
      imgCircle1.style.borderColor = "white";
      imgCircle3.style.borderColor = "white";
    }
    function cngImg3() {
      image1.setAttribute("src", elem.image_3);
      imgCircle3.style.borderColor = "black";
      imgCircle1.style.borderColor = "white";
      imgCircle2.style.borderColor = "white";
    }

    // Appending all the inner circles in the outer circle
    imgCircle1.append(innerCircle1);
    imgCircle2.append(innerCircle2);
    imgCircle3.append(innerCircle3);

    // Appending all the outer circles in the circle box for giving flex property
    circleBox.append(imgCircle1, imgCircle2, imgCircle3);

    // Appending image, name, price and circleBox to show it as an item
    clickable.append(image1);
    div.append(clickable, name, price, circleBox);
    document.getElementById("productsItemsAll").append(div);
    // console.log(sum);
  });
}
function filterthepage() {
  let changeshows = document.getElementById("productsSelect").value;
  if (changeshows == "Low" || changeshows == "High") {
    changebyfunctionvalue(changeshows);
  }
  if (changeshows == "A" || changeshows == "Z") {
    namechange(changeshows);
  }
}

function namechange(name) {
  // let name = document.getElementById("NAME").value;

  if (name == "A") {
    Clothing_WomensClothing.sort(function (a, b) {
      if (a.name[0] > b.name[0]) {
        return 1;
      } else if (a.name[0] < b.name[0]) {
        return -1;
      } else {
        return 0;
      }
    });

    displaydatafunction(Clothing_WomensClothing);
  } else if (name == "Z") {
    Clothing_WomensClothing.sort(function (a, b) {
      if (a.name[0] > b.name[0]) {
        return -1;
      } else if (a.name[0] < b.name[0]) {
        return 1;
      } else {
        return 0;
      }
    });
    displaydatafunction(Clothing_WomensClothing);
  }
}

function changebyfunctionvalue(name) {
  // let name = document.getElementById("SALARY").value;
  // console.log(name);
  if (name == "Low") {
    let a = Clothing_WomensClothing.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
    displaydatafunction(a);
  } else if (name == "High") {
    let a = Clothing_WomensClothing.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
    displaydatafunction(a);
  }
}

// function adddatatoprductview(index) {
//   let temp = Clothing_WomensClothing.filter(function (el, i) {
//     if (i == index) {
//       return el;
//     }
//   });
//   console.log("KARTIK WIN");
//   localStorage.setItem("forcheckitemview", JSON.stringify(temp[0]));
// }
let flagg = localStorage.getItem("flag");
let dataa = JSON.parse(localStorage.getItem("data"));
// if(data)
if (dataa.length != 0) {
  document.getElementById("emaildata").innerText = "Logged In";
  console.log("Kartik");
}
