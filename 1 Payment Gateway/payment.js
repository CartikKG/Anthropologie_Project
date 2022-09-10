let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let total = cartItems.reduce((value, value1) => {
    return Number(value) + Number(value1.price) * Number(value1.quantity);
  }, 0);
  let totalll = Number(total);

  let totaltax = (Number(totalll) / 100) * 18;
  let totalamontaftertax = Number(totalll) + Number(totaltax);

  (document.querySelector(".totalpricebeforetax").innerText =
   "$" + Math.round(totalll) + ".00");
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
