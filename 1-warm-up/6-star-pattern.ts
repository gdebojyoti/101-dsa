/*
n x n pattern
* * * 
* * * 
* * * 
*/

function generateStarPattern (n: number) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// test cases

generateStarPattern(4);


/*
increasing pattern
* 
* * 
* * * 
*/

function generateIncreasingStarPattern (n: number) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// test cases

generateIncreasingStarPattern(4);


/*
increasing pattern with numbers
1 
1 2 
1 2 3 
*/

function generateIncreasingNumberPattern (n: number) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 1; j <= i + 1; j++) {
      row += `${j} `;
    }
    console.log(row);
  }
}

// test cases

generateIncreasingNumberPattern(5);

// more...
const n = 5;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 1; j <= i + 1; j++) {
    row += `${j % 2} `;
  }

  console.log(row);
}