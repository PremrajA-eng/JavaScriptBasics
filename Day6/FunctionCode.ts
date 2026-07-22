
function test(x:number,y:number):number
{
  return (x+y)
}

console.log(test(10,20));

//name function with rest parameter

function test2(...z:number[]){
    let i;  
    let sum:number=0;
    for(i=0;i<z.length;i++){
        sum=sum+z[i]
    }
        console.log(sum)
}
test2(5,2,3);

// ----------------------------------------

function test3(...name:(number|string)[]):number{

 return name.length;
 

}
console.log(test3(3,"prem",66));

// Named function with optional parameter

function displayDetails(id:number,name:string,mailid?:string):void{

console.log("id " +id+ " " +name)
if(mailid!==undefined){
    console.log(mailid);
}

}
displayDetails(10,"prem", "aruprem@gmail.com");

// Anonymous function
/* let variable =function(parameter){
    function body
} */ 

let msgg=function():string{
    return "hello typescript";
}
console.log(msgg());

let mul=function(a:number,b:number):number{
    return a*b;
}
console.log(mul(51,40));


