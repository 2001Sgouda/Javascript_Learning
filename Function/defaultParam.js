function say(message){
    console.log(message);
}
say();//undefined
say('hello');//hello

//set default parameters
function say2(message='Hi'){
    console.log(message);
}
say2();//Hi
say2(undefined);//Hi
say2(null);//null function treats it as avalid value and prints it
say2('Welcome to Odisha');//Welcome to Odisha

//using parameters in default values
function add(x=1,y=x,z=x+y){
    return x+y+z;
}
console.log(add());//4 (x=1, y=1, z=1+1=2)
console.log(add(5,6,7));//18 (x=5,y=6,z=7)

//default parameters with multiple parameters
function createUser(name = "Anonymous", age = 18, country = "USA") {
    return `Name: ${name}, Age: ${age}, Country: ${country}`;
}

console.log(createUser("John", 25, "Canada"));  // Output: Name: John, Age: 25, Country: Canada
console.log(createUser("Alice", 30));           // Output: Name: Alice, Age: 30, Country: USA
console.log(createUser("Bob"));                 // Output: Name: Bob, Age: 18, Country: USA
console.log(createUser());                      // Output: Name: Anonymous, Age: 18, Country: USA

//default parameters with object

function createProfile({ name = "Anonymous", age = 18, country = "USA" } = {}) {
    return `Name: ${name}, Age: ${age}, Country: ${country}`;
}

console.log(createProfile({ name: "John", age: 25, country: "Canada" }));  // Output: Name: John, Age: 25, Country: Canada
console.log(createProfile({ name: "Alice" }));                            // Output: Name: Alice, Age: 18, Country: USA
console.log(createProfile());                                              // Output: Name: Anonymous, Age: 18, Country: USA
