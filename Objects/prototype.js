/*
In JavaScript, objects can inherit 
features from one another via prototypes. 
Every object has its own property 
called a prototype.

Because the prototype itself is also 
another object, the prototype has its 
own prototype. This creates a something 
called prototype chain.
*/

function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
// Add a method to the prototype of Person
Person.prototype.getFullName=function(){
    return this.fname+' '+this.lname;
};
// Create a new instance of Person
let p1=new Person('ram','sahu');
let p2=new Person('shyam','sahu');
console.log(p1.getFullName());//ram sahu
console.log(p2.getFullName());//shyam sahu

// Check if the prototype of p1 is the same as Person.prototype
console.log(p1.__proto__ ===Person.prototype);//true
// Check if p1 and p2 share the same prototype
console.log(p1.__proto__ ===p2.__proto__);//true


//example where different constuctors don't share prototypes
function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    return this.name+' makes a noise';
};
let animal1=new Animal('dog');

function Car(model){
    this.model=model;
}
Car.prototype.drive=function(){
    return this.model+' drives fast';
};
let car1=new Car('tesla');

console.log(animal1.__proto__==Animal.prototype);//true
console.log(car1.__proto__==Car.prototype);//true

console.log(animal1.__proto__ == car1.__proto__);//false


//constructor and prototype pattern using class keyword

class Individual{
    //constructor function declaration
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    // Method declaration (this will be on the prototype)
    getName(){
        return this.fname+' '+this.lname
    }
}
//instance of an Individual
let i1=new Individual('john','doe');
//prototype method calling on the instance of Individual
console.log(i1.getName());//john doe


//prototypal inheritance

let person={
    name:'john doe',
    greet:function(){
        return "Hi I am "+ this.name;
    }
};
// Define the teacher object that will inherit from person
let teacher=Object.create(person);
//overriding name property 
teacher.name='jane doe';
//adding a method to teacher object
teacher.teach=function(subject){
    return 'I teach '+ subject;
};
console.log(teacher.greet());//Hi I am jane doe
console.log(teacher.teach('math'));//I teach math

console.log(teacher.__proto__==person);//true
