// step1 : write signature of function
// step2 : write implementation of function
// step3 : call the function with different types of arguments
// step4 : write callback function

//Example1
function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param:number|string):string{
    if(typeof param==="number"){
        return "id is " + param;
    }
    else if(typeof param==="string"){
        return "name is " + param;
    }
    return "";
}
console.log(getInfo(10));
console.log(getInfo("prem"));