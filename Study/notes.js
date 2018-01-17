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

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    return result;
  }
wordBlanks("dog", "big", "ran", "quickly");

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


/*----------  ARRAYS  ----------*/
var myArray = [["girls", 2], ["cup", 1]];
var myArray = [1,2,3];
var myData = myArray[0];
myArray[0] = 3;
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1]; // = 8
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); //add to array
var removedFromMyArray = myArray.pop();  //delete last element from myArray, and = it to removedFromMyArray
//now removedFromMyArray === ["cat", 2] and  myArray === [["John", 23]]
var removedFromMyArray = myArray.shift(); //delete first element from myArray, and = it to removedFromMyArray
myArray.unshift(["Paul", 35]); //create a element at start of array
console.log(amount);				// 215.9784
console.log(amount.toFixed(2));	// "215.98"

/*----------  SPREAD OPERATOR ...  ----------*/
var middle = [3, 4];
var arr = [1, 2, middle, 5, 6];
console.log(arr);// [1, 2, [3, 4], 5, 6]
var middle = [3, 4];
var arr = [1, 2, ...middle, 5, 6];
console.log(arr); // [1, 2, 3, 4, 5, 6]
/*----------  String to Array  ----------*/
var str = "hello";
var chars = [...str];
console.log(chars); // ['h', 'e',' l',' l', 'o']

/*----------  MATH  ----------*/
const arrMax = arr => Math.max(...arr);
// IS THE SAME AS
arrMax = function(arr){
  return Math.max(...arr);
};
Math.min(1,2,3,4)// 1
Math.min([1,2,3,4])// NaN
Math.min(...[1,2,3,4]) /*is the same as */ Math.min(1,2,3,4)

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


/*----------  forEach() map() filter()  ----------*/
forEach() — executes a provided function once for each array element.
map() — creates a new array with the results of calling a provided function on every element in the calling array.

//forEach
arr.forEach((num, index) => {
	return arr[index] = num * 2;
});
// arr = [2, 4, 6, 8, 10]

//Map
let doubled = arr.map(num => {
    return num * 2;
});
// doubled = [2, 4, 6, 8, 10]
let mapped = sample.map(elem => elem * 10)
console.log(mapped);
// output  [10, 20, 30]

//Map + filter 
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]

//Filter
var sample = [1, 2, 3] // yeah same array
// es5
var result = sample.filter(function(elem){
    return elem !== 2;
}); // [1, 3]
// es6
var result = sample.filter(elem => elem !== 2)



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




//
// ────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: M A N I P U L A T I O N : :  :   :    :     :        :          :
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
querySelectorAll //Returns a NodeList containing all matching Element



//
// ────────────────────────────────────────────────────────────────────────────────── I ───────
//   :::::: F E A T U R E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//

window.setInterval(500, something()); //asynchronously execute a function every 500m.s.

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

