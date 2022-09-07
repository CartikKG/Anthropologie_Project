let bigimage = document.getElementById("kartik");

let tempview = JSON.parse(localStorage.getItem("forcheckitemview"));
// console.log(tempview);
// console.log("kartik");
// console.log("kartik");
// console.log("kartik");

// bigimage = ;
bigimage.setAttribute("src", tempview[0].image_1);
// bigimage.innerHTML = tempview[0].image_1;
// bigimage.innerText = tempview[0].image_1;
// console.log(tempview[0].image_1);
