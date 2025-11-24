// Welcome To The Third Section Of This, Well Series You Can Call It😅,
// I Hope You Completed The Last 2 Sections Before Coming Here,
// And Again, Good Work Reaching Here, It Was Not Easy To Do So,
// But Anyways, Lets Begin With Our First Subrepo,
// Learning About Prettier And Explaining Its Uses And Functions,
// Remember, We're Gonna Use Strict Mode In All Scripts Now!
'use strict';
// Today, We Will Be Setting Up An Extension Called Prettier,
// And To Do So, You Basically Just Go To The Extensions(Ctrl+Shift+X),
// Search Up Prettier, Install It, And It Should Be Enabled,
// Then Go To Your Settings(Ctrl+,), Then Search Default Formatter,
// And Set It To Prettier - Code Formatter,
// Then Search Format On Save, And Enable That Option As Well,
// Now, Whenever You Save Your Code(CTRL+S),
// It Will Automatically Format It For You, Making Your Code Look Neater!
// Now Some People Prefer Different Formatting Styles Or More Freedom In Their Code,
// Because Prettier Forces Its Opinions And Styles Without Our Consent,
// So For Example, If Write This Line Of Code On Line 24,
// It Will Delete The Extra Lines At Put It At Its Own Opinionated Format,
const x = 23; // <-- Try Moving This Code To Line 24 Then Save, See What Happens,
// Sometimes, It Can Affect Small Things Aswell,
// Like Putting Double Quotes Instead Of Single Quotes:
const variable = 'Hello World'; // <-- Try Putting The String In Single Quotes, Then Save,
// And For Me, It Is A Bit Annoying, But Overall, It Is A Good Extension To Have,
// As It Keeps Your Code Neat And Clean Automatically,
// Another Example Is This if Statement:
if (x > 10) {
  // <-- Try Not Adding A Space Before The Parenthesis, Then Save,
  console.log('X is greater than 10'); // <-- Try Moving The Last Curly Brace To A Line Below, Then Save,
}
// And As You Can See, It Automatically Formats It For You In Its Own Opinion,
// And If You Really Want To Customize Prettier,
// You Can Create A Prettier Configuration File,
// By Creating A File Named .prettierrc In This Folder From VS Code,
// But I Have Already Created One For You, So You Can Check It Out,
// For Now I Only Changed The Single Quote Thing,
// So That It Uses Single Quotes Instead Of Double Quotes,
// But If You Want To Change It More, You Can Visit The Prettier Documentation,
// Here Is The Link: https://prettier.io/docs/en/configuration.html
// Which Will Show You All The Options You Can Change In Prettier And How To Do So,

// Now Another Thing That Prettier Does By Default,
// Is something In Arrow Functions, As Shown Below:
const calcAge = birthYear => 2037 - birthYear; // <-- Try Adding Parenthesis Around The Parameter, Then Save,
// As You Can See, It Automatically Adds Parenthesis Around The Parameter,
// And I Personally Don't Like That, So,
// I Also Changed It In The Prettier Config File,

// Now, I Want To Show You Something Else,
// Which Is To, Basically Automate Something Very Boring,
// And That Is, Writing console.log😅,
// And In VS Code, You Can Configure A Snippet To Do That For You,
// So Go To File > Preferences > Configure Snippets,
// Then Make A New Global Snippet File, After Naming It Whatever You Want,
// Now, We Want A Snippet That Automatically Writes console.log For Us,
// And Luckily For Us, There Is An Example Snippet Already There,
// Which Basically Does Just That,

// Now That I've Shown It To You In The muhammad.code-snippets File,
// We Can Now Use It, So Try Writing cl, And Then Press Enter Or Tab,
// And It Should Automatically Write console.log() For You,
// And The Cursor Will Be Placed Inside The Parenthesis,
// Making It Very Easy To Use, And You Can Create Your Own Snippets Aswell,
// By Following The Same Syntax As The Example Snippet,
// Just Make Sure To Change The Prefix, Body, And Description To Your Liking,
console.log();
// Now In The Future, I Will No Longer Type console.log Manually And Instead Use "cl",
// So Anyways, That Is It For This Subrepo, Which Is The First Of This Section,
// So I Hope You Enjoy Learning Something New With Me Everyday,
// And I Hope You Can Manage It, But Anyways, Happy Coding🚀!
