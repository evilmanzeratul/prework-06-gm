// Funkcja w globalnym kontekście
console.log('\n--- GLOBALNY KONTEKST ---');

function iAmGlobal() {
  return this;
}

console.log(iAmGlobal());

// Funkcja podpięta do obiektu
console.log('\n--- KONTEKST OBIEKTU ---');

const obj = {
  a: 'ValueA',
  iAmObjBound() {
    return this;
  }
};

console.log(obj.iAmObjBound());

// Funkcja jako metoda klasy
console.log('\n--- KONTEKST KLASY ---');

class WithBoundFunction {
  iAmClassBound() {
    return this;
  }
}

console.log(new WithBoundFunction().iAmClassBound());

// Użycie "bind" do podpięcia funkcji
console.log('\n--- PRZEPINANIE KONTEKSTU ---');

function iWillBeBound() {
  return this;
};
const iAmBound = iWillBeBound.bind({ a: 'Test'});

console.log(iAmBound());

/*
 * Poniżej znajduje się obiekt, który będziesz przypinać do powyższych funkcji.
 * Przypnij go poprawnie do każdej z nich i stwórz nowe `console.log`i wywołujące te funkcje!
 */

const myObj = {
  a: 'ValueOfA',
  b: 123,
  c: 'ValueOfC',
};
const fun = iAmGlobal.bind(myObj);
console.log(fun())
const fun2 = obj.iAmObjBound.bind(myObj);
console.log(fun2())
const fun3 = new WithBoundFunction().iAmClassBound.bind(myObj);
console.log(fun3())
const fun4 = iWillBeBound.bind(myObj);
console.log(fun4())

// Stwórz funkcje z nowym kontekstem używając obiektu myObj tak, aby powyższe 4
// funkcje zwróciły ten sam obiekt
let cos
function fun5 (name, obj){
  cos = name.bind(obj)
  return console.log(cos(),'z funkcji')
}
fun5(iAmGlobal,myObj)
fun5(obj.iAmObjBound,myObj)
fun5(new WithBoundFunction().iAmClassBound,myObj)
fun5(iWillBeBound,myObj)

console.log('\n--- PRZEPIĘTE KONTEKSTY WSZYSTKICH FUNKCJI: ---');
