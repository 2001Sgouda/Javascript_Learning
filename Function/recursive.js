//recursive function is a function that calls itself until it doesn't
/*
Basic structure:

function recurse() {
    // ...
    recurse();
    // ...
}
*/

// A recursive function always has a condition to stop calling itself. Otherwise it will call itself indefinitely.
/*
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}
*/

//count down form 3 to 1
function countDown(fromNumber){
    console.log(fromNumber);
    let nextNumber=fromNumber-1;
    if(nextNumber>0){
        countDown(nextNumber)
    }
}
countDown(3); //3 2 1

//calculate sum of n natural numbers
function sum(n){
    if(n<=1){
        return n;
    }
    return n+sum(n-1);
}
console.log(sum(5));//15
/*
sum(5) -> 5 + sum(4)
sum(4) -> 4 + sum(3)
sum(3) -> 3 + sum(2)
sum(2) -> 2 + sum(1)
sum(1) -> 1  (base case)
------------------------
sum(2) -> 2 + 1 = 3
sum(3) -> 3 + 3 = 6
sum(4) -> 4 + 6 = 10
sum(5) -> 5 + 10 = 15

*/