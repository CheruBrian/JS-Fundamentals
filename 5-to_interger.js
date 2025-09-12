const arg = process.argv{2}

//convert the argument to an integer
const num = parseInt(arg, 10);

//check if the conversion was successful
if (!isNaN(num)) {
console.log(`My number: ${num}`);
}
else {
console.log("Not a number");
}
