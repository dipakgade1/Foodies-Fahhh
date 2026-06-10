import express from "express";

const router = express.Router();

/*
  Create Demo Order
  POST /api/payment/create-order
*/
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount",
      });
    }

    // Create Fake Order (Demo Payment)
    const order = {
      id: "demo_order_" + Date.now(),
      amount: amount * 100, // internal amount in paise
      currency: "INR",
      status: "created",
    };

    // Display amount in ₹ for logs / frontend
    const displayAmount = order.amount / 100;

    console.log("✅ Demo Order Created:", { ...order, displayAmount });

    res.status(200).json({
      success: true,
      order,
      displayAmount, // send displayAmount to frontend
    });
  } catch (error) {
    console.error("❌ Demo Payment Error:", error);
    res.status(500).json({
      success: false,
      message: "Demo payment failed",
    });
  }
});

/*
  Verify Demo Payment
  POST /api/payment/verify
*/
router.post("/verify", (req, res) => {
  // Always success for demo
  res.json({
    success: true,
    message: "Payment Successful (Demo)",
  });
});

/*
  Test route
*/
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Demo Payment API working",
  });
});

export default router;