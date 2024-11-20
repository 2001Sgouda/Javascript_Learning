//while loop
//while statement creates a loop that executes a block as long as condition is true
/*
Syntax:
while(expression){ //evaluates expression before each iteration of loop
//statement
}
*/

//ex: odd numbers between 1 and 10
let counter=1;
while(counter<10){
    console.log(counter);
    counter += 2;
}//returns 1,3,5,7,9
//ex: sum of sequence of numbers from 1 to 100
let total=0, i=0;
while(i<=100){
    total=total+i;
    i++;
}
console.log(total);//returns 5050

//using while loop through an array 
let names=['Hari','Raghu','Kishan'];
let i1=0;
while(i1<names.length){
    console.log(`${names[i1]}`);
    i1++;
}// returns Hari Raghu Kishan

//do while loop
//loop statement creates a loop that executes a block until a condition evaluates to false.
//practice, you often use the do...while statement when you want to perform at least one iteration before checking the condition.
/*
do {
  statement;
} while(expression);
*/
//ex: print 5 numbers from 0 to 4
let count=0;
do{
    console.log(count);
    count ++;
}while(count<5); //returns 0 1 2 3 4

//ex: number guessing game
let secretNumber=7;
let userGuess;
do{
    userGuess=parseInt(prompt('Guess a number my little homie:')); //window function, so can't run in nodejs environment
    if(userGuess!==secretNumber){
        console.log('Try again');
    }
}while(userGuess!==secretNumber);
console.log('You guessed the right number bro');

//for loop: The for loop statement creates a loop with three optional expressions
/*
Syntax:
for (initializer; condition; iterator) {
    // statements
}
*/
//ex: show numbers from 1 to 4 in the console
//first initializer, then go to condition if false it ends. if condition is true statement gets executed then iterator. after that again check the condition do the same thing until condition is true.
for(let i=1;i<5;i++){
    console.log(i); //returns 1 2 3 4
}
//we can do it by other methods too
let j=1;
for( ; j<5; j++){
    console.log(j);//same result as previous
}
//or like this too
for(let k=1; ;k++){
    console.log(k);
    if(k>3){
        break;//slight modification done in condition to get the result same as previous one
    }
}//
//we can use it without any expression also
let l=1;
for(;;){
    if(l>3){
        break;
    }
    console.log(l);
    l++;
}//returns 1 2 3

//can use for loop with empty statements too. just place a semicolon immediately after for statement
//calculate sum of 10 numbers from 1 to 10
let sum=0;
for(let i=0; i<10; i++, sum += i);//first sum calculated then iteration like happens when there is statement inside
console.log(sum)//55

//label statement : we can label a statement for later use
//syntax
//label:statement;
//to terminate the for loop prematurely, we can use a break statement

for(let a=0;a<5;a++){
    console.log(a); // 0 1 2 3 
    if(a==3){
        break;
    }
}
//but here
for(let a=0;a<5;a++){ 
    if(a==3){
        break;
    }
    console.log(a);//0 1 2
}

//nested loop: loop inside loop
for(c=1;c<=3;c++){
    for(d=1;d<=3;d++){
        console.log(c,d);// 11 12 13 21 22 23 31 32 33
    }
}
//slight modification
for(m=1;m<=3;m++){
    for(n=1;n<=3;n++){
        if(m+n==4){
            break;
        }
        console.log(m,n);//11 12 21
    }
}

for(m=1;m<=3;m++){
    for(n=1;n<=3;n++){
        console.log(m,n);// 11 12 13 21 22 31 because if block is after console.log()
        if(m+n==4){
            break;
        }
    }
}

//label example
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break outer; // Breaks out of both loops (the labeled outer loop)
      }
      console.log(i, j);// 11 12 
    }
  }
//slight modification
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(i, j);//11 12 13
      if (i + j == 4) {
        break outer; // Breaks out of both loops (the labeled outer loop)
      }
    }
  }

//break in while loop and do while
let A=0;
while(A<5){
    A++;//increment first
    console.log(A);//1 2 3
    if(A==3){
        break;
    }
}
//Here increment happens later
let B=0;
do{
    console.log(B);//0 1 2 
    B++;
    if(B==3){
        break;
    }
}while(B<5);

//continue: terminates current iteration statement execution continues to next iteratio
//odd number from 1 to 10
for(p=0;p<10;p++){
    if(p%2==0){
        continue;
    }
    console.log(p);// 1 3 5 7 9
}

let q=0;
do{
    q++;
    if(q%2!==0){
        continue;
    }
    console.log(q);// 2 4 6 8 10

}while(q<10);

// continue with label
outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (i + j == 3) continue outer;
      console.log(i, j);//11 31 32 33
    }
  }

//comma operator: 
//leftExpression, rightExpression
//A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression.
let result=(10, 9.5 + 2.7);
console.log(result);//12.2

let age1=30
let age2=(age1++, age1+1);// age1 after increment became 31, then right expression is assigned to age2 hence age2=32
console.log(age1, age2);//31 32

//create a 3x3 matrix grid
let board=[1,2,3,4,5,6,7,8,9];
let s=' ';
for (i=0,j=1;i<board.length;i++,j++){
    s += board[i] +' '; //first iteration i=0,j=1. will continue till j=3. s='1 2 3'
    if(j%3==0){         //now 3%3==0
        console.log(s); //so 1 2 3 will be printed
        s=' ';//again s made empty so that next row will be printed
    }

}