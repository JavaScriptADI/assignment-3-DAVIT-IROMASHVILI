// write your code in this directory
// 1
let i = 1;
for (; i <= 10; i++){
    console.log(i);  
}   
// 2
let k = 10;
for (; k >= 1; k--){
    console.log(k);   
}
// 3 
let sum = 0;
for (let i = 1; i <= 50; i++)/*loop starts at "i=1" and runs until "i" is less than or equal to 50; */ {
    sum += i;  /*on each interation value of "i" is added to "sum" */
}
console.log(sum);   /*once the circle is complete, "sum" contains the sum of the numbers from 1 to 50*/  /*and its printed with 'console.log' */
// 4
for (let i = 0; i < 10; i += 2) {
    console.log(i);
} /* in this loop we have 5 iteraions, beacause the loop start with "i=0", the condition is 1<10, thats mean loop will run as long as "i" is less than 10. in each interation "i" is increamented by 2(i += 2).*/
// 5
/* "break" statment is useful for exiting loops or switch statements early based on a specific condition.
for example: */

for (let p = 1; p <= 5; p++){
    if (i===5){
        break ; /*exit the loop when i equals to 21*/
    }
    console.log(p);
}
// 6
/*"continue" statement is useful when you want to skip specific iterations under certain conditions but still continue with the rest of the loop. 
for example:*/
for (let g = 1; g <= 10; g++){
    if (g === 7) {
        continue; /*skip the itertation when "g" equals 7*/
    }
    console.log(g);
    
} /*console log will write all the numbers from 1 to 10, but it'll leave out the 7. */
// 7
for (let n = 1; n <= 100; n++){
    if (n === 27){
        break;
    }
    console.log(n);
}
// 8
for (let h = 1; h <= 100; h++) {
    if (h % 3 === 0 && h % 5 === 0) {
        console.log("FizzBuzz");
        
    } else if (h % 3 === 0) {
        console.log("Fizz");
        
    } else if (h % 5 === 0) {
        console.log("Buzz");
        
    } else {
        console.log(h);
        
    }
}


// 10
let sum2 = 0;
for (let r = 2; r <= 1000; r += 2) {
    sum2 += r;
}

console.log(sum2);
// 11
let sum3 = 0
for (let j = 3; j <= 1000; j += 3){
    sum3 += j;
}

console.log(sum3);

// 12
let sum4 = 0;
for (let m = 15; m <= 1000; m += 15){
    sum4 += m;
}

console.log(sum4);

