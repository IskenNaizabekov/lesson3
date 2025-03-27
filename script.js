var orders = [
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

var totalRevenue = 0;
var maxOrderAmount = 0;
var maxOrderCustomer = "";

for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var orderTotal = 0;

    for (var j = 0; j < order.items.length; j++) {
        var item = order.items[j];
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
