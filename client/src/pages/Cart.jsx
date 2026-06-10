import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Go to Payment Page
  const handleCheckout = () => {

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    // Save cart in localStorage so payment page can access it
    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/payment");
  };

  // Increase Quantity
  const increaseQty = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  };

  // Decrease Quantity
  const decreaseQty = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);
  };

  // Remove Item
  const removeItem = (id) => {

    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-start py-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=7680&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-[90%] max-w-3xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (

          <p className="text-center text-gray-600">
            Your cart is empty
          </p>

        ) : (

          <>
            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">

                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-600">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        ➖
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        ➕
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 font-semibold hover:text-red-700"
                  >
                    🗑 Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">

              <h2 className="text-xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              <button
               onClick={() => navigate("/payment", { state: { amount: totalPrice } })}
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-bold shadow"
              >
                🛒 Checkout
              </button>

            </div>

          </>

        )}

      </div>
    </div>
  );
}

export default Cart;