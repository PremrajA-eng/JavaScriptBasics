// callBack function


// callback function that takes a function as a argument
function grreet(name:string,msg:(message:string)=>void)
{
    console.log(name)
    msg("hello");
}
// callback function
function showMessage(message:string)
{
    console.log(message);
}

// calling function by passing callback function
grreet("prem",showMessage);

// example2 

function sumNumbers(x:number,y:number,callback:(result:number)=>void){
    let result=x+y
    callback(result)
}
function displayResult(result:number):void{
    console.log(result)
}

sumNumbers(10,20,displayResult);

