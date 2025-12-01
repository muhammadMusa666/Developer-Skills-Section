// Hi There, This Is The Answer For The Challenge,
// And Because I Used AI, It Is Very Long😅,
// I Also Had To Tell The AI To Update Many Things,
// Also, Your Answer Will Probably Wont Match Mine,
// Because Your AI Response Could Be Different, Even If Both Work Fine,
// So Dont Worry About It!

function analyzeWorkWeek(dailyHours) {
  // Require exactly 7 days
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error("analyzeWorkWeek requires an array of exactly 7 daily hour values.");
  }

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // 1. Total hours worked
  const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

  // 2. Average daily hours
  const averageHours = totalHours / dailyHours.length;

  // 3. Day with most hours → weekday name
  const maxHours = Math.max(...dailyHours);
  const maxIndex = dailyHours.indexOf(maxHours);
  const dayWithMostHours = weekdays[maxIndex];

  // 4. Days worked (hours > 0)
  const daysWorked = dailyHours.filter(h => h > 0).length;

  // 5. Full-time benchmark (35 hours)
  const isFullTime = totalHours >= 35;

  return {
    totalHours: Number(totalHours.toFixed(2)),
    averageHours: Number(averageHours.toFixed(2)),
    dayWithMostHours,
    daysWorked,
    isFullTime
  };
}
const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(data));

// This Code Has Many Things We Havent Learned Yet,
// Thats Why I Was Asking You To Use AI,
// But Somehow, If You Did It Without AI?
// Then Your Already Way Ahead Of This Series,
// And Dont Need To Do This As Your Already Above Average😄.