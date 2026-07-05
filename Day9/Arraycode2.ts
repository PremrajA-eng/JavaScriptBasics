// Approch2 using generic way (Array)

let emp1:Array<String>=["prem", "raj", "sir"];

let empID:Array<number>=[10,20,0,2,50,];

let empData:Array<string |number>=["prem",143,"sas"];

let mixtype:Array<any>=["prem", 50, true]
console.log(emp1)
console.log(mixtype)
console.log(empData)
console.log(empID)

let i:number=0;
for(i=0;i<emp1.length;i++){
    console.log(emp1[i]);
}
// for in looping
for(let j in empID){
    console.log(empID[j]);
}
// "for of" workng on value
for(let value of mixtype){
    console.log(value);
}


function search(ele:number, arr:number[]):boolean
{
    
for(i=0;i<arr.length;i++){
    if (arr[i]===ele){
        return true;
    }   
} 
return false;
}

let arr:number[]=[20,2,5,11,4,4]
console.log(search(4,arr))
//*********************************** */

let words:string[]=["rahul","jadugar","don"]
function uppercase(arr1:string[]):string[]
{
    let result:string[]=[];
    for(let l in arr1){
        result[l]=arr1[l].toUpperCase();

    }
    return result;
}

console.log(uppercase(words));