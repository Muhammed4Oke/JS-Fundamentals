const arg = process.argv[2];       
const num = parseInt(arg, 10);         

if (!isNaN(num) && num > 0) {
    Array.from({ length: num }).forEach(() => {
        console.log("C is fun");       
    });
} else {
    console.log('Missing number of occurrences');
}
