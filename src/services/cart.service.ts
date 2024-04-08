import cartModel from "../model/cart.model";

export default class CartService {
    // ADD TO CART
    addToCart = async (body: any) => {
        return await cartModel.create(body);
    }

    // GET ALL CART
    getAllCart = async (body: any) => {
        return await cartModel.find(body);
    }

    // GET SPECIFIC CART
    getCart = async (body: any) => {
        return await cartModel.findOne(body);
    }

    // GET SPECIFIC CART BY ID
    getCartById = async (body: any) => {
        return await cartModel.findById(body);
    }

    // UPDATE CART
    updateCart = async (id: string, body: any) => {
        return await cartModel.findByIdAndUpdate(id, {$set: body }, { new: true });
    }

    // DELETE CART
    deleteCart = async (id: string) => {
        return await cartModel.findByIdAndDelete(id);
    }
}

