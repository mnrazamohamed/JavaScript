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
  document.getElementById("pcelsius").innerHTML =
    celsius + "°C is " + celsiusInF + "°F";
};

var fahrenheit = () => {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("pfahrenheit").innerHTML =
    fahrenheit + "°F is " + fahrenheitInC + "°C";
};

//The Grade Assigner

//inside code
function assignGrade(score) {
  if (score >= 75) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 45) {
    return "C";
  } else if (score < 45) {
    return "F";
  } else {
    return "Invalid";
  }
}
console.log("You got a " + assignGrade(88));
console.log("You got a " + assignGrade(68));
console.log("You got a " + assignGrade(58));

//broswer code

var assignGrade = (score) => {
  if (score >= 75) {
    return (document.getElementById("pscore").innerHTML = "Your score is A");
  } else if (score >= 60) {
    return (document.getElementById("pscore").innerHTML = "Your score is B");
  } else if (score >= 45) {
    return (document.getElementById("pscore").innerHTML = "Your score is C");
  } else if (score < 45) {
    return (document.getElementById("pscore").innerHTML = "Your score is F");
  } else {
    return (document.getElementById("pscore").innerHTML =
      "Your score is invalid");
  }
};

//get the month
let getMonth = () => {
  var getMonthFromUser = document.getElementById("month").value;
  month = parseInt(getMonthFromUser);
  var text = "";

  switch (month) {
    case 1:
      text = "January";
      break;
    case 2:
      text = "February";
      break;
    case 3:
      text = "March";
      break;
    case 4:
      text = "April";
      break;
    case 5:
      text = "May";
      break;
    case 6:
      text = "June";
      break;
    case 7:
      text = "July";
      break;
    case 8:
      text = "August";
      break;
    case 9:
      text = "September";
      break;
    case 10:
      text = "October";
      break;
    case 11:
      text = "November";
      break;
    case 12:
      text = "December";
      break;
    default:
      text = "Invalid";
  }

  document.getElementById("pmonth").innerHTML = text;
  console.log(text);
};

//The even/odd reporter
let oddEven = () => {
  for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      document.write(i + " is even <br>");
    } else {
      document.write(i + " is odd <br>");
    }
  }
}; //I've called the function in html page to output under question no 5

//Find Factorial of a positive integer
let getFactorial = () => {
  const number = parseInt(document.getElementById("factorial").value);

  // checking if number is negative
  if (number < 0) {
    document.getElementById("pfactorial").innerHTML =
      "Error! Factorial for negative number does not exist.";
  }

  // if number is 0
  else if (number === 0) {
    document.getElementById(
      "pfactorial"
    ).innerHTML = `The factorial of ${number} is 1.`;
  }

  // if number is positive
  else {
    let fact = 1;

    for (i = 1; i <= number; i++) {
      fact *= i;
    }

    document.getElementById(
      "pfactorial"
    ).innerHTML = `The factorial of ${number} is ${fact}.`;

  }
};

// program to find the LCM of two integers

let lcm = () => {
  // take input
  const num1 = document.getElementById("fint").value;
  const num2 = document.getElementById("sint").value;

  let min = num1 > num2 ? num2 : num1;

  // while loop

  do {
    if (min % num1 == 0 && min % num2 == 0) {
      document.getElementById("plcm").innerHTML = `The LCM of ${num1} and ${num2} is ${min}`;
      break;
    }
    min++;
  } while (true);
};
