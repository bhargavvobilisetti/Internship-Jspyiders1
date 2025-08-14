// // implicit typecasting
// var num1=45;
// var str="10";
// console.log(typeof(num1),num1)
// console.log(typeof str,str)

// var add=num1+str
// console.log(typeof add,add);

// var sub=num1+str
// console.log(typeof sub,sub);

// var str = "35apple";
// console.log(typeof str,str)

// var Num=Number(str)
// console.log(typeof Num,Num)


// // Assignment how to convert boolean 
// var n1=prompt("value");
// var n2=prompt("value");

// console.log(Number(n1)+Number(n2))
// console.log(n1-n2)
// number tyoe
var str="45.5sample"
console.log(Number(str),typeof Number(str));
console.log(parseInt(str),typeof parseInt(str));
console.log(parseFloat(str),typeof parseFloat(str));



// string type
var bool=false;
var num=Number(bool);
console.log(num,typeof str);

// tostring
var num=450;
var str=num.toString();
console.log(str,typeof str)


//boolean true or false
var val="bhargav";// "false"-true, 0-false,  1-true, "apple"-true, undefined-false,false=false ,true-true, Nan-false, null-false

var bool=Boolean(val);
console.log(bool,typeof bool)