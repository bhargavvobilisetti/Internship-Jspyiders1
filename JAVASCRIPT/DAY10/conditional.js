// var day=0;
// if (day==0){
//     console.log("Sunday")
// }
// else if(day==1){
//     console.log("Monday")
// }
// else if(day==2){
//     console.log("Tuesday")
// }
// else if(day==3){
//     console.log("WEDNESDAY")
// }
// else if(day==4){
//     console.log("thursDAY")
// }
// else if(day==5){
//     console.log("Fridy")
// }
// else if(day==6){
//     console.log("Saturday")
// } 



// var num1=prompt("enter a value")
// var num2=prompt("enter a value")

// var iper=prompt("end the oprtaion,add,sub,mutl,div,mod")

// if(iper=="add"){
//     console.log(num1+num2)
// }
// else if(iper=="sub"){
//     console.log(num1-num2)
// }
// else if(iper=="multi"){
//     console.log(num1*num2)
// }
// else if(iper=="div"){
//     console.log(num1num2)
// }
// else if(iper=="exp"){
//     console.log(num1**num2)
// }
// else{
//     console.log("enter the valid input")
// }



// switch(5){
//     case 0:
//         console.log("sunday");
//     break;
//     case 1:
//         console.log("monday");
//     break;
//     case 2:
//         console.log("tuesday");
//     break;
//     case 3:
//         console.log("wednesday");
//     break;
//     case 4:
//         console.log("thursday");
//     break;
//     case 5:
//         console.log("firday");
//     break;
//     case 6:
//         console.log("saturday");
//     break;
//     default:
//         console.log("enter the proper exp");
// }

// write a program the simalte using switch.
// the user should input the name of a colour in the characters based on the colour display the apprape action

// var colour=prompt("enter the color name")
// switch(colour){
//     case "green":
//         console.log('go')
//     break;
//     case "yellow":
//         console.log('ready to go')
//     break;
//     case "red":
//         console.log('stop')
//     break;
//     default:
//         console.log("enter thevalid input")
// }


// write a program to implement is simply calculator using switch statement 
// collect the two numbers operatir from user perform the operation ?


var num1=prompt("enter the num");
var num2=prompt("enter the num2");
var oper=prompt("end the oprtaion,+,-,/,*,%")
switch(oper){
    case "+":
        console.log(num1+num2);
    break;
    case "-":
        console.log(num1-num2);
    break;
    case "*":
        console.log(num1*num2);
    break;
    case "/":
        console.log(num1/num2);
    break;
    case "**":
        console.log(num1**num2);
    break;


}
