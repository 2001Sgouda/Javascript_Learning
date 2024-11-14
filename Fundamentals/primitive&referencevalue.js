//static data including primitive data types are stored in stack memory
//where as objects and functions are stored on the heap

let name1 = 'John';
let age1 = 25;// fixed amount of memory space to static data and stored in stack

let person = { //person as a variable stored in stack along with name1, age1
  name2: 'Johnny',//properties are stored in heap as an object. And person in the stack memory is an reference to it in the heap memory.
  age2: 28,
};

//example
let person2 = {
    name: 'John',
    age: 25,
  };
  
  let member = person2; //Since both person and member variables reference the same object, changing the object via the member variable is also reflected in the person variable.
  
  member.name = 'Subhasis';
  
  console.log(person2);
  console.log(member);