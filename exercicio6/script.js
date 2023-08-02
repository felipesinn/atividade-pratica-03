

for (let i = 30; i >= 1; i--) {
  let isPrime = true;

  if (i > 1) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false;
  }

  if (isPrime) {
    document.write(`[${i}]`);
  } else {
    document.write(i);
  }
}
