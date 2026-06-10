import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      
    {/* Hero Section */}
<div
  className="h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
  }}
>
  <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl text-center shadow-xl max-w-xl">
    
    <h1 className="text-5xl font-bold text-gray-800 mb-4">
      Welcome to Foodies Fahhh
    </h1>

    <p className="text-gray-600 text-lg mb-6">
      Fresh • Delicious • Fast Delivery
    </p>

  </div>
</div>

      {/* Food Items Section */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Special Items
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">
          
          {/* Item 1 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Pizza" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Pizza</h3>
            <p className="text-gray-600">Rs.199</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349" alt="Burger" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Burger</h3>
            <p className="text-gray-600">Rs.149</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352" alt="Pasta" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Pasta</h3>
            <p className="text-gray-600">Rs.99</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af" alt="Sandwich" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Sandwich</h3>
            <p className="text-gray-600">Rs.69</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 5 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1562967916-eb82221dfb92" alt="Fried Chicken" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Fried Chicken</h3>
            <p className="text-gray-600">Rs.199</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 6 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246" alt="Noodles" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Noodles</h3>
            <p className="text-gray-600">Rs.49</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 7 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e" alt="Steak" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Steak</h3>
            <p className="text-gray-600">Rs.39</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 8 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Salad" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Salad</h3>
            <p className="text-gray-600">Rs.29</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
          </div>

          {/* Item 9 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a" alt="Ice Cream" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Ice Cream</h3>
            <p className="text-gray-600">Rs.15</p>
            <Link to="/order">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Order Now
              </button>
            </Link>
            
          </div>

        </div>


              {/* Customer Reviews Section */}
      <div className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          {/* Customer 1 */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">
            <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600 mb-4">
              The food was absolutely delicious and delivered very fast!
            </p>
            <h4 className="font-semibold text-lg">Rahul Sharma</h4>
          </div>

          {/* Customer 2 */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">
            <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600 mb-4">
              Best burger and pizza I’ve ever tasted. Highly recommended!
            </p>
            <h4 className="font-semibold text-lg">Priya Mehta</h4>
          </div>

          {/* Customer 3 */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">
            <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600 mb-4">
              Amazing service, clean packaging and great taste!
            </p>
            <h4 className="font-semibold text-lg">Arjun Patel</h4>
          </div>

        </div>
      </div>


      </div>

      <Footer />

    </div>
  
  );
}

export default Home;