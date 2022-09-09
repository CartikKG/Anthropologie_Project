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
// const btn = document.getElementById("submitbtn");
// btn.addEventListener("click", function apply() {
//   event.preventDefault();
//   btn.textContent = "Applied";
// });

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
displaycartintems(cartItems);
displaypriceandtaxvalue(cartItems);

function displaycartintems(cartItems) {
  document.getElementById("ListCart").innerHTML = "";
  cartItems.map(function (elem, Index) {
    var itemImageDiv = document.createElement("div");
    var fullDescritionBox = document.createElement("div");
    var itemDetailDiv = document.createElement("div");
    var priceQuantityTotalDiv = document.createElement("div");
    var itemPriceDiv = document.createElement("div");
    var itemQuantityDiv = document.createElement("div");
    var itemTotalPriceDiv = document.createElement("div");

    var cartItemImage = document.createElement("img");
    var cartItemName = document.createElement("a");
    var cartItemStyle = document.createElement("p");
    var cartItemColor = document.createElement("p");
    var cartItemSize = document.createElement("p");
    var cartItemPrice = document.createElement("p");
    var cartItemQuantity = document.createElement("select");
    var cartItemOption1 = document.createElement("option");
    var cartItemOption2 = document.createElement("option");
    var cartItemOption3 = document.createElement("option");
    var cartItemOption4 = document.createElement("option");
    var cartItemOption5 = document.createElement("option");
    var cartItemOption6 = document.createElement("option");
    var cartItemOption7 = document.createElement("option");
    var cartItemOption8 = document.createElement("option");
    var cartItemOption9 = document.createElement("option");
    var cartItemOption10 = document.createElement("option");
    var cartItemTotalPrice = document.createElement("p");
    var cartItemDelete = document.createElement("a");
    var cartItemSaveForLater = document.createElement("a");

    cartItemImage.setAttribute("src", elem.image1);

    cartItemName.innerText = elem.name;
    cartItemName.setAttribute("href", "");
    cartItemStyle.innerText =
      "Style # 4122941520" + Number(elem.price) + elem.quantity;
    cartItemColor.innerText = "Color: " + elem.color;
    cartItemSize.innerText = "Size: " + elem.size;
    cartItemPrice.innerText = "$" + elem.price;
    cartItemTotalPrice.innerText =
      "$" + Math.round(Number(elem.price) * Number(elem.quantity)) + ".00";
    cartItemDelete.innerText = "Remove";
    cartItemDelete.setAttribute("href", "");

    cartItemDelete.addEventListener("click", function () {
      removedatafromcart(Index);
    });

    // console.log(Number(elem.price) * Number(elem.quantity));

    var optionArr = [
      cartItemOption1,
      cartItemOption2,
      cartItemOption3,
      cartItemOption4,
      cartItemOption5,
      cartItemOption6,
      cartItemOption7,
      cartItemOption8,
      cartItemOption9,
      cartItemOption10,
    ];
    optionArr[0].innerText = 1;
    optionArr[1].innerText = 2;
    optionArr[2].innerText = 3;
    optionArr[3].innerText = 4;
    optionArr[4].innerText = 5;
    optionArr[5].innerText = 6;
    optionArr[6].innerText = 7;
    optionArr[7].innerText = 8;
    optionArr[8].innerText = 9;
    optionArr[9].innerText = 10;
    optionArr[0].setAttribute("value", "1");
    optionArr[1].setAttribute("value", "2");
    optionArr[2].setAttribute("value", "3");
    optionArr[3].setAttribute("value", "4");
    optionArr[4].setAttribute("value", "5");
    optionArr[5].setAttribute("value", "6");
    optionArr[6].setAttribute("value", "7");
    optionArr[7].setAttribute("value", "8");
    optionArr[8].setAttribute("value", "9");
    optionArr[9].setAttribute("value", "10");

    cartItemQuantity.addEventListener("change", updateQuantity);

    function updateQuantity() {
      elem.quantity = cartItemQuantity.value;

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      displaycartintems(cartItems);
      displaypriceandtaxvalue(cartItems);
    }

    optionArr.map(function (element) {
      if (element.innerText == elem.quantity) {
        element.setAttribute("selected", "selected");
      }
    });

    itemImageDiv.setAttribute("id", "itemImageDiv");
    itemDetailDiv.setAttribute("id", "itemDetailDiv");
    priceQuantityTotalDiv.setAttribute("id", "priceQuantityTotalDiv");
    fullDescritionBox.setAttribute("id", "fullDescritionBox");
    itemPriceDiv.setAttribute("id", "itemPriceDiv");
    itemQuantityDiv.setAttribute("id", "itemQuantityDiv");
    itemTotalPriceDiv.setAttribute("id", "itemTotalPriceDiv");
    cartItemDelete.setAttribute("id", "cartItemDelete");
    cartItemName.setAttribute("id", "cartItemName");
    cartItemQuantity.setAttribute("id", "cartItemQuantity");

    itemImageDiv.append(cartItemImage);
    itemDetailDiv.append(
      cartItemName,
      cartItemStyle,
      cartItemColor,
      cartItemSize
    );
    cartItemQuantity.append(
      optionArr[0],
      optionArr[1],
      optionArr[2],
      optionArr[3],
      optionArr[4],
      optionArr[5],
      optionArr[6],
      optionArr[7],
      optionArr[8],
      optionArr[9]
    );
    itemPriceDiv.append(cartItemPrice);
    itemQuantityDiv.append(cartItemQuantity);
    itemTotalPriceDiv.append(cartItemTotalPrice, cartItemDelete);
    priceQuantityTotalDiv.append(
      itemPriceDiv,
      itemQuantityDiv,
      itemTotalPriceDiv
    );

    fullDescritionBox.append(itemDetailDiv, priceQuantityTotalDiv);

    document.getElementById("ListCart").append(itemImageDiv, fullDescritionBox);
  });
}

function removedatafromcart(index) {
  cartItems.splice(index, 1);
  document.getElementById("cartitemstotalcount").innerHTML =
    cartItemstotalqty.length;
  // localStorage.getItem();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  displaycartintems(cartItems);
  displaypriceandtaxvalue(cartItems);
  location.reload();
}

// function updateQuantity(index){
//   cartItems.map(function(el,inn){
//     let q = document.getElementById("cartItemQuantity").value;
//     if(index==inn){
//       el.quantity=q;
//     }
//   })
//   displaycartintems(cartItems);
// }

function displaypriceandtaxvalue(cartItems) {
  let total = cartItems.reduce((value, value1) => {
    return Number(value) + Number(value1.price) * Number(value1.quantity);
  }, 0);
  let totalll = Number(total);

  let totaltax = (Number(totalll) / 100) * 18;
  let totalamontaftertax = Number(totalll) + Number(totaltax);
  // console.log(totaltax);

  document.querySelector(".totalpricebeforetax").innerText =
    "$" + Math.round(totalll) + ".00";
  document.querySelector(".totaltax").innerText =
    "$" + Math.round(totaltax) + ".00";
  document.querySelector(".totalprice").innerText =
    "$" + Math.round(totaltax + totalll) + ".00";

  document.getElementById("totalpricebeforetax").innerText =
    "$" + Number(totalll) + ".00";
  document.getElementById("totaltax").innerText = totaltax;
  document.getElementById("totalprice").innerText = totalamontaftertax;
  let amount = {
    total: totalll,
    tax: totaltax,
    after: Number(totalamontaftertax),
  };

  localStorage.setItem("totalamountincart", JSON.stringify(amount));
}
// document.getElementById("couponapplied").addEventListener("click", couponcheck);

function couponcheck() {
  event.preventDefault();
  let tex = document.getElementById("typecouponh").value;
  if (tex == "masai30") {
    let totalamounttemp = JSON.parse(localStorage.getItem("totalamountincart"));

    let a = Number(totalamounttemp.after);
    let minus = (Number(a) / 100) * 30;
    let fin = a - minus;
    // console.log(fin);
    document.getElementById("promocodeapplied").innerText =
      "Coupon Applied got 30% Discount";
    // document.querySelector(".totalprice").innerText = fin;
    document.querySelector(".totalprice").innerText =
      "$" + Math.round(Number(fin)) + ".00";
    // location.reload();
    let b = {
      total: totalamounttemp.total,
      tax: totalamounttemp.tax,
      after: fin,
    };
    localStorage.setItem("totalamountincart", JSON.stringify(b));
  } else {
    document.getElementById("promocodeapplied").innerText = "Invalid Coupon";
  }
}
let flagg = localStorage.getItem("flag");
let dataa = JSON.parse(localStorage.getItem("data"));
// if(data)
if (dataa.length != 0) {
  document.getElementById("emaildata").innerText = "Logged In";
  console.log("Kartik");
}
