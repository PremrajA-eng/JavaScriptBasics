//lamda functions no parameter no return type
let greet=():void=>{
console.log("hello ts");
}
greet();

let add=(a:number,b:number):number =>
{
return a+b;
}
console.log(add(10,20));

let multi=(x:number,y:number)=> x*y;
console.log(multi(10,50));


// Arrow function with optional value
let info=(id:number,names:string,mailid?:string):void =>{

console.log("id " +id+ " " +names)
if(mailid!==undefined){
    console.log(mailid);
}

}
info(10,"prem", "aruprem@gmail.com");

// Arrow function with multiple values
let stdInfo=(...info:(number|string|boolean)[]):number=>{
return info.length;

}
console.log(stdInfo(10,"prem",true))
console.log(stdInfo("prem",12,true))