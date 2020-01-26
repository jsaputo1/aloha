document.addEventListener("DOMContentLoaded", function() {

  //Flickity
  
    var elem = document.querySelector(".carousel");
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true
    });
  
    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity(".carousel", {
      // options
    });
  
    //End of Flickity
  
  
  
  //Subscribe button
  
  document.getElementById("submit-button")
  .addEventListener("click", function(event) {
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
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
 

  //Add to cart 

  
  let button = document.getElementById("cart-button"),
  count = 0;
button.onclick = function() {
  count +- 1;
  console.log(count)
};

// End of add to cart
  
      
  });





  
