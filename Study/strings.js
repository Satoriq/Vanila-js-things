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
var removedFromMyArray = myArray.pop();  //take last item from array, 
//now removedFromMyArray === ["cat", 2] and  myArray === [["John", 23]]
var removedFromMyArray = myArray.shift(); //take first item from array, 