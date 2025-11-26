// Remember, We're Gonna Use Strict Mode In All Scripts Now!
"use strict";
// Today, We Will Learn About Using Google, StackOverflow, And MDN,
// To Help You When You Get Stuck In Your Coding Journey,
// Here's An Example Problem, I Suggest Dividing The Problem Into Smaller Parts,
// And Then Solving Each Part Individually:

// Problem:
// We Work For A Company That Builds Smart Home Thermometers,
// Our Most Recent Task Is This: "Given An Array Of Temperatures Of One Day,
// Calculate The Temperature Amplitude, Keep In Mind,
// That Sometimes There Might Be A Sensor Error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding The Problem,
// So First We Ask Questions, Like,
// What Is Temp Amplitude? Answer: Difference Between Highest And Lowest Temp,
// How To Compute Max And Min Temperatures?
// What's A Sensor Error? And What To Do?

// 2) Breaking Up Into Sub-Problems,
// Now That We've Understood The Problem,
// We Can Break It Up Into Smaller Problems,
// So How To Ignore Errors?
// Find Max Value In Temp Array
// Find Min Value In Temp Array
// Subtract Min From Max (Amplitude) And Return It

// Now This Has Become So Much Easier To Understand😄,
// So Now Lets Start Writing A function, Even Though,
// They Dont Tell Us To Write A Function,
// Whenever We Encounter A Task Like This,
// Its A Good Idea To Write A Function For It,
// So Now Lets Start Solving This Problem,
// So Lets Start With Finding The Max And Min Value In The Array,
// Now This Requires Some Thinking, Sure We Have The Tools For It,
// But We Need To Think About It, Like How To Find The Max And Min Values,
// And Here, We Will Use Google, AKA, Doing Research When We Get Stuck,
// So Just Search It On There, And Then, You Will See MDN Or StackOverflow,
// And, We Open StackOverflow For Now, Because There Is Always Someone,
// Who Has Already Asked The Same Question Before,
// And We Can Use The Given Answers To Solve This Sub-Problem,
// Now Most Of Them Will Be Too Difficult For You To Understand,
// Or Beyond Your Current Level Where Your At, So Keep Searching,
// Until You Find One That You Can Understand,
// And We Can Find One, By The Way, The First Or Second Solutions On The Page,
// Are Usually The Best Ones, But Since We Haven't Reached That Level Yet,
// We Will Stick To Using The Ones We Can Understand,
const calcTempAmplitude = function (temps) {
  
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
       if(curTemp > max) max = curTemp; // <-- Here We Say, If The Current Temperature Is Greater Than The Max, Then The Max Will Become The Current Temperature,
       if(curTemp < min) min = curTemp; // <-- And Here, We Say, If The Current Temperature Is Less Than The Min, Then The Min Will Become The Current Temperature,
    }
console.log(max, min);
return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
// Now That We've Done This, We Now Need To Ignore The Errors,
// And To Do So, We Can Basically Say, That This Logic Should Only Run,
// If We Have A Number Value, And To Do So, We Can Use The Continue Keyword,
// Which We Learned In The Last Section, So After Using The Continue Keyword There,
// Now The 'error' In The Array Will Be Skipped,
// And The Next Numbers Will Be Executed, And Now Is The Easy Part,
// Which Is To Return The Amplitude, So Max - Min,

// Now Lets Begin Problem 2,
// Problem 2:
// Functions Should Now Receive 2 Arrays Of Temperatures,

// 1) Understanding The Problem,
// - With 2 Arrays, Should We Implement Functionality Twice?
// N0! Just Merge Two Arrays,

// 2) Breaking Up Into Sub-Problems,
// - Merge 2 Arrays,

// So Again, We Search On Google For Solutions To Help Us,
// So We're Using StackOverflow Again, But You Can Use MDN As Well,
// Because MDN Uses More Examples To Help you Than Responses,
// But It Will Be Harder To Find Solutions That You Can Understand,
// So This Is The Solution I Think Fits This And Can Be Understood,
// By The Way, .concat Is Just An Array Method, Just Like .push And .includes,
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
       if(curTemp > max) max = curTemp; // <-- Here We Say, If The Current Temperature Is Greater Than The Max, Then The Max Will Become The Current Temperature,
       if(curTemp < min) min = curTemp; // <-- And Here, We Say, If The Current Temperature Is Less Than The Min, Then The Min Will Become The Current Temperature,
    }
console.log(max, min);
return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Now I Hope That You Understand Everything, Like Using The Tools At Your Disposal,
// Like Google, MDN, StackOverflow, W3 Schools, And Other AI's,
// Aswell As Extensions Like Live Server, Prettier, And More,
// Dividing The Problem Into Sub-Problems Too,
// And Trying Not To Panic When It Doesnt Work😅,
// So This Was All For This Subrepo, See You In The Next One! Happy Coding🚀!















