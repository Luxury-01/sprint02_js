
/*var txt = "You're catnip to a girl like me. Handsome, dazed,and to die for... ";
var strchar = txt.charAt(2);
alert(strchar)
upp = txt.toUpperCase();
alert(upp)

str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."'
regex = ""
str3.replace(/catwoman/ig," ");
alert(str3.replace(/catwoman/ig," "))


*/

let str1= "You're catnip to a girl like me. Handsome, dazed,and to die for...";
    //str1 = str1 + "- Catwoman";
let str2 = 'Batman: "I tried to save you."';
let str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."'

alert(`Just string: ${str1} \nLenght: ${str1.length} \nCharacter number 2 is: ${str1.charAt(2)}
To uppercase  ${str1.toUpperCase()}\nConcatenation in phrase:  ${str1 + " - Catwoman"} 
[Batman Returns] ${str2}\n${str3.replace(/catwoman/ig," ")}`)