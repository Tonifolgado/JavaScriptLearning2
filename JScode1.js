
//Some advanced features of JavaScript

//DELETE
//Delete keyword can be used to delete an object property
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;
  console.log(myDog);
//output: {name: 'Happy Coder', legs: 4, friends: Array(1), bark: 'woof'}

//IN operator
//To check if an object has a property, we can use the in operator
//When used together with arrays, will check if an index exists
//but it is ignorant of actual value
let trees = ['redbood','bay','cedar'];
0 in trees; //returns true
2 in trees; //returns true
6 in trees; //returns false
'bay' in trees; //returns false (you must specify the index number, not the value at that index)
'length' in trees; //returns true (length is an Array property)
'length' in  {} //returns false (length is not an Object property)
// length property does not exist natively on an object unless its added explicitly
'length' in {'length':1} //true 
//if you want to check if a value is in an array, use the indexOf() method
trees.indexOf('cedar') !== -1;  //returns true
"constructor" in Object; //returns true
"prototype" in Object; //returns true