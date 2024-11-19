//In JavaScript, all function arguments are always passed by value. This means that JavaScript copies the values of the variables into the function arguments.
//In other words, the changes made to the arguments are not reflected outside of the function.

function square(x){
    x=x*x;
    return x;
}
let y=10;
let result=square(y)
console.log(result);//100
console.log(y);//10

//pass-by-value of reference values
let person={    //person object in stack, key value pairs in heap
    name:'john',
    age:30,
};
function increaseAge(obj){ //obj in stack
    obj.age +=1;
}
increaseAge(person);
/*
JavaScript engine creates the obj reference and make this variable reference the same object that the person variable references.
After that, increase the age property by one inside the increaseAge() function via the obj variable
*/
console.log(person);//{name:'john, age:31}


//when passing an object to a function, we are passing an reference of that object, not the actual object.Therefore the function can modify th eproperties of the object via its reference.
//but we can't change the reference passed in to the function

let person2 = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge2(obj) {
    obj.age += 1;
  
    // reference another object
    obj = { name: 'Jane', age: 22 };
  }
  
  increaseAge2(person2);
  
  console.log(person2);//{name: 'john', age:26}


//but we can modify the object outside the function
let person3 = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge3(obj) {
    return {name:'Subhasis', age:23}
  }
  
  person3=increaseAge3(person3); //reassign person3 to the new object returned by function
  
  console.log(person3);//{name:'Subhasis', age: 23}

//we can directly modify the object properties too
let car={
    model:'Toyota',
    age:5
};
function chnageCar(obj){
    obj.model='Tesla';
    obj.age=10;
}
chnageCar(car);
console.log(car);//{model:'Tesla', age:10}
  
  