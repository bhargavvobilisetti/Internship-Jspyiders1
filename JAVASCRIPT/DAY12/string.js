// in this we need to write double quote in sentence we cannot insert again double quote.. single quote can use in the sentence..........
var str="lo're'm40"
console.log(str)

// in the sentence we "can" use onlu single quotes only wecannot insert aain nd again we can insert the double quote
var str1='awesdrtfg"hb"jnk'
console.log(str1)


// same as single quote and double quote but need to add in first and last brackets;
var str2=("waesr'dt'fgyuh");
console.log(str2);

var st3=`serdtfgyh
esrdtfgyhujkl
esdfrghjkl third line we are writing`
console.log(st3)

var num1=20;
var num2=49;
// console.log(`Add b/w ${num1} and ${num2} is ${num1+num2}`);


// console.log(` date and time is ${Date()}`);
// slader man game
// console.log(`your random number is ${Math.random()}`)


document.getElementById("container").innerHTML=`
        <table style="border: 2px solid black; border-collapse:collapse; ">
            <thead>
                <tr>
                    <th style="border: 2px solid black;">SNO</th>
                    <th style="border: 2px solid black;">NAME</th>
                    <th style="border: 2px solid black;">PHNO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 2px solid black;">1</td>
                    <td style="border: 2px solid black;">Sai</td>
                    <td style="border: 2px solid black;">14567</td>
                </tr>
                <tr>
                    <td style="border: 2px solid black;">2</td>
                    <td style="border: 2px solid black;">Bhrgav</td>
                    <td style="border: 2px solid black;">1452167</td>
                </tr>
                <tr>
                    <td style="border: 2px solid black;">3</td>
                    <td style="border: 2px solid black;">BLo</td>
                    <td style="border: 2px solid black;">109876</td>
                </tr>
            </tbody>
        </table>

`