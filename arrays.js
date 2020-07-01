var ingredient1 = `bread`; 
var ingredient2 = `mild cheese`; 
var ingredient3 = `sharp cheese`;
var ingredient4 = `butter`; 
var ingredient5 = `tomato`;
var ingredient6 = `garlic`;

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
];
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
];

var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(array, element) {
const firstArray = [`x`, `y`, `z`,];
const firstArrayTwo = firstArray.push(`a`);
return firstArrayTwo;
}
      // I used const because the array must remaine the same


function destructivelyAddElementToBeginningOfArray(array, element) {
var hereWeGo = [`1`, `2`, `3`];
hereWeGo = hereWeGo.unshift(`4`);
return hereWeGo;
}
      // I used var because the array must be changed in this function. 

function addElementToEndOfArray



