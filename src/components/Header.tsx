import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf, Home, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <Leaf className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              Paradise Nursery
            </span>
          </Link>

          <nav className="flex items-center space-x-8">
            {location.pathname !== '/' && (
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>
            )}

            {location.pathname !== '/products' && (
              <Link
                to="/products"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Package className="w-5 h-5" />
                <span className="font-medium">Products</span>
              </Link>
            )}

            <Link
              to="/cart"
              className="relative flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="font-medium">Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
