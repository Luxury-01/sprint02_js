
// let i = 0;
// //let str = "";
// let star = ""
// for ( ; i <= 3; ) {
//     star += "*";
    
//     alert(star);
// 
 //for (let star = "*"; star.length < 7; star += "*")
   //  console.log(star);
let star = "";
for (var i = 0; i < 6; i++){
    for (var k = i; k > 0; k--){
        star += "*";
    }
    star +="*\n"
}
alert(star);