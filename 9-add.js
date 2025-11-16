const arg = process.argv[2];
const arg1 = process.argv[3];
const num1 = parseInt(arg, 10);
const num2 = parseInt(arg1, 10);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(num1, num2));
if (isNaN(num1) && isNaN(num2)) {
    console.log("NaN");
}
else if (arg === undefined && arg1 === undefined) {
    console.log("NaN");
}