const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = "";
let i = 0;

while (i < messages.length) {
  output += messages[i] + "\n";
  i++;
}

console.log(output.trim());
