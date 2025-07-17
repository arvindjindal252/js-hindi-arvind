// here we will learn about the reduce method this is nothing just a sum method which we did in the dsa

const myvalues=[1,2,3,4,5]

// in this there are two values one is accumulator and another is currvalues 

const values=myvalues.reduce((acc,curr)=>{return acc+curr},0)
console.log(values);