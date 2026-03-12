import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover rounded-xl"
      />

      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-emerald-600 font-semibold mb-2">${item.price.toFixed(2)} each</p>
        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-lg hover:bg-emerald-100
                     text-gray-700 hover:text-emerald-700 transition-colors shadow-sm"
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="text-xl font-bold text-gray-900 w-12 text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-lg hover:bg-emerald-100
                     text-gray-700 hover:text-emerald-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="text-right min-w-[100px]">
          <p className="text-sm text-gray-600 mb-1">Subtotal</p>
          <p className="text-xl font-bold text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="w-12 h-12 flex items-center justify-center bg-red-50 hover:bg-red-100
                   text-red-600 rounded-xl transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
