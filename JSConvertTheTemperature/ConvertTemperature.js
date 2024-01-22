/**
    //* LeetCode link: https://leetcode.com/problems/convert-the-temperature/description/

//! You are given a non-negative floating point number rounded to two decimal places Celsius, that denotes the temperature in Celsius.

//? You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, Fahrenheit].

Return the array ans. Answers within 10-5 of the actual answer will be accepted.

Note that:

//* Kelvin = Celsius + 273.15
//* Fahrenheit = Celsius * 1.80 + 32.00


Example 1:
//! Input: Celsius = 36.50
//? Output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

Example 2:
//! Input: Celsius = 122.11
//? Output: [395.26000,251.79800]
Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.


Constraints:

0 <= Celsius <= 1000
*/
function convertTemperature(celsius){

    //Create an empty array that will be returned
    let arr = [];

    // ------------ KELVIN -------------- //
    //Create a variable that converts temperature to kelvins using the celsius parameter
    let kelvin = celsius + 273.15;
    
    //Push the kelvin calculation result into the empty array
    arr.push(kelvin);


    // ------------ FAHRENHEIT -------------- //
    //Create a variable that converts temperature to fahrenheit using celsius
    let fahrenheit = celsius * 1.80 + 32.00
    
    //Push the fahrenheit calculation result into the array
    arr.push(fahrenheit);
    
    //Return the array
    return arr;
}

console.log(convertTemperature(122.11));

 // to run javascript you must first be in the correct folder
 //then you will type  " node 'nameOfFile.js' " in the console
 //Example: node ConvertTemperature.js