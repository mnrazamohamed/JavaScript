//The Age Calculator

var display = () => {
  var birthYear = document.getElementById("byear").value;
  var futureYear = document.getElementById("bfuture").value;
  var age = futureYear - birthYear;
  document.getElementById("pbirth").innerHTML =
  "I will be either " + age + " or " + (age - 1);
};

//The Temperature Converter

var celsius = () => {
var celsius = document.getElementById("celsius").value;
var celsiusInF = (celsius * 9) / 5 + 32;
document.getElementById("pcelsius").innerHTML = (celsius + "°C is " + celsiusInF + "°F");
}

var fahrenheit = () => {
var fahrenheit = document.getElementById("fahrenheit").value;
var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
document.getElementById("pfahrenheit").innerHTML = (fahrenheit + "°F is " + fahrenheitInC + "°C");
}