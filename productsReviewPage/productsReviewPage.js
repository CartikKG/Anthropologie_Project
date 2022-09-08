var getname = localStorage.getItem("itemName");
var getimage1 = localStorage.getItem("image_1");
var getimage2 = localStorage.getItem("image_2");
var getimage3 = localStorage.getItem("image_3");
var getprice = localStorage.getItem("price");


var itemName = document.createElement("h1");
var image1 = document.createElement("img");
var image2 = document.createElement("img");
var image3 = document.createElement("img");
var price = document.createElement("span");

itemName.setAttribute("id", "nameOfTheProduct");

console.log(getname);
console.log(getprice);
itemName.innerText = getname;
image1.setAttribute("src", getimage1);
image2.setAttribute("src", getimage2);
image3.setAttribute("src", getimage3);
price.innerText = "$" + getprice;
document.querySelector(".leftSideImageDiv").append(image1, image2, image3);
document.querySelector(".mainImageDiv").append(image1);
document.getElementById("productNameBox").append(itemName);
document.getElementById("productCost").append(price);