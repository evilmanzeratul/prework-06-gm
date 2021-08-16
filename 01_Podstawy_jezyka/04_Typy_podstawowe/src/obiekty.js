// Tworzymy funkcję budującą
function Builder() {
  this.x = 'Hello';
}
const myObj = new Builder();

Builder.prototype.y = 'World!';
Builder.prototype.objProp = {};

console.log(myObj);
console.log(myObj.x);
console.log(myObj.y);
console.log(myObj.x, myObj.y);
// Funkcja tak naprawdę jest konstruktorem swoich "dzieci" - jej prototyp stanie się właściwościami obiektów z niej zbudowanych
console.log(Builder === Builder.prototype.constructor); // true
