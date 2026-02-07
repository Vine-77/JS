const inventory = {
    sunglasses : 3000,
    basketballs : 500
};
const checkInventory = (order) => 
    {
        return new Promise((resolve, reject) => {
        setTimeout(() => 
            {
                let inStock = order.every(item => inventory[item[0]] >= item[1]);
                if (inStock) {
                    resolve('Your order has been successfully pressed! And thanks for using our services!');
                }
                else {
                    reject('We are sorry. Your order could not be completed because some items are sold out or exceed the stock!');
                }
            }, 2000);
        }
    );
};
 
module.exports = {checkInventory};
