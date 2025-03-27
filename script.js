const orders = [
    {
        id: 1,
        customer: "Jhon",
        items: [
            { name: "Ноутбук", price: 50000, quantity: 1 },
            { name: "Мышь", price: 1500, quantity: 2 }
        ]
    },
    {
        id: 2,
        customer: "Alan",
        items: [
            { name: "Телефон", price: 30000, quantity: 1 },
            { name: "Чехол", price: 1000, quantity: 3 }
        ]
    },
    {
        id: 3,
        customer: "Jane",
        items: [
            { name: "Клавиатура", price: 2500, quantity: 1 },
            { name: "Монитор", price: 12000, quantity: 1 }
        ]
    }
];

let totalRevenue = 0;
let maxOrderAmount = 0;
let maxOrderCustomer = "";

for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let orderTotal = 0;

    for (let j = 0; j < order.items.length; j++) {
        let item = order.items[j];
        orderTotal += item.price * item.quantity;
    }

    console.log(`Заказ #${order.id} (${order.customer}): ${orderTotal} сом`);

    totalRevenue += orderTotal;

    if (orderTotal > maxOrderAmount) {
        maxOrderAmount = orderTotal;
        maxOrderCustomer = order.customer;
    }
}

console.log(`Общий доход магазина: ${totalRevenue} сом`);
console.log(`Самый дорогой заказ сделал ${maxOrderCustomer} на сумму ${maxOrderAmount} сом`);
