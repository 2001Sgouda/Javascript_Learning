//function without a name
/*
(function () {
   //...
});
*/
//anonymous function is not accessible after initial creation. So we need to assign it to a variable
let show = function() {
    console.log('Anonymous function');
};

show();

//using as arguments to other function
setTimeout(function(){
    console.log('Executed after 1 second');
},1000);

//immidiately invoked function execution
(function(){
    console.log('IIFE')
})();

let person={
    fname:'john',
    lname:'doe'
};
(function(){
    console.log(person.fname+' '+person.lname)
})();

//Arrow function: shorthand for declaring anonymous function

let showAf=function(){
    console.log('Anonymous');
}
showAf();
//it can be shortened by arrow function like this
let showAf2 = () => console.log('Anonyomus');
showAf2();

let add=function(a,b){
    return a+b;
};
console.log(add(20,30));//50

//can be shortened using arrow function
let add2 = (a,b) => a+b;
console.log(add2(39.6,40));//79.6