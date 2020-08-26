/*var count = 0;
//var input = this;
var input = document.querySelectorAll('.text-field__input');
var textFieldPlaceholder = "some text";

for (count = 0; count < input.length; count++) {
  input[count].addEventListener("mouseover", function() {
    textFieldPlaceholder = this.getAttribute("placeholder");
    this.style.border = "1px solid rgba(31, 32, 65, 0.5)";
    this.setAttribute("placeholder", "This is pretty awesome");
  });

  input[count].addEventListener("mouseout", function() {
    this.style.border = "1px solid rgba(31, 32, 65, 0.25)";
    //var.setAttribute("placeholder", textFieldPlaceholder);
    this.setAttribute("placeholder", textFieldPlaceholder);
  });
};*/

var input = document.getElementById("email-text-field");
//var input = document.querySelector("#email-text-field");
var textFieldPlaceholder = input.getAttribute("placeholder");

input.addEventListener("mouseover", function() {
  //textFieldPlaceholder = this.getAttribute("placeholder");
  this.style.border = "1px solid rgba(31, 32, 65, 0.5)";
  this.setAttribute("placeholder", "This is pretty awesome");
});

input.addEventListener("mouseout", function() {
  this.style.border = "1px solid rgba(31, 32, 65, 0.25)";
  //this.setAttribute("placeholder", textFieldPlaceholder);
  this.setAttribute("placeholder", textFieldPlaceholder);
});
