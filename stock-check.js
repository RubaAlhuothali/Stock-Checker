let check = prompt('whar are you looking for'); //Take the product from user
let InStock = {  //object for items in stock
    stock: ['headphones','iphone','keyboard','screen'],
    ifStock: function () {   //fucntion to check if the item from the user is in stock or not
        if (this.stock.includes(check)) {
            return 'It is in stock';
        }
        else {
           return 'Sorry, not in stock';
        }
    }

}
console.log(InStock.ifStock()) ;  