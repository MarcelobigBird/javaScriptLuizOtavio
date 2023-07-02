function recursiva(max) {
  if (max >= 10) return;
  // eslint-disable-next-line
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
