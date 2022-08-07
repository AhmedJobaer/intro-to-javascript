/*
1. chair ---> 3 cft
2. table ---> 10 cft
3. bed ---> 50 cft
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChar = 3;
    const perTable = 10;
    const perbed = 50;

    const charWood = perChar * chairQuantity;
    const tableWood = perTable * tableQuantity;
    const bedWood = perbed * bedQuantity;

    const totalWood = charWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);