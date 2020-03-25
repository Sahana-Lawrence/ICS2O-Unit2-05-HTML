// JavaScript File

// variables assigned to calculate the area of a square or rectangle
function Area(){
var base = document.getElementById("base");
var height = document.getElementById("height");
var basevalue = base.value;
var heightvalue = height.value;
var result = (basevalue*heightvalue);
var divresult = document.getElementById("divresult");
divresult.innerHTML = result;
}