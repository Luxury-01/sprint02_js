//let name = prompt("User first name");
//let lname = prompt("User last name");
// input = "o'reilly, m'grego, d'angelo";

function greeting() {
  let name = prompt("Enter their first name and last name");
  const regexp = /^[A-Z][a-z]+[\s|,][A-Z][a-z]{1,19}$/;
  if (name) {
    if (!regexp.test(name)) alert("Wrong input");
    else  alert(`Hello ${name}`);
  }
  
}
greeting();

//     input = Regex.Replace(input.ToLower(), "\b[a-zA-Z]", m => m.Value.ToUpper());
//     if(!input.exec(name)) console.log("Wrong input");

//     return console.log(1);
// }
// greeting();
// https://stackoverflow.com/questions/72831/how-do-i-capitalize-first-letter-of-first-name-and-last-name-in-c
///^[A-Z,a-z] {0,20}$/ig.exec

// let input = "o'reilly, m'grego, d'angelo";
// input = Regex.Replace(input.ToLower(), /[a-zA-Z]\b/, m => m.Value.ToUpper());
// // input = O'Reilly, M'Grego, D'Angelo
// console.log(input);
//https://stackoverflow.com/questions/9434305/regex-for-first-and-last-name

//console.log(name);
