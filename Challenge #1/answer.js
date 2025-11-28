// Hi There, I Hope You Solved it Yourself,
// Or Just Tried At Least😊, But Anyways,
// Here Is My Solution, According To My Style, So Dont Worry If Yours Werent Same!,
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days... `;
    }
    console.log('...' + str);
};

printForecast(data1);
printForecast(data2);