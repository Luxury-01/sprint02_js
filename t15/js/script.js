let beginRange = +prompt("take the number for the beginning");
let endRange = +prompt("take the number for the end");
let i;

function checkDivision(beginRange, endRange) {
    
if (beginRange > 0 && endRange < 101) {
    for (i = beginRange; i <= endRange; i++) {
    
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0)
            console.log(i + " is even, a multiple of 3, a multiple of 10");
        else if (i % 3 === 0 && i % 10 === 0)
            console.log(i + " a multiple of 3, a multiple of 10");
        else if (i % 2 === 0 && i % 10 === 0)
            console.log(i + " is even, is a multiple of 10");
        else if (i % 2 === 0 && i % 3 === 0)
            console.log(i + " is even, is multiple of 3");
        else if (i % 3 === 0) console.log(i + " is a multiple of 3");
        else if (i % 10 === 0) console.log(i + " a multiple of 10");
        else if (i % 2 === 0) console.log(i + " is even");
        else console.log(i + " -");
  }
} else return "Wrong input";
  //console.log(beginRange[i], endRange[i]);
}
//console.log(checkDivision(beginRange, endRange));
