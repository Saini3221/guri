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
    const { userId, items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "Items array is empty or not provided" });
    }

    try {
        let cart = await Cart.findOne({ userId });
        console.log("Fetched Cart:", cart);

        if (!cart) {
            cart = new Cart({ userId, items, cartTotal: calculateCartTotal(items) });
            console.log("New Cart Created:", cart);
        } else {
            items.forEach(item => {
                const existingItem = cart.items.find(i => i.productId.equals(item.productId));
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                    existingItem.totalPrice = existingItem.price * existingItem.quantity;
                } else {
                    item.totalPrice = item.price * item.quantity;
                    cart.items.push(item);
                }
            });
            cart.cartTotal = calculateCartTotal(cart.items);
            console.log("Updated Cart with Items:", cart);
        }

        await cart.save();
        console.log("Cart Saved Successfully:", cart);
        res.status(201).json(cart);
    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({ error: error.message });
    }
};



// 2. Get user's cart
const getCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Update item quantity
const updateItemQuantity = async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(i => i.productId.equals(productId));
        if (item) {
            item.quantity = quantity; // Update quantity
            item.totalPrice = item.price * quantity; // Update total price
            cart.cartTotal = calculateCartTotal(cart.items); // Recalculate cart total
            await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 4. Remove item from cart
const removeItemFromCart = async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(i => !i.productId.equals(productId)); // Remove item
        cart.cartTotal = calculateCartTotal(cart.items); // Recalculate cart total
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Exporting the controller functions
module.exports = {
    addItemToCart,
    getCart,
    updateItemQuantity,
    removeItemFromCart
};
