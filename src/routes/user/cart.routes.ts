import express from "express";
const cartRotes = express.Router();
import { userVerifyToken } from "../../helpers/userVerifyToken";

import {
    addToCart,
    getAllCart,
    getCart,
    updateCart,
    deleteCart
} from "../../controller/user/cart.controller";

// ADD CART
cartRotes.post('/add-Cart', userVerifyToken, addToCart);

// GET ALL CART
cartRotes.get('/get-All-Cart', userVerifyToken, getAllCart);

// GET SPECIFIC CART
cartRotes.get('/get-Cart', userVerifyToken, getCart);

// UPDATE CART
cartRotes.put('/update-cart', userVerifyToken, updateCart);

// DELETE CART
cartRotes.delete('/delete-Cart', userVerifyToken, deleteCart);

export default cartRotes;