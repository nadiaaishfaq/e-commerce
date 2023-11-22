<<<<<<< HEAD
import React from 'react'
import ProductList from './Product-List/ProductList'
=======
import React,{useState, useEffect} from "react";
import Card from "./Card/Card";

const Home = () => { 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }


>>>>>>> origin/main

  return (
<<<<<<< HEAD
    <div>
      <ProductList></ProductList>
=======
    <div className="flex justify-evenly flex-wrap gap-10 p-10">
      {products?.map((item) => {
        return (
          <div>
            <Card
              title={item.category}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </div>
        );
      })}
>>>>>>> origin/main
    </div>
  );
};

export default Home;
