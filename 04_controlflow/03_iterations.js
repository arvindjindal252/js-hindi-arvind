const arr =  [1,2,3,4,5]

for (const ar of arr) {
    console.log(ar);
}

// in forof loop we hvae to use the iterator 


// Map

const mapping= new Map();

mapping.set('in',"india")
mapping.set('aus',"australia")
mapping.set('afr',"africa")

// for (const maped of mapping) {
//     console.log(maped);
// }


/// this is how the map is working but if we have to print the values without the array such that we need destructing of the array

for (const [key,value] of mapping) {
    console.log(key,":-",value);
}