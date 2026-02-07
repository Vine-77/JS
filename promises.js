const {checkInventory} = require('./library.js');

const order = [['sunglasses', 200], ['basketballs', 30]];

checkInventory(order)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })