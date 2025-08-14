// function add(num1,num2){
//     var addedval=num1+num2;
//     return addedval;
// }
// var addval=add(34,12);
// console.log(addval);

// console.log(add(10,11));

                                                       
// function circle(rad){
//     var exp=3.14*rad*rad;
//     return exp;

// }
// var circlearea=circle(5);
// console.log(circlearea)  


//create a function that returns true if the number is even otherwise return false;

// function evenodd(num){
//     if(num&2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(evenodd(1))


//write a function in the name of the getlength which returns length of the string
// function lenght(str){
//     return str.length
// }
// console.log(lenght("bhargav"))


//write a function toupper which takes a string and returns to uppercase

// function upper(str){
//     return str.toUpperCase()
// }
// console.log(upper("bhargav"));

// write a function which takes string and returns number of vowels of it 


function vowels(str){
    var num=0;
    // var num2=0;
    str=str.toLowerCase();
    for(i=0;i<=str.length-1;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            num++
        }
        else{
            // num2++;
        }
    }
    // return `No of vowels :${num}\n No of Consonents:${num2} \n No of Char in the string:${str.length}`;
    return num
}

// console.log(vowels("This is having many vowels and we get the count"));
var arr=vowels("BHARGV")
console.log(arr)


// write a function that returns whether a string is a palindrome or not 


function paindrome(string){

}