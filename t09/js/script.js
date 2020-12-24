function display_Heroes(team,universe,race,eyeColor,hairColor) {
hero1 = "This is Black Widow";
hero2 = "This is a Superman or Robin";
    if (team == "Avengers" || team == "S.H.I.E.L.D" && universe == "Marvel"
        && race == "human" && eyeColor == "green" && hairColor == "lightBrown/green") {
            alert(hero1);
    }
    else if (team == "Justice League Of America" || team == "Teen Titans" && universe == "DC Comics" && 
            race == "kryptonian" && eyeColor == "blue" && hairColor ==  "lightBrown/green" ) {
                alert(hero2);
            }
    else  {
        alert("Didn't recognize!")
    }
}
display_Heroes("Teen Titans","DC Comics","kryptonian","blue","lightBrown/green")


// let hero1 = "This is Black Widow";
// let hero2 = "This is a Superman or Robin";

/*let team1 = '"Avengers" or "S.H.I.E.L.D"';
let team2 = '"Justice League Of America" or "Teen Titans"';
let universe1 = "Marvel" 
let universe2 = "DC Comics"
let race1 = "human"
let race2 = "kryptonian"
let eyeColor1 = "green"
let eyeColor2 =  "blue"
let hairColor1 = "black"
let hairColor2 = "lightBrown/green"*/