console.log('Exemplo 1');
console.log();

let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];

const nums3 = nums1.concat(nums2, [7, 8, 9], 'Luiz');
console.log(nums3);

console.log();
console.log('Exemplo 2');
console.log();

const nome1 = ['Paulo', 'André', 'John'];
const nome2 = ['Joana', 'Antõnia', 'Paula'];

const arrayNomes = [...nome1, ...nome2, ...[7, 8, 9]];
console.log(arrayNomes);
