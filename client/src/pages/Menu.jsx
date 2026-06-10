function Menu({ search, addToCart }) {

  const foods = [
    { id: 1, name: "Pizza", category: "Fast Food", price: 299, image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" },
    { id: 2, name: "Burger", category: "Fast Food", price: 199, image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg" },
    { id: 3, name: "Pasta", category: "Italian", price: 249, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
    { id: 4, name: "Sandwich", category: "Fast Food", price: 149, image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg" },
    { id: 5, name: "Fried Chicken", category: "Chicken", price: 349, image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
    { id: 6, name: "Noodles", category: "Chinese", price: 179, image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg" },
    { id: 7, name: "Steak", category: "Grill", price: 499, image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg" },
    { id: 8, name: "Salad", category: "Healthy", price: 129, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
    { id: 9, name: "French Fries", category: "Snacks", price: 99, image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg" },
    { id: 10, name: "Tacos", category: "Mexican", price: 189, image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
    { id: 11, name: "Hot Dog", category: "Fast Food", price: 149, image: "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg" },
    { id: 12, name: "Sushi", category: "Japanese", price: 399, image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg" },
    { id: 13, name: "Paneer Tikka", category: "Indian", price: 279, image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg" },
    { id: 14, name: "Biryani", category: "Indian", price: 329, image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
    { id: 15, name: "Ice Cream", category: "Dessert", price: 119, image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg" },
    { id: 16, name: "Chocolate Cake", category: "Dessert", price: 249, image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
    { id: 17, name: "Chicken", category: "Chicken", price: 139, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80" },
    { id: 18, name: "Spring Rolls", category: "Chinese", price: 169, image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg" },
    { id: 19, name: "Grilled Fish", category: "Seafood", price: 459, image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg" },
    { id: 20, name: "Milkshake", category: "Drinks", price: 159, image: "https://images.pexels.com/photos/6544390/pexels-photo-6544390.jpeg" },
  ];

  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen pt-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')",
      }}
    >
      <div className="min-h-screen bg-black/60 p-6">

        <h1 className="text-4xl font-bold mb-10 text-center text-white">
          Our Menu
        </h1>

        {filteredFoods.length === 0 ? (
          <p className="text-center text-red-400 text-lg">
            No items found
          </p>
        ) : (

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {filteredFoods.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-4 
                transform transition duration-300 
                hover:scale-105 hover:shadow-2xl 
                hover:bg-orange-50"
              >

                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <h2 className="text-lg font-semibold mt-3">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="mt-1 font-bold text-orange-600">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
                >
                  🛒 Add to Cart
                </button>

              </div>

            ))}

          </div>

        )}
      </div>
    </div>
  );
}

export default Menu;