function main() {
    if (process.argv.length < 3) {
        console.log("Not a number");
        return;
    }
    
    const input = process.argv[2];
    const number = parseInt(input, 10);
    
    if (!isNaN(number)) {
        console.log(`My number: ${number}`);
    } else {
        console.log("Not a number");
    }
}

main();
