const pureNumber = '3.14';
const numberWithString = '3.14SomeStringHere';
const stringWithoutNumber = 'NoNumberHere';
const alreadyNumber = 3.14;

// Poniżej użyj metod z zadania - każdej do przekonwertowania każdej z powyższych stałych.
// Obserwuj różnice w rezultatach

console.log('---PONIŻEJ parseFloat: ---');
//
parseFloat(pureNumber, 10)
parseFloat(numberWithString, 10)
parseFloat(stringWithoutNumber, 10)
parseFloat(alreadyNumber, 10)

console.log(pureNumber)
console.log(numberWithString)
console.log(stringWithoutNumber)
console.log(alreadyNumber)

console.log('---PONIŻEJ parseInt: ---');
//
parseInt(pureNumber,10)
parseInt(numberWithString,10)
parseInt(stringWithoutNumber,10)
parseInt(alreadyNumber,10)

console.log(pureNumber)
console.log(numberWithString)
console.log(stringWithoutNumber)
console.log(alreadyNumber)

console.log('---PONIŻEJ konstruktor new Number(): ---');
//
Number(pureNumber)
Number(numberWithString)
Number(stringWithoutNumber)
Number(alreadyNumber)

console.log(pureNumber)
console.log(numberWithString)
console.log(stringWithoutNumber)
console.log(alreadyNumber)

// Poniżej źle działająca funkcja. Spróbuj naprawić ją tak, żeby działała dla wszystkich numerów
function addToNum(num) {
  if (!num) {
    throw new Error('Passed variable is not a number!')
  }

  return num + (num * 10);
}

addToNum(10);
addToNum(1);
addToNum(-1);
