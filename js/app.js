document.addEventListener("DOMContentLoaded", function() {

  var hiddenHam = document.querySelector(".menu_ham");
  var menuHam = document.querySelector(".menu_hamburger");

  menuHam.addEventListener("click", function(event){
    hiddenHam.classList.toggle("menuShow");
  });

});
