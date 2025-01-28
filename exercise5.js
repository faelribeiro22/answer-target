function inverterString(str) {
  let invertedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedString += str[i];
  }
  return invertedString;
}

console.log(`String original: strigus`);
console.log(`String invertida: ${inverterString('strigus')}`);