/*
The following example defines a constructor function called Person:

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
In this example, the Person is the same as a regular function except that its name starts with the capital letter P.
To create a new instance of the Person, you use the new operator:

let person = new Person('John','Doe');   

*/
function Person(fname,lname){
    //created this={};

    //adding properties to this
    this.fname=fname;
    this.lname=lname;
    this.getFullName=function(){
        return this.fname+ ' '+this.lname;
    }
    //return this;
}
let person1=new Person('john','doe');
let person2=new Person('ram','shastri')
console.log(person1.getFullName());//john doe
console.log(person2.getFullName());//ram shastri
