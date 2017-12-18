var myName;
myName = "My name is " + myName + " and I am swell!";

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

//while
while (amount<bank_balance){
  amount = amount + PHONE_PRICE;
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}
