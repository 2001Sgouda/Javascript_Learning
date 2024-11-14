//unordered collection of key value pair, each key-value pair called property
//key of property is string where as value can be any data type even function.

let person={
    'Roll no':69, //since spaces between there in key so use of quote
    firstName:`Subhasis`,
    lastName:`Gouda`,
    contact:{
        post:`Suramani`,
        pin:761107
    }   
}
//accessing properties
console.log(person.lastName);//returns Gouda
console.log(person.contact.pin);//returns 761107

//can do it by array notation too
console.log(person['firstName']);//returns Subhasis
console.log(person['Roll no']);//return 69
console.log(person['contact']['pin']);// returns 761107
console.log(person.address);//returns undefined

//modifying value of a property
person.contact.pin=761108;
console.log(person.contact.pin);//returns 761108

//add new property
person.contact.dist='Ganjam';
console.log(person);//returns with dist added in properties with in contact key of person object

//delete property 
delete person.contact.dist;
console.log('dist' in person.contact);//returns falses. checked by using in operator

