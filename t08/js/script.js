let number = +prompt('Input number from 1 to 4:');

if (number == 1) {
    alert((number * 2)/'a');
}
else if (number == 2) {
    alert((number - number)/0)
}
else if (number == 3) {
    alert(0 * Infinity);
}
else if (number == 4 ) {

    alert((number * 40000000) == Infinity);
}
else if(number < 1 || number > 4) {
    alert("Wrong input");
}
// let num = 2;
// num = (2 - 2) / 0;
// alert(num); 