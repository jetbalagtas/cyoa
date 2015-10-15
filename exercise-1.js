/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

var sum = function(a, b) {
    return a + b;
}

console.log(sum(8, 11));

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

 var matt = {
     finishingTime1: 240, //in minutes
     finishingTime2: 210.4,
     finishingTime3: 235.1,
     finishingTime4: 208.9,
     finishingTime5: 197.5,
     finishingTime6: 227.4
 };

 var mark = {
     finishingTime1: 120, //in minutes
     finishingTime2: 110.4,
     finishingTime3: 135.1,
     finishingTime4: 108.9,
     finishingTime5: 97.5
 };

 var getAverageTime = function(person) {
   var numRuns = Object.keys(person).length;
   var totalTime = sum(person);
   function sum(obj) {
     var sum = 0;
     for(var i in obj) {
       if(obj.hasOwnProperty(i)) {
         sum += parseFloat(obj[i]);
       }
     }
     return sum;
   }
     return totalTime / numRuns;
 }

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));

// OMG, this ^ took a while! I hope I remember how to do it, lolz!
// After reading it, trying to understand the logic, I realized
// that I was making things more complicated than it should be.
// There's probably a simpler way to do it but I'm happy for now.
// Thanks for this exercise! Wish I could finish it all!


/**
 * PART 3
 *
 *
 * Modify the following to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
    "use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
    "use strict";
    // return ...
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos); // should calculate to -158
