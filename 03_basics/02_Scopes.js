// in this we will talk about scope 

if(true){
let a=10;
const b=20;
var c=30;
}

console.log(c);
// it will surely print it which will cause the issue this is not a block scoped 


function add(){
    const string="arvind";
    if(true){
        console.log(string);
        const string2="abhinav";
    }
    // console.log(string2);// this will show you the error because of the scope 
}
add();
