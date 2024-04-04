import express from 'express';
import adminRoutes from './admin.routes';

const adminsRoutes = express.Router();

adminsRoutes.use('/admin', adminRoutes);

export default adminsRoutes;