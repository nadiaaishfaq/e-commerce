// category.js

const express = require('express');
const router = express.Router();

// Replace this with your actual category data
const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Browse our latest electronic gadgets and accessories.',
      image: "https://media.istockphoto.com/id/515443264/photo/home-appliance-in-the-store.jpg?s=612x612&w=0&k=20&c=Zi69da3N5D31WXba7U9H2Rw4jWt_5IngnZAeZ3Kzix8="
    },
    {
      id: 2,
      name: 'Clothing',
      description: 'Discover a wide range of stylish clothing for all occasions.',
      image: 'https://hips.hearstapps.com/hmg-prod/images/index-38-1567006744.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
    },
    {
      id: 3,
      name: 'Home Decor',
      description: 'Enhance your living space with our exquisite home decor items.',
      image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 4,
      name: 'Books',
      description: 'Explore a world of knowledge with our extensive book collection.',
      image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
    },
    {
      id: 5,
      name: 'Fitness',
      description: 'Achieve your fitness goals with our top-quality fitness equipment.',
      image:"https://www.heart.org/-/media/Images/Healthy-Living/Fitness/BreakingDownBarriersFitness.jpg" 
   
       } ,  {
      id: 6,
      name: 'Toys & Games',
      description: 'Find fun and educational toys for kids of all ages.',
      image: 'https://www.learnenglish.com/wp-content/uploads/toys-games.jpg',
    },
  ];
  

// Define a route to get all categories
router.get('/', (req, res) => {
  res.json(categories);
});

module.exports = router;
