function rand(min = 1000, max = 5000) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

function f1(callback) {
  setTimeout(() => {
    console.log('f1');

    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(() => {
    console.log('f2');

    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(() => {
    console.log('f3');

    if (callback) callback();
  }, rand());
}

// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log('Hello world!');
//     });
//   });
// });

f1(fnCallback);

function fnCallback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Hello world!!!');
}
