let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A


// let varTemp = varA
// varA = varB
// varB = varC
// varC = varTemp

// Outra maneira de solucionar

[varA, varB, varC] = [varB, varC, varA]


console.log(varA);
console.log(varB);
console.log(varC);

