var textField = document.querySelector('.text-field');
var input = document.querySelector('.text-field__input');

console.log("Code is working");

textField.addEventListener("mouseover", function(){
  console.log("All is working!");
  input.border = "1px solid rgba(31, 32, 65, 0.5)";
  input.setAttribute("placeholder", "This is pretty awesome");
  input.placeholder.color = "#1F2041";
  input.placeholder.opacity = "0.75";
});

/*textField.addEventListener("mouseout", function(){
  console.log("All is working!");
  textField.border = "1px solid rgba(31, 32, 65, 0.25)";
  input.setAttribute("placeholder", "Email");
  input.placeholder.color = "#1F2041";
  input.placeholder.opacity = "0.25";
});*/
