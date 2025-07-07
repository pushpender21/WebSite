const mongoose = require('mongoose');
const connectDB = require('./db');
const Menu = require('./models/Starters');

const sampleData = [
  {
    title: 'Great Tiste',
    description: 'Launch, deren, treat, file, narada',
    price: 5.95,
    imageUrl: '/images/menu-item-1.png',
  },
  {
    title: "Tortilla Antills",
    description: "Launch, deren, treat, file, narada",
    price: 5.95,
    imageUrl: "/images/menu-item-2.png",
  },
  {
    title: "Cabbage Spogs",
    description: "Launch, deren, treat, file, narada",
    price: 5.95,
    imageUrl: "/images/menu-item-3.png",
  },
];



const seedDatabase = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/yummy-backend', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      await Menu.deleteMany({});
  
      await Menu.insertMany(sampleData);
      console.log('Sample data inserted successfully!');
    } catch (error) {
      console.error('Error inserting sample data:', error);
    } finally {
      mongoose.connection.close();
    }
};
  
seedDatabase();
