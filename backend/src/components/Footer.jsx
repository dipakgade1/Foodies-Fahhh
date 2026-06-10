function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="grid md:grid-cols-3 gap-8 px-10">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Foodies</h3>
          <p className="text-gray-400">
            We serve fresh and delicious food with fast delivery.
            Your happiness is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">📍 Amravati, India</p>
          <p className="text-gray-400">📞 +91 9876543210</p>
          <p className="text-gray-400">✉ foodies@email.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © 2026 Foodies. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;