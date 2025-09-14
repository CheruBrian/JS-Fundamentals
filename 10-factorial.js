#node/bin

const num = parseInt(process.agrv[2]);

funtion factorial(n) {
if (isNaN(n) || n === 0) {
return 1;
}
return n * factorial(n - 1);
}

console.log(factorial(num));
