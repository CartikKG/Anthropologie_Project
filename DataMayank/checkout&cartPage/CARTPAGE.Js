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
const btn = document.getElementById("submitbtn");
btn.addEventListener("click", function apply() {
  event.preventDefault();
  btn.textContent = "Applied";
});

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
displaycartintems(cartItems);

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
    var cartItemDelete = document.createElement("button");
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
      "$" + Number(elem.price) * Number(elem.quantity) + ".00";
    cartItemDelete.innerText = "Remove";
    cartItemDelete.addEventListener("click", function () {
      removedatafromcart(Index);
    });
    cartItemDelete.setAttribute("href", ""); // Add Remove function on this
    // cartItemSaveForLater.innerText = "Save for Later";
    // cartItemSaveForLater.setAttribute("href", "");

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

    // cartItemQuantity.addEventListener("click", changeBorderColor);

    // function changeBorderColor(){
    //     cartItemQuantity.style.borderColor = "teal"
    // }

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

  //   localStorage.getItem();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  displaycartintems(cartItems);
  // let newitemlist = .filter(function(el,i){
  //    if()
  // });
}
