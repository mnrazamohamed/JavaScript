//String Method
document.write("<h3> <u> String Method </u> </h3>");

let text1 = "Hello";
let text2 = "World";
let text3 = "This is a sample text";

document.write("charAt : " + text1.charAt(0) + "<br>");
document.write("charCodeAt : " + text1.charCodeAt(0) + "<br>");
document.write("concat : " + text1.concat(" ", text2) + "<br>");
document.write("indexOf : " + text1.indexOf("o") + "<br>");
document.write("lastIndexOf : " + text2.lastIndexOf("l") + "<br>");
document.write("match : " + text3.match("text") + "<br>");
document.write("replace : " + text3.replace("text", "paragraph") + "<br>");
document.write("search : " + text3.search("sam") + "<br>");
document.write("slice : " + text3.slice(10) + "<br>");
document.write("substr : " + text3.substr(4, 3) + "<br>");
document.write("substring : " + text3.substring(7) + "<br>");
document.write("toLowerCase : " + text3.toLowerCase() + "<br>");
document.write("toUpperCase : " + text3.toUpperCase() + "<br>");
document.write("valueOf : " + text3.valueOf() + "<br>");
document.write("length : " + text3.length + "<br>");

//Array Method
document.write("<h3> <u> Array Method </u> </h3>");

let cars1 = ["BMW", "Audi", "Toyota", "Subaru", "Nissan"];
let cars2 = ["Ferrari", "Benz", "Honda"];

document.write("concat : " + cars1.concat(cars2) + "<br>");
document.write("indexOf : " + cars1.indexOf("Audi") + "<br>");
document.write("lastIndexOf : " + cars2.lastIndexOf("Honda") + "<br>");
document.write("pop : " + cars1.pop("text") + "<br>");
document.write("reverse : " + cars1.reverse() + "<br>");
document.write("shift : " + cars1.shift() + "<br>");
document.write("slice : " + cars1.slice(1) + "<br>");
document.write("sort : " + cars1.sort() + "<br>");
document.write("splice : " + cars1.splice(0) + "<br>");
document.write("toString : " + cars2.toString() + "<br>");
document.write("unshift : " + cars1.unshift("Tesla", "Volvo") + "<br>");
document.write("valueOf : " + cars1.valueOf() + "<br>");
document.write("length : " + cars1.length + "<br>");

//Math Method
document.write("<h3> <u> Math Method </u> </h3>");

document.write("ceil : " + Math.ceil(4.9) + "<br>");
document.write("floor : " + Math.floor(4.4) + "<br>");
document.write("random : " + Math.random(100) + "<br>");
document.write("round : " + Math.round(4.5) + "<br>");
document.write("min : " + Math.min(0, 2, 4, 6, 8) + "<br>");
document.write("max : " + Math.max(0, 2, 4, 6, 8) + "<br>");
document.write("sqrt : " + Math.sqrt(64) + "<br>");
document.write("pow : " + Math.pow(9, 2) + "<br>");
document.write("log : " + Math.log(4) + "<br>");
