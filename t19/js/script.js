"use strict"

function checkBrackets(str) {
    let a = 0;
    let b = 0;
    
    if (typeof str === "string" && str.match(/[()]/)) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '(') 
                a++;
            else if (str.charAt(i) === ')') 
                b++;
        }
        //console.log(a);
        //console.log(b);
        //return (a - b) * -1;//if
        if ((a - b) < 0) 
            return (a - b) * -1;
        else return a - b;
            
    //     arr[];
    //     int i =0;
    //     if(1 == '(') {

    //         arr_otkr[i] = 1;
    //         i++;
    //     }
    //     else if(1 == ')') {
    //         arr_zakr[i] = 1;
    //     }
    }
    return -1;
}

console.log(checkBrackets('()'));
console.log(checkBrackets('1)()(())2(()'));
//console.log(checkBrackets('1)()(())2(()'));// 2
//console.log(checkBrackets(NaN));// -1
