var myName;
myName = "My name is " + myName + " and I am swell!";
myName = `My name is ${myName}`;

var someAdjective = "...";
var myStr = "Learning to code is ";
myStr += someAdjective;

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

var lastName = "LovePeace";
var secondToLastLetterOfLastName = lastName[lastName.length -2];


/*----------  Functions  ----------*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    return result;
  }
wordBlanks("dog", "big", "ran", "quickly");

function myFunc() {}
let anotherFunc = function () {}
let yetAnother = () => {}

//implicit return
const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};
const multiplyByNineFifths = celsius => celsius * (9/5);


const getAverage = (numberOne, numberTwo) => {
	const average = (numberOne + numberTwo) / 2;
	return average;
}
console.log(getAverage(365, 27)); // Output: 196

//function expression. When function inside the variable. It's an anonymous function
//Function declarations are hoisted and loaded before the script is actually run. 
//Function expressions are not hoisted Мы не можем вызвать функцию выше нее, если функция expression
var catSays = function(max) { 
  // code here 
};
var doSomething = function addOne(y) {
	return y + 1;
  };
doSomething(5); //Returns: 6

function movies(messageFunction, name) {
	messageFunction(name);
  }
  
  // call the movies function, pass in the function and name of movie (function as argument)
  movies(function displayFavorite(movieName) {
	console.log("My favorite movie is " + movieName);
  }, "Finding Nemo"); //My favorite movie is Finding Nemo


/*----------  SCOPE  ----------*/
//let
//loop, {}, if
const colorOfSky = () => {
	const dusk = true;
	let color = 'blue'; 
	if (dusk) {
	  let color = 'pink';
	  console.log(color); // pink
	}
	console.log(color); // blue 
};
colorOfSky(); // blue
console.log(color); // undefined

const cloudCount = () => {
	let i = 2;
	console.log(i); // 2
	for (let i = 0; i < 10; i++) {
	  console.log(i); // All numbers from 0 to 9
	}
}; 
cloudCount();
console.log(i); // undefined

/*----------  RETURN  ----------*/
var orderCount = 0;
function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}
function getSubTotal(itemCount) {
  return itemCount * 7.5;
}
function getTax() {
  return getSubTotal(orderCount) * 0.06;
}
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}


takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');


function square(x) {
	return x * x;
}
  
function subtractFour(x) {
	return square(x) - 4;
}
  
console.log(subtractFour(5)); //21

var sum = subtractFour(5); // call the "add" function and store the returned value in the "sum" variable
var something = doSomething(sum);

/*----------  ARRAYS  ----------*/
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
var myArray = [["girls", 2], ["cup", 1]];
var myArray = [1,2,3];
var myData = myArray[0];
myArray[0] = 3;
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1]; // = 8
var myArray = [["John", 23], ["cat", 2]];

var pos = fruits.indexOf('Banana');// 1

myArray.push(["dog", 3]); //add to array

var removedFromMyArray = myArray.pop();  // pop - delete last element from myArray

//now removedFromMyArray === ["cat", 2] and  myArray === [["John", 23]]

var removedFromMyArray = myArray.shift(); // shift - delete first element from myArray

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

myArray.unshift(["Paul", 35]); // unshift - create a element at start of array

var fruits = ['banana', 'apple', 'peach'];
fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length); // 6

console.log(amount);				// 215.9784
console.log(amount.toFixed(2));	// "215.98"

console.log(fruits.slice(0, 2)); // 'banana', 'apple'


//ES 6
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

let [a, b, c, d] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 2

//let, const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('waew');//[ 'Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha', 'waew' ]
console.log(condiments);
condiments = ['Lol']; //[ 'Lol' ]
console.log(condiments);

utensils.pop();
console.log(utensils);//[ 'Fork', 'Knife', 'Chopsticks' ]
utensils = ['lol2']
console.log(utensils);//error

// compare 2 arrays
let myPlaces = ['Houston', 'Sioux Falls', 'Phoenix'];
let friendPlaces = ['Sioux Falls', 'Missoula', 'Buffalo'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}


/*----------  OBJECTS  ----------*/
var sister = {
	name: "Sarah",
	age: 23,
	parents: [ "alice", "andy" ],
	siblings: ["julia"],
	favoriteColor: "purple",
	pets: true,
	paintPicture: function() { return "Sarah paints!"; },
	//es6
	sayGoodbye() {
	  return 'Goodbye!';
	}
  };

//getters and setters
let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge) {
    if(typeof newAge === 'number'){
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};
person.age = 'Thirty-nine'; // should be error
person.age = 39; // assign new value to age
console.log(person.age); //39

  //Method
  sister.paintPicture();// Returns: "Sarah paints!"

  //select
  sister.name === sister['name']
  //add new key-value
  sister.subNames = ['Mirai', 'Akame'];   ===    sister['subNames'] = ['Mirai', 'Akame'];
  //change 
  sister.subNames = ['Akame'];

  delete newObject.removeThisProperty;
//Method For in loop
let user = {
	username: "dan.frehner",
	password: "abc123",
	lovesJavascript: true,
	favoriteNumber: 42
};
for(let key in user){
	console.log(key)
	console.log(user[key])
}
//username
//"dan.frehner"
//password
//"abc123"
//lovesJavascript
//true
//favoriteNumber
//42

var obj = {a: 1, b: 2, c: 3};
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


/*----------  MATH  ----------*/

const arrMax = arr => Math.max(...arr);
// IS THE SAME AS
arrMax = function(arr){
  return Math.max(...arr);
};
Math.min(1,2,3,4)// 1
Math.min([1,2,3,4])// NaN
Math.min(...[1,2,3,4]) /*is the same as */ Math.min(1,2,3,4)
Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27;

//Math also has methods that will round numbers for us. .round will round a number to the nearest whole number. 
//.floor will always round a number down to the nearest whole number. .ceil will always round up to the nearest whole number.
Math.round(6.5) = 7;
Math.round(6.45) = 6;
Math.floor(6.999) = 6;
Math.ceil(6.0001) = 7;

/*----------  Maximum value  ----------*/
const arrMax = arr => Math.max(...arr); // arrMax([20, 10, 5, 10]) -> 20

/*----------  Sum of all values  ----------*/
const arrSum = arr => arr.reduce((a,b) => a + b, 0) // arrSum([20, 10, 5, 10]) -> 45
//Reduce method reduce our array to a single value
//a is our accumulator. It will accumulate our sum as our function works. 
//b is the current value being processed.
//The second parameter of the reduce method is the initial value we wish to use.

/*----------  Average value  ----------*/
const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length // arrAvg([20, 10, 5, 10]) -> 11.25


/*----------  CONSTANT  ----------*/
var SOME_THING = 21; //Constant
const NEXT_THING = 21; //Constant in ES6

// variable within a function without var === global variable  global = 5;


function timesFive(num) {  //return number multiplied by 5
  return num * 5;
}
result = timesfive(3);

const TAX_RATE = 0.08;
function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}
var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);
console.log( amount.toFixed(2));	

/*----------  WHILE  ----------*/
while (amount<bank_balance){
  amount = amount + PHONE_PRICE;
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}
//sorted out array with random number, and wait for spade
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';
while(currentCard !== 'Spade'){
  console.log(currentCard);
  var randomNumber = Math.floor(Math.random()*4);
  currentCard = cards[randomNumber];
}
if (currentCard == 'Spade'){
  console.log('Found');
}

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}


//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: forEach() map() filter() sort() reduce()  : :  :   :    :     :        :          
// ────────────────────────────────────────────────────────────────────────────────────────────
//

arr = [1, 2, 3, 4, 5];

/*----------  forEach()  ----------*/

let cars = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

    //We can write the callback function itself in the parentheses as an anonymous function
    cars.forEach(function(item, index){
        console.log(item);
    })

    //Or we can instantiate a function to be used as a callback.
    //Also, we do not need to use the index argument, if you don’t need it, feel free to leave it out.
    function printNames(item){
        console.log(item);
    }

    //And call that function in the forEach parentheses
	cars.forEach(printNames);
	
//default
for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

//smaller
arr.forEach(function(number){
	console.log(number);
});

// ES6
arr.forEach((num, index) => {
	return arr[index] = num * 2;
});// arr = [2, 4, 6, 8, 10]


var sample = [1, 2, 3];
// es5
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})
// es6
sample.forEach((elem, index) => console.log(`${elem} comes at ${index}`));



/*----------  map()  ----------*/
//default
let doubled = arr.map(num => {
    return num * 2;
});//  = [2, 4, 6, 8, 10]

//smaller
let mapped = sample.map(elem => elem * 10)
console.log(mapped);//  [10, 20, 30]

//ES 6
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);// arr2 = [6, 8, 10]


/*----------  filter()  ----------*/

//default
var sample = [1, 2, 3];
let moreThenTwo = [];
for(let i = 0; i< sample.length; i++){
	if(sample[i] >2){
		moreThenTwo.push(sample[i]);
  }
  
//smaller
const moreThenTwo = sample.filter(function(number){
	if(number > 2){
		return true;
	}
});
const moreThenTwo = sample.filter(number => number > 2);

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
let interestingWords = words.filter(word => word.length > 5);

// ES6
const retailCompany = companies.filter(company => company.category === 'Retail');
const from90s = companies.filter(company => (company.start >= 1980 && company.start < 1990));

//smaller
var result = sample.filter(function(elem){
    return elem !== 2;
}); 

// ES6
var result = sample.filter(elem => elem !== 2)

/*----------  sort()  ----------*/

//default
const sortedArr = arr.sort(function(a, b) { // From higher to smaller, if you want from smaller to higher switch returns
	if(a>b){
		return -1;
	} else {
		return 1;
	}
});
console.log(sortedArr);

// ES6
const sortedArr2 = arr.sort((a,b) => (a>b ? 1 : -1 ))
console.log(sortedArr2);

/*----------  reduce()  ----------*/

//default
let sum = 0;
for(let i = 0; i < arr.length; i++){
  sum += arr[i];
}
console.log(sum);

//smaller
const sum2 = arr.reduce(function(total, number){
  return total + number;
},0);

// ES6
const sum3 = arr.reduce((total, number) => total + number, 0);

/*----------  Combined  ----------*/
const combined = arr
	.map(number => number * 2)
	.filter(number => number >= 2)
	.sort((a,b) => a - b)
	.reduce((a,b) => a + b, 0);



/*----------  SWITCH  ----------*/
var groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

//Example of implicit coercion:
var a = "42";
var b = a * 1;	// "42" implicitly coerced to 42 here
a;				// "42"
b;				// 42 -- the number!

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c;		// true
b == c;		// true
a == b;		// false  wtf

var a = 2;
foo();					// works because `foo()`
						// declaration is "hoisted"
function foo() {
	a = 3;
	console.log( a );	// 3
	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}
console.log( a );	// 2

function foo() {
	var a = 1;
	function bar() {
		var b = 2;
		function baz() {
			var c = 3;
			console.log( a, b, c );	// 1 2 3
		}
		baz();
		console.log( a, b );		// 1 2
	}
	bar();
	console.log( a );				// 1
}
foo();

/*----------  IF / ELSE  ----------*/

//Ternary operator
conditional ? (if condition is true) : (if condition is false)
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color); //Prints: "green"



/*----------  IIFE  ----------*/
(function sum(a, b) {
    console.log(a + b); // 5
})(2, 3);

var result = (function(a, b) { 
    return a + b;
})(2, 5);

var a = 42;
(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();
console.log( a );		// 42

//ES 6
(function () {
	var food = 'Meow Mix';
}());
console.log(food); // Reference Error

{
	let food = 'Meow Mix';
};
console.log(food); // Reference Error



/*----------  CLOSURE  ----------*/
//функция внутри функции которая видит переменные внещней функции и после исполнения функции внутреняя функция
// помнит переменные
function makeAdder(x) {
	// parameter `x` is an inner variable
	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};
	return add;
}
// Мы даем  единицу, внутриняя функцыя add() запоминает эту единицу как X при переменной plusOne
var plusOne = makeAdder( 1 );
// а теперь мы даем 10 и при вызове через переменную plusTen()  x , будет 10, ибо он запомнил как 10
// но при вызове через plusOne оно помнит внутрений x как 1 Пейн! Я не чувствую логики!
var plusTen = makeAdder( 10 );
plusOne( 3 ); //Тройка присваивается внутреней Y а X === 1 при plusOne()		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41
plusTen( 13 );//13 присваивается Y во внутреней, а X функцыя помнит как 10		// 23 <-- 10 + 13
function makeAdder(x) {
	return function(y) {
	  return x + y;
	};
  }
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12


/*----------  MODULES  ----------*/
function User(){
	var username, password;
	function doLogin(user,pw) {
		username = user;
		password = pw;
		// do the rest of the login work
	}
	var publicAPI = {
		login: doLogin
	};
	return publicAPI;
}
// create a `User` module instance
var fred = User();
fred.login( "fred", "12Battery34!" );//обращаемся как к обьекту, и выполняем внутренюю doLogin
//username and password a closure in the login() function with keeping them alive.
//We can call fred.login(..) -- the same as calling the inner doLogin(..)
 // -- and it can still access username and password inner variables.


/*----------  PROTOTYPES  ----------*/
var foo = {
	a: 42
};
// create `bar` and link it to `foo`
var bar = Object.create( foo );
bar.b = "hello world";
bar.b;		// "hello world"
bar.a;		// 42 <-- delegated to `foo`



/*----------  THIS  ----------*/
function foo() {
	console.log( this.bar );
}
var bar = "global";
var obj1 = {
	bar: "obj1",
	foo: foo,
	price: 100.20
};
var obj2 = {
	bar: "obj2"
};
foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();			// undefined

// In web browsers, the window object is also the global object:
console.log(this === window); // true


/*----------  CALLBACK  ----------*/
//Promises are a time-independent wrapper around a "future value," which lets you reason about and compose them regardless of if the value is ready or not yet. 
//Generators introduce a new mode of execution for JS functions, whereby the generator can be paused at yield points and be resumed asynchronously later. 

//Это функцыя которая находиться внутри функции в виде параметра внешней(higher-order) функции
//И выполняеться только после того как внешняя функцыя выполнена
//Functions that do this are called higher-order functions. Any function that is passed 
//as an argument "function(something, callback)" is called a callback function.
//function callback(){ alert('hi, i'm callback);}
T.get('search/tweets', params, function(err, data, response) {
	if(!err){
	  // This is where the magic will happen
	} else {
	  console.log(err);
	}
  });
//This function wait for Twitter API response, then only after response, execute (callback) function
function saysHelloToUser(user){
	return 'Hello ' + user + '!';
}
function saysGoodbyeToUser(user){
	return 'Goodbye ' + user + '!';
}
function createGreeting(user, cb){
	return cb(user)
}
createGreeting("Dan", saysHelloToUser) //'Hello Dan!'
createGreeting("Dan", saysGoodbyeToUser) //'Goodbye Dan!'


// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.​
​function genericPoemMaker(name, gender) {
	console.log(name + " is finer than fine wine.");
	console.log("Altruistic and noble for the modern time.");
	console.log("Always admirably adorned with the latest style.");
	console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}
​
​//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.​
​function getUserInput(firstName, lastName, gender, callback) {
	var fullName = firstName + " " + lastName;
​
	// Make sure the callback is a function​
	if (typeof callback === "function") {
	// Execute the callback function and pass the parameters to it​
	callback(fullName, gender);
	}
}
getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);
function greetUser(customerName, sex)  {
	var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
   console.log("Hello, " + salutation + " " + customerName);
 }
 ​
 ​// Pass the greetUser function as a callback to getUserInput​
 ​getUserInput("Bill", "Gates", "Man", greetUser);
 ​
 ​// And this is the output​ : Hello, Mr. Bill Gates
	 



/*----------  APPLY  ----------*/
//Note that we have added an extra parameter for the callback object, called "callbackObj"​
​function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here​
​
    // The use of the Apply function below will set the this object to be callbackObj​
    callback.apply (callbackObj, [firstName, lastName]);
}

// We pass the clientData.setUserName method and the clientData object as parameters. The clientData object will be used by the Apply function to set the this object​
getUserInput ("Some ", "One", clientData.setUserName, clientData);
​
​// the fullName property on the clientData was correctly set​
console.log (clientData.fullName); // Some One


//
// ────────────────────────────────────────────────────────────────────────────────── I ──────────
//   ::::::  D O M   M A N I P U L A T I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//
var a = document.getElementById('some__id');
var a = document.getElementsByClassName('some__class');
var a = document.querySelector('.some__class');
a.classList.add('another__class');
a.classList.remove('another__class');
a.classList.toggle('another__class'); // if class exist then remove, if not, add
a.classList.replace('oldClass', 'newClass');
a.classList.contains('oldClass');// ckeck if class exist
querySelector //Returns the first matching Element node
querySelectorAll('p.intro') //Returns a NodeList containing all matching Element

//Attribute
document.getElementById("myImage").src = "landscape.jpg";

document.getElementsByTagName(name)
element.attribute = new value
element.setAttribute(attribute, value)
element.style.property = new style

document.createElement(element)	//Create an HTML element
document.removeChild(element)	//Remove an HTML element
document.appendChild(element)	//Add an HTML element
document.replaceChild(element)	//Replace an HTML element

document.open();
document.write("<h1>Out with the old - in with the new!</h1>");
document.close();


//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: E V E N T S  : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//
document.getElementById("myBtn").onclick = function(){code}
document.getElementById("myBtn").addEventListener("click", doSomething()); //instead of click you can put 'mousedown' etc
addEventListener(event, function, useCapture); // use capture === bubbling , true or false,  true = disable bubbling
you can; removeEventListener();

<body onload="checkCookies()"></body>

<input type="text" onfocus="myFunction(this)">
function myFunction(x) {x.style.background = "yellow";}

<input type="text" id="fname" onchange="upperCase()"/>

<div onmouseover="mOver(this)" onmouseout="mOut(this)">Mouse Over Me</div>
function mOut(obj) {obj.innerHTML = "Mouse Over Me"}

<div onmousedown="mDown(this)" onmouseup="mUp(this)">Click Me</div>
function mDown(obj) {obj.innerHTML = "Release Me";}

window.setInterval(function, milliseconds);

window.setTimeout(function, milliseconds);
window.clearTimeout()

//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: B O M   : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//
var w = window.innerWidth;
var h = window.innerHeight;
window.open() - open a new window
window.close() - close the current window
window.moveTo() -move the current window
window.resizeTo() -resize the current window
window.alert("sometext");
window.confirm("sometext");
window.prompt("sometext","defaultText");

screen.width
screen.height
screen.availWidth   //=== width minus interface features like the Windows Taskbar.
screen.availHeight
screen.colorDepth
screen.pixelDepth

navigator.cookieEnabled
navigator.userAgent
navigator.language

function goBack() {
	window.history.back() //previous page
	window.history.forward()
}

//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: F E A T U R E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//

window.setInterval(500, something()); //asynchronously execute a function every 500m.s.

typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"

/*----------  String to Array  ----------*/
var str = "hello";
var chars = [...str];
console.log(chars); // ['h', 'e',' l',' l', 'o']

Math.random(); //random number between 0 and 1
Math.random() * 50; //random number between 0 and 50, but output will be decimal
Math.floor(Math.random() * 50); //rounded random number between 0 and 50

var hello = 'Hello World';
console.log(hello[6]); // Output: W  Sting === array 0_0
console.log(hello.length); // Output: 11 
console.log('Hello'.toUpperCase()); 
console.log(Math.ceil(43.8)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Number.isInteger(2017)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

/*----------  LOGIC  ----------*/
'Y' != 'y' // true

"1" == 1 // true
"1" === 1 // false

0 == false // true 
0 === false // false

"1" == true // true 

var a = 3; var b = -2;
console.log(!(a > 0 || b > 0)); // output: false

// =DDD
null > 0 //false
null > 0 //false
null >= 0 //true
null <= 0 //true
null == 0 //false
null === 0 //false

//NaN stands for "Not-A-Number" and it's often returned indicating an error with number operations. 
"hello"/5 // Nan
Math.sqrt(-10) // Nan

//null is an object that we, the developers, set when we want to tell 
//other developers that the item they are looking for exists, but there is no value associated with it. 

//undefined - If nothing to return

//FALSY TRUTHY
if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
//Returns: "the value is truthy"
if (!1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
//Returns: "the value is falsy"

//Here are some other examples of truthy values:
true
42
"pizza"
"0"
"null"
"undefined"
{}
[]
//Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN
if variable wasnt created

/*----------  Import/export  ----------*/

// coolNumber.js
const ultimateNumber = 42;
export default ultimateNumber;
// myFile.js
import number from './coolNumber.js';
// Default export, independently from its name, is automatically injected into number variable;
console.log(number) // 42


//Function export
// sum.js
export default function sum(x, y) {
	return x + y;
  }

  // myFile.js
  import sum from './sum.js';
  const result = sum(1, 2);
  console.log(result) // 3


/*----------  Class  ----------*/

function Cat(name){
	//the new operator creates an object, 'this'
	this.name = name
	this.meows = function(){
		return 'My name is ' + this.name + " ...Meow!";
	}
	//return the object 'this'
}

let sam = new Cat('Sam')
let kitty = new Cat('Kitty')
console.log(sam.meows()) //My name is Sam ...Meow!
console.log(kitty.meows()) //My name is Kitty ...Meow!


//Before es6
var Person = function(name, age) {
	this.name = name;
	this.age = age;
  }
  Person.prototype.stringSentence = function() {
	return "Hello, my name is " + this.name + " and I'm " + this.age;
	}
	
//es6
class Person {
	constructor(name, age) {
	  this.name = name;
	  this.age = age;
	}
	
	stringSentence() {
		return "Hello, my name is " + this.name + " and I'm " + this.age;
	}}
const myPerson = new Person("Manu", 23);
console.log(myPerson.age) // 23
console.log(myPerson.stringSentence()) // "Hello, my name is Manu and I'm 23


/*----------  PROTOTYPE  ----------*/
//Classes have a unique way of setting a method once and giving every object of that 
// class access to those methods. This is called the prototype.
// Each class has a prototype property, which we can then set methods on:
function User(name, github){
	this.name = name;
	this.github = github;
}

User.prototype.introduction = function(){
	return 'My name is ' + this.name + ', my github handle is ' + this.github + '.';
}

let dan = new User('Dan', 'tetondan');
let riley = new Cat('Riley', 'rileyriley');

console.log(dan.introduction()); //My name is Dan, my github handle is tetondan.
console.log(riley.introduction()); //My name is Riley, my github handle is rileyriley.


/*----------  ASYNC  ----------*/

//Callback
Something.save(function(err) {
	if (err)  {//error handling
	  return;
	}
	console.log('success');
  });

//Async
async.map([1, 2, 3], AsyncSquaringLibrary.square, 
  function(err, result){// [1, 4, 9]
});

/*----------  await  ----------*/
async function save(Something) {
  try {
    await Something.save()
  } catch (ex) {
    //error handling
  }
  console.log('success');
} 


/*----------  Promise  ----------*/
Something.save()
  .then(function() {
    console.log('success');
  })
  .catch(function() {
    //error handling
	})
	
function saveToTheDb(value) {
	return new Promise(function(resolve, reject) {
	  db.values.insert(value, function(err, user) { 
		if (err) {
		  return reject(err); 
		}
		resolve(user);
	  })
	}
	}
	
  //
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: G O O G L E   M A P S   A P I : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//
function initMap(){
	let map = new google.maps.Map(getElementById('js-map'), {
		center: {lat: 11.111, lng: -11.111},
		zoom: 8
	});
	new google.maps.Marker({
		map: map, //which map
		positionL: {lat: 11.111, lng: -11.111}
	});
	new google.maps.Marker({
		map: map,
		positionL: {lat: 11.111, lng: -11.111}
	});
}


//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: ES 6 : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//

var fName = 'Peter', sName = 'Smith', age = 43, job= 'photographer';
var a = 'Hi, I\'m ' + fName + ' ' + sName + ', I\'m ' + age + ' and work as a ' + job + '.';
// ${ var } 
var b = `Hi, I'm ${ fName } ${ sName }, I'm ${ age } and work as a ${ job }.`;
// ` above the tab

// let
var a = 'car' ;
{
  let a = 5;
  console.log(a) // 5
}
console.log(a) // car

// const
const c = "tree";
console.log(c);  // tree
c = 46;  // TypeError! 

// spread ()
let a = [3, 4, 5];
let b = [1, 2, ...a, 6];
console.log(b);  // [1, 2, 3, 4, 5, 6]
var middle = [3, 4];
var arr = [1, 2, middle, 5, 6];
console.log(arr);// [1, 2, [3, 4], 5, 6]
var middle = [3, 4];
var arr = [1, 2, ...middle, 5, 6];
console.log(arr); // [1, 2, 3, 4, 5, 6]
		//String to Array  
var str = "hello";
var chars = [...str];
console.log(chars); // ['h', 'e',' l',' l', 'o']

//Destructuring
let [ a, b, c ] = [ 6, 2, 9];
console.log(`a=${a}, b=${b}, c=${c}`); //a=6, b=2, c=9
function foo() { return ['car', 'dog', 6 ]; } 
let [ x, y, z ] = foo();
console.log(`x=${x}, y=${y}, z=${z}`);  // x=car, y=dog, z=6

function bar() { return {a: 1, b: 2, c: 3}; }
let { a, c } = bar();
console.log(a); // 1
console.log(c); // 3
console.log(b); // undefined

//concise parameter
let a = 4, b = 7;
let c = { a: a, b: b };
let concise = { a, b };
console.log(c, concise) // {a: 4, b: 7}, {a: 4, b: 7}

//for ... of 
let a = ['a', 'b', 'c', 'd' ];
// ES6 
for ( var val of a ) {
    console.log( val );
} // "a" "b" "c" "d"
// pre-ES6 
for ( var idx in a ) {
    console.log( idx );
}  // 0 1 2 3

//Dynamic Property Names
let  city= 'sheffield_';
let a = {
    [ city + 'population' ]: 350000
};
a[ city + 'county' ] = 'South Yorkshire';
console.log(a); // {sheffield_population: 350000, sheffield_county: 'South Yorkshire' }



/*----------  REQUESTS  ----------*/

// GET
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();

// POST
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);








































//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: jQuery... : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//

$(document).ready(main); //wait for dom download, then execute main function
document.getElementsByClassName('skillset'); === $('.skillset');
$('.skillset').hide(); // display: none
$('.projects').show(); //block...
$('.skillset').fadeIn(1000); // fade during 1s. "появление"
$(this).next().slideToggle(400); // "плавный выезд"
$(this).next().toggle(); // next = next element in DOM
$(this).text('Projects Viewed'); //inerHtml
$('.projects-button').on('click', function() {
	$('.projects').toggle(); //switch between block and none
	$('.projects').toggleClass('active');
	$(this).toggleClass('active'); //this = dom element which was clicked 
});

