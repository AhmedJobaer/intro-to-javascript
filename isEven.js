function isEven(number) {
    const rem = number % 2;

    if (rem == 0) {
        return true;
    }
    return false;
}

const num = isEven(9);
const num1 = isEven(8);
console.log(num);
console.log(num1);