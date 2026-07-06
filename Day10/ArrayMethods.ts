let numArr:number[]=[20,5,55,55,55,555,];
let fruits:string[]=["mango","onion","banana","apple","guava"]

// length -- attribute (not a method)

console.log(numArr.length);
console.log(fruits.length);

numArr.push(4,5,5,4,5,4,5,7);
console.log("after push",numArr);

numArr.pop();
console.log("after pop",numArr);

let removedfrouit=fruits.pop();
console.log(removedfrouit);

fruits.pop()
console.log("after pop", fruits)

// shift()-- removes first element from array
let numArr2:number[]=[20,5,55,55,55,555,];
numArr2.shift()
console.log("After shift", numArr2)

// unshift()-- add multiple add at begining of the array

let vegies:string[]=["onion", "karela", "gajar", "palak"]

vegies.unshift("kivi", "mula");
console.log(vegies)

let arr3:Array<string>=["banana","apple","guava","carrot"]

let slice=arr3.slice(1,3);
console.log(slice);

arr3.splice(1,2,"prem")
console.log(arr3);



