function random(min, max) {
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return aleatorio;
}

let rand = 10;

while(rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}

console.log('################################');

do {
    rand = random(1, 50);
    console.log('do while', rand);

} while(rand !== 10);