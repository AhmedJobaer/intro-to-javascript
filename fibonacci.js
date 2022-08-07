const fibo = [0, 1];
for (i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

var a = 2;
var b = 3;
if (a < b) {
    console.log('Hello');
}