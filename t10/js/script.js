function superhero() {
  let name = prompt("What animal is the superhero most similar to?");
  const regexp = /^[A-Z,a-z]\D*$/;
  if (name) {
    if (!regexp.exec(name) || name.length > 20) alert("Wrong input");
  }
  let gender = prompt(
    "Is the superhero male or female? Leave blank if unknown or other."
  );
  const reggen = /^male$|^female$|^()$/;
  if (!reggen.exec(gender)) alert("Wrong input");

  let age = +prompt("How old is the superhero");
  const regage = /^[1-9][0-9]{0,4}$/;
  if (!regage.exec(age)) alert("Wrong input");

  let descript;

  if (gender == 'male' && age < 18) descript = "boy";
  if (gender == 'male' && age >= 18) descript = "man";
  if (gender == 'female' && age < 18) descript = "girl";
  if (gender == 'female' && age >= 18) descript = "woman";
  if (gender == '' && age < 18) descript = "kid";
  if (gender == '' && age >= 18) descript = "hero";
  
  return alert(`The superhero name is: ${name}-${descript}!`)

}
superhero();
