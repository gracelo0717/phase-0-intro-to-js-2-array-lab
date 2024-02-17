// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift(name);
}

function appendCat(name) {
  let arr = cats.slice();
  arr.push(name);
  return arr;
}

function prependCat(name) {
  let arr = cats.slice();
  arr.unshift(name);
  return arr;
}

function removeLastCat(name) {
  let arr = cats.slice();
  arr.pop(name);
  return arr;
}

function removeFirstCat(name) {
  let arr = cats.slice();
  arr.shift(name);
  return arr;
}
