function solver(a, b, c, d, e) {
  //x = a**2 - (5 *b *c) +(d / 3) + e
  var text = "Wrong input";
  x = (a**2) - (5 * b * c) + (d / 3) + e;
  
  if (Number.isNaN(x)) {
      return text;
  }
  return x;
}

