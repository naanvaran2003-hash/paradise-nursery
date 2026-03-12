import { ShoppingCart, Check } from 'lucide-react';
import { Plant } from '../data/plants';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { addToCart, cart } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const isInCart = cart.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    addToCart(plant);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${plant.price}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
            {plant.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{plant.description}</p>

        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold
                     transition-all duration-300 ${
                       showAdded
                         ? 'bg-green-500 text-white'
                         : isInCart
                         ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                         : 'bg-emerald-600 text-white hover:bg-emerald-700'
                     }`}
        >
          {showAdded ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added to Cart!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
