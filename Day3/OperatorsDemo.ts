let a:number=100;
let b:number=5000;
let c:number=10, d:number=100;
console.log(a+b);
console.log(c-d);
console.log(a*b);
console.log(a%b);
console.log(a/b);
console.log(5**2);

// Assignment operator =
a=500;
b=400;
console.log("*****Assignment operator*******")

a=a+b;
console.log(a);
a+=b;
console.log(a);
a-=b;
console.log(a);
console.log("*****Relational operator*******")

console.log(a<b);
console.log(b>c);
console.log("********Difference between == and ===")

let num1:number=10;
let num2:any="10"
console.log(num1==num2);
console.log(num1===num2);

console.log("*****logical operator*******")
let b1:boolean=true
let b2:boolean=false
console.log(b1&&b2);
console.log(b1||b2);

// combination of logical and releational operator
console.log("******logical boolean operator***")
console.log(a<b && b>c);
console.log(5<10 || 3>3);

// increment and decrement operators
let x:number=10;
let y:number=x++;
console.log(y)
console.log(x++)
console.log(--x)
// ternary operator

let res:number=(a<b) ? a:b;
console.log(res)

let personAge:number=33;
let res2:string=(personAge>30) ? "Adult":"Minor";
console.log(res2);