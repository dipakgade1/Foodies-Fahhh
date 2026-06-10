import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || 0;

  const [method, setMethod] = useState("gpay");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = async () => {

    if (amount <= 0) return;

    // Cash on Delivery
    if (method === "cod") {
      navigate("/success");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount })
      });

      const data = await res.json();

      if (data.success) {

        // simulate payment processing
        setTimeout(() => {

          setLoading(false);
          setSuccess(true);

          setTimeout(() => {
            navigate("/success");
          }, 1500);

        }, 2000);

      }

    } catch (error) {

      console.error("Payment error:", error);
      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">

        <h1 className="text-2xl font-bold mb-4">
          Payment
        </h1>

        {/* Amount */}
        <div className="bg-blue-50 p-4 rounded-lg flex justify-between mb-4">
          <span className="font-semibold">Total Amount</span>
          <span className="font-bold text-blue-600">₹{amount}</span>
        </div>

        {/* Payment Processing Screen */}
        {loading && (
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-yellow-500"></div>
            <p className="font-semibold">Processing ₹{amount} Payment...</p>
          </div>
        )}

        {/* Payment Success Screen */}
        {success && (
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="text-green-500 text-4xl">✔</div>
            <p className="font-bold text-lg">Payment Successful</p>
            <p className="text-gray-500">₹{amount} paid successfully</p>
          </div>
        )}

        {!loading && !success && (
          <>
            {/* UPI */}
            <div className="border rounded-lg p-4 mb-3">

              <h2 className="font-semibold mb-3">UPI</h2>

              <label className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  checked={method === "gpay"}
                  onChange={() => setMethod("gpay")}
                />
                Google Pay
              </label>

              <label className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  checked={method === "phonepe"}
                  onChange={() => setMethod("phonepe")}
                />
                PhonePe
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "paytm"}
                  onChange={() => setMethod("paytm")}
                />
                Paytm
              </label>

            </div>

            {/* Card */}
            <div className="border rounded-lg p-4 mb-3">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                />
                Credit / Debit Card
              </label>

              <p className="text-sm text-gray-500">
                Secure demo card payment
              </p>

            </div>

            {/* COD */}
            <div className="border rounded-lg p-4 mb-4">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                />
                Cash on Delivery
              </label>

            </div>

            {/* Pay Button */}

            <button
              onClick={handlePayment}
              className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-bold"
            >
              Pay ₹{amount}
            </button>
          </>
        )}

      </div>

    </div>

  );
}

export default Payment;          