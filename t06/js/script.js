let num = 10;
let bigInt = 1234567890123456789012345678901234567890n;
let str = "Hello";
let bool = true;
let ok = null;
let undef = undefined;
let obj = {
  name: "John",
  age: 30,
};
let sym = Symbol("Sym");
let func = function () {
  alert(obj);
};

alert(`num is ${typeof num}\nbigInt is ${typeof bigInt}
str is ${typeof str}\nbool is ${typeof bool}
ok is ${typeof ok}
undef is ${typeof undef}\nobj is ${typeof obj}
sym is ${typeof sym}\nfunc is ${typeof func}`);
