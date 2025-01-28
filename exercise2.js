function isFibonacci(num) {
  let a = 0, b = 1;
  while (a <= num) {
      if (a === num) {
          return true;
      }
      [a, b] = [b, a + b];
  }
  return false;
}

console.log(isFibonacci(21));
console.log(isFibonacci(22));