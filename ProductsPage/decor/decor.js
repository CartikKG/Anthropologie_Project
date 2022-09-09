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
var Clothing_WomensClothing = [{
    image_1: "https://images.urbndata.com/is/image/Anthropologie/35388685_020_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/35388685_020_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/35388685_020_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Gleaming Primrose Mirror",
    price1: "411.00",
    strikeoffprice1: "1278.40",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/B45226327AA_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/B45226327AA_030_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/B45226327AA_030_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Eloise Table Lamp",
    price1: "198.00",
    strikeoffprice1: "200.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_a10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Grecian Bust Pot",
    price1: "28.00 ",
    strikeoffprice1: "28.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/59352039_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/59352039_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/59352039_001_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Minka Textured Pot",
    price1: "23.80",
    strikeoffprice1: "34.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/61538542_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/61538542_011_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/61538542_011_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Hudson Mirror",
    price1: "398.40",
    strikeoffprice1: "498.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/4546TBCUAA_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/4546TBCUAA_040_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "",
    name: "Tiber Curtain",
    price1: "86.40",
    strikeoffprice1: "108.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/65085714_046_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/65085714_046_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/65085714_046_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Handwoven Nami Rug",
    price1: "70.40",
    strikeoffprice1: "88.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/65886301_027_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/65886301_027_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/65886301_027_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Gleaming Primrose Triptych Mirror",
    price1: "373.50",
    strikeoffprice1: "498.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/59900944_027_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/59900944_027_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/59900944_027_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Gleaming Primrose Mirror",
    price1: "398.40",
    strikeoffprice1: "498.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/51561926_029_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/51561926_029_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/51561926_029_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Sophie Faux Fur Throw Blanket",
    price1: "102.40",
    strikeoffprice1: "128.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/45263797AA_070_b11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/45263797AA_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/45263797AA_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Victoria Frame",
    price1: "19.50",
    strikeoffprice1: "26.00",
}, 
{image_1: "https://images.urbndata.com/is/image/Anthropologie/45455754AA_045_b11?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_2: "https://images.urbndata.com/is/image/Anthropologie/45455754AA_045_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    image_3: "https://images.urbndata.com/is/image/Anthropologie/45455754AA_045_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    name: "Adelina Velvet Pillow",
    price1: "38.40",
    strikeoffprice1: "48.00",
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
