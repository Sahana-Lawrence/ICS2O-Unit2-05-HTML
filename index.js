// JavaScript File

// change background color to lightblue:
function changeBodyBg(){
  document.body.style.backgroundColor = "lightblue";
}

// change value of text field
function myFunction(text) {
  document.getElementById("text").value = "Shawn";
}

// eventListener reports the contents of the textbox as an alert
document.getElementById("button").addEventListener("click", function(){
  alert (document.getElementById("text").value);
});