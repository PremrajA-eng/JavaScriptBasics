let age:number=31;
if(age>50){
    console.log("you r valid")
}
else
{
    console.log("hello");
}
if(age%2==0){
console.log(`${age} is a even number`);
}
else{
    console.log(`${age} its odd number`);
}

/* nested if else
    if(condition1){
}

else if(condition2){
}
else(conditon3){
} */
let marks:number=15;
if(marks>80 && marks<100){
    console.log(`${marks} first class `)

}
else if(marks>60 && marks>80){
    console.log(`${marks} second grade`)
}
else{
    console.log("grade D")
}