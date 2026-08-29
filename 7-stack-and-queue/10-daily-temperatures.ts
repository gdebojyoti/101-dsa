// leetcode #739

function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = [];
  const stack: number[][] = []; // sample element: [temp, index]

  for (let i = temperatures.length - 1; i >= 0; i--) {
    const current = temperatures[i];

    // find the top most temperature from the stack that is higher than current
    while (stack.length) {
      const top = stack[stack.length - 1];

      // if higher temp is found, add day difference to answer
      if (top[0] > current) {
        answer.push(top[1] - i);
        break;
      }

      stack.pop();
    }

    // if no higher temps were found, add 0 to answer
    if (!stack.length) {
      answer.push(0);
    }

    // add current day details to stack
    stack.push([current, i]);
  }

  return answer.reverse();
};