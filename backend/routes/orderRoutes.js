import express from "express";
import Order from "../models/Order.js";

const router = express.Router();


// ✅ GET all orders
router.get("/", async (req, res) => {

  try {

    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching orders",
      error: error.message
    });

  }

});


// ✅ GET single order by ID
router.get("/:id", async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching order",
      error: error.message
    });

  }

});


// ✅ CREATE new order
router.post("/", async (req, res) => {

  try {

    const order = new Order(req.body);

    const savedOrder = await order.save();

    res.status(201).json({
      message: "Order created successfully",
      order: savedOrder
    });

  } catch (error) {

    res.status(500).json({
      message: "Error saving order",
      error: error.message
    });

  }

});


// ✅ DELETE order
router.delete("/:id", async (req, res) => {

  try {

    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error deleting order",
      error: error.message
    });

  }

});

export default router;