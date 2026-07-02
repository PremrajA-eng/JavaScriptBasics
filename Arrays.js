var marks = Array(6)
var marks=new Array(10,30,23,34,45,45)

var marks = [20,5,0,6,0,4,0,]
console.log(marks.slice(2,5))
console.log(marks[2])
marks[2]=100
console.log(marks[2])
console.log(marks.length)
marks.push(122)
marks.unshift(400)
console.log(marks)
console.log(marks.indexOf(100))
console.log(marks.includes(555))
console.log("*****************")
var sum=0
for(let i=0; i<=marks.length;i++)
{
console.log(marks[i])
sum=sum+marks[i]
}
//reduce filter map

let total= marks.reduce(sum,mark=>sum+mark,0)







 

