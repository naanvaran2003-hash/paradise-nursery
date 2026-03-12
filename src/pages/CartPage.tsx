import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Header from '../components/Header';

const CartPage = () => {
  const { cart, getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some beautiful plants to your collection!</p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white
                       rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
          <p className="text-xl text-gray-600">
            {totalItems} {totalItems === 1 ? 'plant' : 'plants'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({totalItems})</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-bold text-emerald-600">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600
                         text-white rounded-xl font-bold text-lg hover:bg-emerald-700
                         transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Proceed to Checkout</span>
              </button>

              <Link
                to="/products"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gray-100
                         text-gray-900 rounded-xl font-semibold hover:bg-gray-200
                         transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Continue Shopping</span>
              </Link>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-start space-x-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Free shipping on all orders. Healthy plants guaranteed or your money back.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
