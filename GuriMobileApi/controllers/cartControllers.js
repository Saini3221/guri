const Cart = require('../model/cartModel'); // Adjust the path as necessary

// Helper function to calculate cart total
const calculateCartTotal = (items) => {
    return items.reduce((total, item) => {
        const itemTotal = (item.price || 0) * (item.quantity || 1); // Handle undefined values
        return total + itemTotal;
    }, 0);
};


// 1. Add item to cart

const addItemToCart = async (req, res) => {
    try{
        let data = req.body;
        let newCart = await new Cart(data).save();
        res.send(newCart)

    }catch(error){
        res.status(500).send({message: "An error occurred", error})
    }

}



module.exports = {
calculateCartTotal,
addItemToCart
};
