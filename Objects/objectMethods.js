//An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method.
let person1={
    fname:'john',
    lname:'doe'
};
person1.greet=function(){
    console.log('Hi');
}
person1.greet();//Hi

//we can do it like this too
let person2={
    fname:'john',
    lname:'doe'
};
function greet(){
    console.log('Hi');
}
person2.greet=greet;//assigned function name to the greet property of person object
person2.greet();//Hi


//object method shorthand
let person3={
    fname:'john',
    lname:'doe',
    greet:function(){
        console.log('Hi')
    }
};
person3.greet();//Hi


//this value:references the object that invokes the method
let person4={
    fname:'john',
    lname:'doe',
    greet:function(){
        console.log('Hi');
    },
    getFullName:function(){
        return this.fname+ ' '+ this.lname;
    }
};
console.log(person4.getFullName());//john doe