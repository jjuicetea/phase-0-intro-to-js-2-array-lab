const cats = ["Milo", "Otis", "Garfield"];


beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});


function destructivelyAppendCat(name) {
cats.push(name);
}



//1) appends a cat to the end of the cats array
function destructivelyPrependCat(jerry) {
  cats.unshift(jerry);
}
//2) prepends a cat to the beginning of the cats array
function destructivelyRemoveLastCat(jared) {
  cats.pop(jared);

}
//3) removes the last cat from the cats array
function destructivelyRemoveFirstCat(jesse) {
  cats.shift(jesse);
}
//4) removes the first cat from the cats array
function appendCat(jake) {
const copyOfCats = [...cats, jake];
return copyOfCats;
}



//5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(jason) {
const copyOfCats = [jason, ...cats];
return copyOfCats;
}
//6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  const copyOfCats = cats.slice(0, cats.length -1);
  return copyOfCats;
}
//7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
  
}




