/* const Person = {
  Name: "Karan",
  Age: 25,
  Address: "Jaffna, Sri Lanka",
  IsCitizen: true,
};

 
console.log(`I am ${Person.Name}. I am ${Person.Age} years old. I live in ${Person.Address}.`);

document.getElementById("h1_id1").innerHTML = `I am ${Person.Name}. I am ${Person.Age} years old. I live in ${Person.Address}.`;


console.log(Person);
console.log(Person.Name);

Person.Name = "Raja";
console.log(Person.Name);

// same output for both const and let
*/

// const color = ["Red", "Blue", "Green", "Yellow"];
// console.log(color);

// //console.log(color.pop()); //yellow
// color.pop();
// console.log(color);

// // console.log(color.shift());

// // console.log(color.push("Red"));
// // console.log(color);
// color.sort();
// console.log(color);

// let car = "asd";
// console.log(car.length);
// Math.max
// Math.PI
// Math.min
/* 
{
  let ax = "hello world";
  {
    let x = "asd";
    {
      let x = "bx";
      document.write(x);
    }
  }
} */

/* let asd = (a,b,c)=> {

  total = a + b +c ;
  
  return coffee;
 
}
asd() */

// let cars = ["asd", 145 , true, {name:"objectdaw"}, function qwe(){document.write("123456")}];

// console.log(cars[4]());

// const Person = {
//   Name: "Karan",
//   Age: 25,
//   Address: "Jaffna, Sri Lanka",
//   IsCitizen: true,
// };

// document.write(Person);

// {
// rizni = "your name";
// rizni = "Hi"
// }

// console.log(rizni);

/* 
  let a = {
  first: "Rizni",
  last: "Mohamed",
  fullName: function () {
    document.writeln(this.first.concat(" ", this.last));
  },
};

let Raza = { ...a }; // Object.create(a)
Raza.first = "Raza";

Raza.fullName();
a.fullName();
 */

// let cars = ["asd", 145 , true, {name:"objectdaw"}, function qwe(){document.write("123456")}];

// console.log(cars[4]());

/* const tech = {
  Name: "Dell",
  Age: 2,
  Address: "Jaffna, Sri Lanka",
  laptop: {
    cpu:"i7",
    hardDisk: "1TB",
    ram: "8GB"
  },
  Id: 46532156,
};
for (let key in tech) {
  {
    console.log(key +" = "+ tech[key]);
  }
}
 */

/* const num = [];
num[0] = 5;
num[99] = 77;

// console.log(num);

for (let n of num) {
  {
    console.log(n);

  }
}
*/
/* 
let myArray = [26,75,12,33,78];

myArray.forEach(a => { document.write(a, "<br>")});

document.write("<br>");

myArray.filter(a => a % 2 === 0).forEach(a => { document.write(a, "<br>")});


document.write("<br>");

myArray.map(a => a * 2).forEach(a => { document.write(a, "<br>")});
//comparison won't work in map 

document.write("<br>");

let totalArray = myArray.reduce((p1,p2) => p1 + p2 );
document.write("The sum of array is " + totalArray);

document.write("<br> <br> Object <br>");


let myPerson = [
  {
    id: 001,
    name: "Kamal",
    salary:20000,
  },
  {
    id: 02,
    name: "Mala",
    salary:30000,
  },
  {   
    id: 03,
    name: "Raja",
    salary:45000,
  }
];

let totalSalary = myPerson.reduce(function(s1, s2) {return s1 + s2.salary },0);

document.write("The sum of salary is " + totalSalary);
*/

var celsius = () => {
  var celsius = document.getElementById("celsius").value;
  var celsiusInF = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").innerHTML =
    celsius + "°C is " + celsiusInF + "°F";
};

var fahrenheit = () => {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").innerHTML =
    fahrenheit + "°F is " + fahrenheitInC + "°C";
};