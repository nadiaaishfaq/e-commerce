import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryScreen = () => {
  
  useEffect(() => {
    // Make an Axios GET request to your category endpoint
    axios.get('http://localhost:8080/Category') // Replace with your server URL
      .then((response) => {
        setCategories(response.data); // Update the state with the received category data
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });
  }, []);

  

  const [categories, setCategories] = useState([]);
  return (
    <div className="bg-yellow-100"> {/* Set background color to yellow */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Explore Category
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;


