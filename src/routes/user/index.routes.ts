import express from 'express';
import userRoutes from './user.routes';
import cartRoutes from './cart.routes';

const usersRoutes = express.Router();

usersRoutes.use('/user', userRoutes);
usersRoutes.use('/cart', cartRoutes);

export default usersRoutes;