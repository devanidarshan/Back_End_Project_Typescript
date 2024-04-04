import express from "express";

import {
  registerAdmin,
  loginAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} from "../../controller/admin/admin.controller";

const adminRoutes = express.Router();

// REGISTER ADMIN
adminRoutes.post("/register-Admin", registerAdmin);

// LOGIN ADMIN
adminRoutes.post("/login-Admin", loginAdmin);

// GET ALL ADMIN
adminRoutes.get("/get-All-Admin", getAllAdmin);

// GET ADMIN
adminRoutes.get("/get-Admin", getAdmin);

// UPDATE ADMIN
adminRoutes.put("/update-Admin", updateAdmin);

// DELETE ADMIN
adminRoutes.delete("/delete-Admin", deleteAdmin);

export default adminRoutes;
