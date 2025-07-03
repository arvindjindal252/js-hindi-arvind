 function saymyname(){
    console.log("Hi,My name is Arvind Jindal")
 }
 saymyname()
 // the way to write the function is firstly write the keyword then define it 
//  saymyname  this is not the correct way to write the name of the function this is just a reference 


function addtwonumbers(number1,number2){
return number1+number2
}

const sumition = addtwonumbers(4,5)

console.log("the result is", sumition);

// arguments and parameters 

// the original values are called arguments and the duplicates values are called parameters



// The three dots are called rest operators 
function shoppingcart(...num1){
    return num1
}

const values=shoppingcart(100,200,300,400,500)
console.log(values);
