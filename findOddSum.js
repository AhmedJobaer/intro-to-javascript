function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum += elements;
    }
    return sum;
}

function getOddSumOfArray(numbers) {
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements % 2 != 0) {
            console.log(index, elements)
            oddNumber.push(elements);
        }
    }
    return oddNumber;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const myOddNum = getOddSumOfArray(myNumbers);
const oddSum = getSumOfAnArray(myOddNum)
console.log(oddSum);
