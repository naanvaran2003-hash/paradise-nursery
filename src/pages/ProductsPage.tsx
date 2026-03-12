import { plants, plantCategories } from '../data/plants';
import PlantCard from '../components/PlantCard';
import Header from '../components/Header';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Plant Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of houseplants, perfect for every space and lifestyle
          </p>
        </div>

        {plantCategories.map((category) => {
          const categoryPlants = plants.filter(plant => plant.category === category);

          if (categoryPlants.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
                <div className="w-24 h-1 bg-emerald-600 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
