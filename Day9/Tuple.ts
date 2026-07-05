// fix array

let person:[string,number]=["lasdas",154];

console.log(person[0]);
console.log(person[1]);

// example2 

let multivalue:[number,string, boolean, string,number]=[20,"pree",true,"asda",41]

console.log(multivalue)

for(let i=0;i<multivalue.length;i++){
    console.log(multivalue[i])
}
console.log("**********for in Loop********")
for(let j in multivalue){
    console.log(multivalue[j])
}

// Array of Touple
let stdInfo:[number,string][]=[[1,"prem"] ,[2,"raj"],[3,"asdad"]]
console.log(stdInfo[2])
let TP1=stdInfo[2];
console.log(TP1[0])