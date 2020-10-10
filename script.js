'use strict'

let themeDots = document.getElementsByClassName("theme-dot");

//local storage -> way to save information in the browser
//find a value on local storage(get the value of "theme") 
//its gonna look for a key called 'theme' if it doesn't have it, its gonna return null
let theme = localStorage.getItem('theme');
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

function greeting() {
  console.log("ini nilai this : ", this)
}


for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    //get data attribute(custom attribute)
    let mode = this.dataset.mode;
    console.log("Option click : ", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = "default.css";
  }
  if (mode == 'blue') {
    document.getElementById('theme-style').href = "blue.css";
  }
  if (mode == 'green') {
    document.getElementById('theme-style').href = "green.css";
  }
  if (mode == 'purple') {
    document.getElementById('theme-style').href = "purple.css";
  }

  localStorage.setItem('theme', mode);
}



//jQuery Animate Smoothscroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
