/*
1. less than 100, per ticket price: 100
2. more than 200, first 100 ticket price is 100 and other 90.
3. if you buy more than 200,
    first 100 ---> 100TK
    101-200 ---> 90TK
    201-300 ---> 70TK
*/

function ticketPrice(tickerQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (tickerQuantity <= 100) {
        const price = first100Rate * tickerQuantity;
        return price;
    }
    else if (tickerQuantity <= 200) {
        const first100Price = first100Rate * 100;
        const restTicketQuntity = tickerQuantity - 100;
        const restprice = restTicketQuntity * second100Rate;
        const totalPrice = first100Price + restprice;
        return totalPrice;
    }
    else {
        const first100Price = first100Rate * 100;
        const second100Price = second100Rate * 100;
        const restTicketQuntity = tickerQuantity - 200;
        const restTicketPrice = restTicketQuntity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }

}

const price = ticketPrice(250);
console.log(price);
