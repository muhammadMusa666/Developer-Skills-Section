// Remember, We're Gonna Use Strict Mode In All Scripts Now!
"use strict";
// Today, We Will Learn How To Debug Code,
// Which Is A Very Important Skill To Have,
// Because It Is A Part Of The Development Process,
// This Topic Wont Be Very Easy To Understand At First,
// But Slowly You Will See How It Works, And Just So You Know,
// Debugging Has 4 Parts, Identifying The Problem,
// Finding The Source Of The Problem, Fixing The Problem,
// And Preventing The Problem From Happening Again.
// So Just Keep That In Mind As We Go On About Debugging😄,
// And Lets Start With Something Small,
// Lets Say In Our Smart Thermometer(Go Review The Previous Subrepo For More Info),
// We Need To Do Some Measurements On Another Unit Called Kelvin,
// Which Is The Absolute Temprature, And The Conversion Is Pretty Easy,
// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: (prompt('Degrees Celsius:')),
//     }

//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// console.log(measureKelvin());
// Now If You Keep It Like This, And Insert A Number, The Value Will Not Be Correct,
// Because There Is A Bug Somewhere In Our Code,
// So, Lets Find It, Also, This Means Our 1st Step To Debug Has Been Completed,
// Because We Have Identified The Bug, Now, We Will Find Its Source,
// Here's The Steps In A List:
// 1. Identify The Bug
// 2. Find Source Of The Bug,
// 3. Fix The Bug,
// 4. Prevent The Bug From Happening Again,
// So Below This, Is The Code With The Debugging Steps,
// Thats Why The Above Code Is Commented Out😅,
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) Fix:
        // value: Number(prompt('Degrees Celsius:')), // <-- We Use Number To Make It Only Return A Number,
        // And If You Try To Enter A Number, It Will Simply Show NaN,
        // (In The Future I Will Comment It Out Because Then Its Just Annoying),
        // (So I'll Set The Value To A Specific Number For Now)),
        value: 16,
    }

    // B) Find:
    console.log(measurement); // <-- You Can Choose To Just Log,
    // console.table(measurement.value); <-- Or Use This Table Form Instead,

    // console.log(measurement.value);
    // console.warn(measurement.value); <-- Just Wanted To Show You, That There Are
    // console.error(measurement.value); Other Forms Of Console Than Just console.log,
    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) Identify:
console.log(measureKelvin());
// Now We First Try To console.log The Value,
// So Now We Can See That The Bug Isnt With The Value,
// But, Then We Try To console.log The Whole Object,
// And We See, That The Value Is...A String?
// Well, Thats Because The Prompt Function Always Returns A String,
// Thats Why The Number That You Put In The Prompt Combined With The 273,
// You Can Also Try console.table, To Give You A Nice Info Table Of The Object,
// It Is Mostly Used In Large Objects,
// And Can Be Quite Helpful In Certain Situations,
// Now We Have Completed The 2nd Step Of Debugging,
// So, How Do We Fix It? Well You Probably Already Saw it Before Reading This😅,
// And Yes, We Use The Number Function To Make The Value A Number,
// So, That Completes Our 3rd Step Of Debugging,

// Now Lets Take It To The Next Level,
// We Will Now Use A Debugger From Google Chrome/Your Preferred Browser,
// So, In The Developer Tools, Where The Console Is,
// We Switch Tabs To One Called "Sources", Then Go To "script.js" On The Left,
// Then We Can See Our Code, And Here We Can Set Something Called Breakpoints,
// So Lets Put A BreakPoint, At Line 55,
// And We Set It By Clicking On In The Gap,
// Between The Number Line And The Left Panel,
// Now If We Reload The Page, The Execution Will Stop Right At The Breakpoint,
// So Basically Execution Will Freeze And Show Us What It Looks Like At That Time,
// Then, You Can See The Info Of The Values In The Scope Section On The Right,
// Now If It Doesnt Pause, Then There Will Be Nothing In The Scope,
// And If You Want To Fix It, You Can Search Online How To Do So,
// And To Resume It, You Can Either Remove The Breakpoint By Clicking On It,
// Or Press The Unpause Button On The Top Right Of The Sources Tab,
// You Can Research What The Rest Of The Buttons Do Later,




// Now, Lets Create A Bigger Bug Than Before, And Use The Debugger To Help Us,
// Also I Wont Explain Much After This, Because I've Explained It Mostly,
// And That You Should Try Thinking Yourself, I Will Though,
// Outline Certain Important Points During It,
// And I Will Simply Use The function That We Used In The Previous Subrepo,
// And Make Some Changes To It,
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        // debugger; The debugger Statement, Which Will Help You Immensely In the Future,
       if(curTemp > max) max = curTemp;
       if(curTemp < min) min = curTemp;
    }
console.log(max, min);
return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([4, 2, 8], [3, 1, 7]);
// A) IDENTIFY:
console.log(amplitudeBug);
// Here I've Changed The "New" To "Bug",
// Aswell As Changing The temps To 0,
// Because Saying That They Start From 0, Than Doing temps[0],
// Is Reasonable And You Might Think That It Would Work,
// Because We Had Started The Sum At 0 Before Aswell,
// So It Wouldnt Make Much Of A Difference,
// So Lets Pretend And Say, We Did It Like This Instead Of "temps[0]",
// And We Got A Bug In The Process, And Now, The min Value Is 0 And Is Staying 0,
// Now By Adding Breakpoints At The If Statements Of min And max,
// And By Analyzing It In the Debugger(Sources),
// We Can See, That Because We Set min To 0, It Will Always Be 0,
// Because It Is Already Less Than The Other Values,
// And Would Only Set If We Were Planning To Just Set The Future Values,
// Instead Of Seeing That It Was Lesser Or Larger Than The Next Values,
// You Get Me😅?
// Now This All Might Be Too Much And Takes Time To Do It,
// And Instead Of Doing It Manually, JavaScript,
// Has This "debugger" Statement, That We Can Use,
// And By Adding It, JavaScript Will Automatically Stop The Code,
// Right Where We Added The "debugger" Statement,
// So Its Basically Like A Breakpoint, But In Your Actual Code😄,

// Now This Was One Of The Longest Subrepo's I Have Ever Made,
// So I Hope You Learned Something New Today, Because Debugging,
// Is A Really Interesting Yet Confusing And Scary Part Of Coding And JavaScript😅,
// So Either Way, I Hope You Enjoyed This Subrepo,
// And Keep On Analyzing AndReviewing This To Help You And Clear Any Confusions,
// So, See You In the Next One, Happy Coding😄💻💙!