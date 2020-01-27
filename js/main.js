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

  let cartText = document.getElementById("cartCount");
  let button = document.getElementById("cart-button"),
  count = 0;
button.onclick = function() {
  count ++;
    cartText.innerHTML = "Items: " + count;
    console.log(count)
};

// End of add to cart
  
// Stick Header
window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");

const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

// End of Sticky Header

// Smooth Scrolling

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});
      
  });





  
