// leetcode #150

function evalRPN(tokens: string[]): number {
  const stack = [];

  const operators = {
    "+": (a: number, b: number): number => a + b,
    "-": (a: number, b: number): number => a - b,
    "*": (a: number, b: number): number => a * b,
    "/": (a: number, b: number): number => Math.trunc(a / b),
  }

  while (tokens.length) {
    const lastCharacter = tokens.shift();

    // handle operands
    if (!operators[lastCharacter]) {
      stack.push(+lastCharacter);
      continue;
    }

    // handle operator; perform operation on last 2 values from stack
    const n2 = stack.pop(); // last value
    const n1 = stack.pop(); // second-last value

    stack.push(operators[lastCharacter](n1, n2));
  }

  return stack[0]
};