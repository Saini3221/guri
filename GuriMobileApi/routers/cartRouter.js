const express = require('express');
const router = express.Router();
const {
    addItemToCart,
    getCart,
    updateItemQuantity,
    removeItemFromCart
} = require('../Controllers/cartControllers'); // Adjust the path as necessary

// 1. Add item to cart
router.post('/', addItemToCart);

// 2. Get user's cart
router.get('/:userId', getCart);

// 3. Update item quantity
router.put('/:userId/item', updateItemQuantity);

// 4. Remove item from cart
router.delete('/:userId/item/:productId', removeItemFromCart);

module.exports = router;
