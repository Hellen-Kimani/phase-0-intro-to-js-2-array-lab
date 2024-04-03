// Write your solution here!
var cats =  ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = (function() {
    cats.push ("Ralph")
    });
let destructivelyPrependCat = (function () {
    cats.unshift("Bob");
});
let destructivelyRemoveLastCat = (function (){
    cats.pop();
});
let destructivelyRemoveFirstCat = (function (){
    cats.shift();
});
function appendCat(name) {
    return [...cats, name];
  }
function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, -1);
  }
function removeFirstCat() {
  return cats.slice(1);
}
    