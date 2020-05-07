document.addEventListener("DOMContentLoaded", function () {
  //Flickity

  var elem = document.querySelector(".carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".carousel", {
    // options
  });

  //End of Flickity

  //Subscribe button

  document
    .getElementById("submit-button")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let emailField = document.getElementById("email-field");
      if (validateEmail(emailField.value)) {
        alert("Thanks for subscribing!");
        emailField.value = "";
      } else {
        alert("Invalid email address.");
      }
    });

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //Add to cart

  const btn = document.querySelectorAll("#cart-button");
  const btn2 = document.querySelectorAll("#remove-cart");
  const productName = document.querySelectorAll(".product-name");

  // console.log(test2);

  productName.forEach(function (index) {
    {
      console.log(index.innerHTML);
    }
  });

  const count = document.getElementById("number");
  let counter = 0;

  btn.forEach(function (element, index) {
    btn[index].addEventListener("click", function () {
      counter++;
      count.innerHTML = counter;
      alert("Item added to cart");
    });
  });

  btn2.forEach(function (element, index) {
    btn2[index].addEventListener("click", function () {
      if (counter > 0) {
        counter--;
        count.innerHTML = counter;
        alert("Item removed from cart");
      }
    });
  });
});
