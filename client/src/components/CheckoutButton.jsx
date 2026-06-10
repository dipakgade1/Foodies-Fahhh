import { useState } from "react";
import axios from "axios";

const CheckoutButton = ({ amount }) => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {

    if (!amount || amount <= 0) {
      setError("Cart is empty");
      return;
    }

    try {

      setLoading(true);
      setError("");

      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount }
      );

      if (data.success) {

        // simulate payment delay
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 2000);

      } else {

        setLoading(false);
        setError("Payment failed. Please try again.");

      }

    } catch (err) {

      console.error("Payment error:", err);

      setLoading(false);
      setError("Server error. Please try later.");

    }

  };

  // Loading UI
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4">

        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-500"></div>

        <p className="text-lg font-semibold">
          Processing ₹{amount} Payment...
        </p>

      </div>
    );
  }

  // Success UI
  if (success) {
    return (
      <div className="flex flex-col items-center gap-3">

        <div className="text-green-500 text-4xl">✔</div>

        <h2 className="text-xl font-bold">
          Payment Successful
        </h2>

        <p className="text-gray-500">
          ₹{amount} paid successfully
        </p>

      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded">
          {error}
        </div>
      )}

      <button
        onClick={handlePayment}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg w-full"
      >
        Pay ₹{amount}
      </button>

    </div>
  );
};

export default CheckoutButton;