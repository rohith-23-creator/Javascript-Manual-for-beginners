//creating an array
const numbers=[1,2,3,4,5,6,67,3,123]
const string = new Array("rohith","kumar","Elankavi");
const mixed_value= new Array("Rohith", 234,true,undefined,false,null,{a:1,b:2})

let val;
//getting array length
val=numbers.length;

//Check if is array
val=Array.isArray("Hello") //op is false
val=Array.isArray(numbers); //op is true

//Get single value
val=string[0];   //using position of the strings

//Inserting into the arrays
numbers[2]=200;

//find the index value
val=numbers.indexOf(5);

//Mutating arrays
//add on to end
val=numbers.push(130);
//add on to front
val=numbers.unshift(1234);
//delete from the end
val=numbers.pop();
//Splice the values
val=numbers.splice(1,1); //(startingnum , endnum)

// //sorting arrays
// val=string.sort(); //alphabetical order
// val=numbers.sort(function(x,y){
//     return x-y;
// })

// //reverse sort
// val=numbers.sort(function(x,y){
//     return y-x;
// })

//find
function under10(num){
    return num < 10;
}

val= numbers.find(under10);

//console.log(numbers);
console.log(val)