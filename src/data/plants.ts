export interface Plant {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const plantCategories = [
  'Low Light Plants',
  'Air Purifying',
  'Pet Friendly',
  'Flowering Plants'
];

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Low Light Plants',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Perfect for beginners, thrives in low light'
  },
  {
    id: 2,
    name: 'Pothos',
    category: 'Low Light Plants',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Easy-care trailing plant with heart-shaped leaves'
  },
  {
    id: 3,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 16.99,
    image: 'https://images.pexels.com/photos/7913415/pexels-photo-7913415.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'NASA-approved air purifier with cascading foliage'
  },
  {
    id: 4,
    name: 'Peace Lily',
    category: 'Air Purifying',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8084693/pexels-photo-8084693.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Elegant white blooms with excellent air cleaning properties'
  },
  {
    id: 5,
    name: 'Boston Fern',
    category: 'Pet Friendly',
    price: 22.99,
    image: 'https://images.pexels.com/photos/7084309/pexels-photo-7084309.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Lush, feathery fronds safe for pets'
  },
  {
    id: 6,
    name: 'Areca Palm',
    category: 'Pet Friendly',
    price: 34.99,
    image: 'https://images.pexels.com/photos/7193382/pexels-photo-7193382.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Tropical palm that is non-toxic to pets'
  },
  {
    id: 7,
    name: 'African Violet',
    category: 'Flowering Plants',
    price: 19.99,
    image: 'https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Charming purple blooms year-round'
  },
  {
    id: 8,
    name: 'Orchid',
    category: 'Flowering Plants',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Exotic blooms that last for months'
  }
];
