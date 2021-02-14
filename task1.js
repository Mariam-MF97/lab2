const arrayOfFood = [
  "burger",
  "pizza",
  "donuts",
  "pizza",
  "koshary",
  "donuts",
  "seafood",
  "burger",
];

//convert array to set
const setOfFood = new Set(arrayOfFood);

//function to clear set
function clearMySet(set) {
  if (set.size > 2) {
    set.clear();
  }
}

//tests // uncomment what u want to test
console.log(setOfFood);
//setOfFood.add("pasta");
console.log(setOfFood);
//setOfFood.delete("burger");
console.log(setOfFood);
//clearMySet(setOfFood);
console.log(setOfFood);