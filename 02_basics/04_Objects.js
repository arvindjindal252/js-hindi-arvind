// we can create a singleton object using constructor

const tinderUSer = new Object()

tinderUSer.name="Arvind"
tinderUSer.caste="General"
tinderUSer.rollno=2121252
console.log(tinderUSer);


// object destructing 

let structingobject={
    coursename:'Maths',
    coursefees:12345
}
const {coursefees} = structingobject  // destructing of the object 
const {coursename} = structingobject 
console.log(coursename)

// here we talk about api 
// the form of api is json (javascript object notation)