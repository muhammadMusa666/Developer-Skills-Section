// Remember, We're Gonna Use Strict Mode In All Scripts Now!
"use strict";
// Today, We Will Be Learning About Another Extension,
// And Just So You Know, This Extension Is Very Popular Among Developers,
// Because No Real Developer Manually Reloads Their Browser Everytime They Make A Change,
// Or Open A File In The Browser To See Their Work,
// And Most Developers Use An Extension Called Live Server,
// And As The Name Suggests, It Is A Live Server For Your Projects,
// By The Way, Up Until This Point I Have Been Using Live Server,
// But You Might Not Be Using It While Learning, So This Is To Make Your Life Easier,
// And We Can Actually Use Live Server In 2 Different Ways,
// First Way Which Is The Easier Way, Is By Installing The Extension,
// And Second, Is By Using Node.js And A So Called NPM Package,
// And We Will First Start With The First Way And Easier Way,
// To Install Live Server, Go To The Extensions(Ctrl+Shift+X),
// Then Search For Live Server By Ritwick Dey, And Install It,
// Then It Should Be Enabled Automatically Once Installed,
// Then Down At The Bottom Right Corner Of VS Code,
// You Should See A Go Live Button, Click On It,
// And It Should Open Your Default Browser With Your Code,
// So An Easier Way To Open Your Code In The Browser,
// And It Also Automatically Reloads The Browser When You Make A Change,
// So You Can Either Hit Ctrl+S To Save Your Code, Or Have Auto Save Enabled,
// But Just To Be Sure, I Usually Hit Ctrl+S Manually,
// Now Lets Add Some JavaScript Code To See It In Action,

const x = "16";
if (x === 16) console.log(16);
const calcAge = (birthYear) => 2032 - birthYear;
console.log(calcAge(1991));

// Now This Was Just The Simple, Easy Way To Use Live Server,
// And Now Begins The Hard Part, By Using Node.js And NPM,
// Which Is Msotly Used For More Proffesional Workflows,
// And It Is A JavaScript Runtime That We Can Install On Our Working Device,
// Disclaimer: If You Are Fine With Just Using Live Server The Easier Way,
// Which Is This Way, So Without Any Complexities, Confusion Or Difficulties,
// Then You Can Skip The Part After This,

// So Go And Search On Your Browser Node.js,
// Then Go To The Official Website Nodejs.org,
// After That, Go To The Downloads Tab,
// And The LTS Version Which Is Recommended For Most Users,
// And Just Download It According To Your Operating System,
// And If Anything Goes Wrong, You Can Just Keep Using The First And Easier Way,
// And If Both Can't Work For Some Reason, You Can Use The Manual Way,
// Or Just Try To Fix It Yourself Somehow, But Please, Dont Get Stuck On This,
// Now, After You Have Successfully Installed Node.js,
// It Will Become Available As A Program, In Your Terminal,
// So Lets Use It By Opening The Terminal In VS Code(Ctrl+`),
// And If Your New To Terminal, Its Basically,
// How We Give Instructions To Our Working Device,
// And We Will Learn More About The Terminal Later In The Future,
// So Dont Worry About It For Now, And Just Type The Things Will Tell You,
// So First Type: node -v, Then Hit Enter/Return,
// Then A Number Will Show, It Doesnt Matter What The Number Says,
// If The Number Show's Meaning You Have Successfully Downloaded Node.js
// And Then You Can Now Write npm install live-server -g
// And If Your On Mac, You Need To Write sudo npm install live-server -g
// Then You Will Have To Enter Your Password, Hit Enter After That,
// Then It Starts Doing Something, And Ignore Whatever It Says During The Process,
// Now Just Clear The Terminal Using Ctrl+k, Or Command+k On Mac,
// Then Type live-server, And Hit Enter/Return,
// And It Should Open Your Default Browser With Your Code,
// Now You Can Ctrl+S, And Save Your Code, And It Will Automatically Reload,
// And Ignore The Error That Shows Up, And To Remove It, Just Refresh The Page Or Ctrl+S Again,
// Now You Can Close The Terminal, And It Will Still Work,
// By The Way, You Have To "Close" It And Not "Kill" The Terminal
// Anyways This Was It For Today, See You In The Next Subrepo, Happy Coding🫡!
