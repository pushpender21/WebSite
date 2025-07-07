const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const path = require('path');
const Starters = require('./models/Starters');
const Breakfast = require('./models/Breakfast');
const Lunch = require('./models/Lunch');
const Dinner = require('./models/Dinner');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();



// to findOne 
app.get('/api/findOne', async (req, res) => {
  try {
    const menuItem = await Menu.findOne();
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});






//to get datas when an image is clicked on frontend page for all four items 
app.get('/api/menu/starters/:id', async (req, res) => {
  try {
      const menuItem = await Starters.findById(req.params.id);
      if (!menuItem) return res.status(404).json({ message: 'Item not found' });
      res.json(menuItem);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/menu/breakfast/:id', async (req, res) => {
  try {
      const menuItem = await Breakfast.findById(req.params.id);
      if (!menuItem) return res.status(404).json({ message: 'Item not found' });
      res.json(menuItem);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/menu/lunch/:id', async (req, res) => {
  try {
      const menuItem = await Lunch.findById(req.params.id);
      if (!menuItem) return res.status(404).json({ message: 'Item not found' });
      res.json(menuItem);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/menu/dinner/:id', async (req, res) => {
  try {
      const menuItem = await Dinner.findById(req.params.id);
      if (!menuItem) return res.status(404).json({ message: 'Item not found' });
      res.json(menuItem);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});

//to get datas when an image is clicked on frontend page for all four items 



//-------------- to insert the data for STARTERS only ------------------------------------------//

app.get('/api/menu/starters', async (req, res) => {
  try {
    const menuItems = await Starters.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/menu/starters', async (req, res) => {
  console.log(req.body);
  const { title, description, price, imageUrl } = req.body;

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newMenuItem = new Starters({ title, description, price, imageUrl });
    const savedItem = await newMenuItem.save();
    console.log('Saved item:', savedItem);
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding menu item', error: error.message });
  }
});

//-------------- to insert the data for BREAKFAST only -------------------------------------------//

app.get('/api/menu/breakfast', async (req, res) => {
  try {
    const menuItems = await Breakfast.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/menu/breakfast', async (req, res) => {
  console.log(req.body);
  const { title, description, price, imageUrl } = req.body;

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newMenuItem = new Breakfast({ title, description, price, imageUrl });
    const savedItem = await newMenuItem.save();
    console.log('Saved item:', savedItem);
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding menu item', error: error.message });
  }
});

//-------------- to insert the data for LUNCH only ----------------//

app.get('/api/menu/lunch', async (req, res) => {
  try {
    const menuItems = await Lunch.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/menu/lunch', async (req, res) => {
  console.log(req.body);
  const { title, description, price, imageUrl } = req.body;

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newMenuItem = new Lunch({ title, description, price, imageUrl });
    const savedItem = await newMenuItem.save();
    console.log('Saved item:', savedItem);
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding menu item', error: error.message });
  }
});

//-------------- to insert the data for DINNER only ----------------//

app.get('/api/menu/dinner', async (req, res) => {
  try {
    const menuItems = await Dinner.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/menu/dinner', async (req, res) => {
  console.log(req.body);
  const { title, description, price, imageUrl } = req.body;

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newMenuItem = new Dinner({ title, description, price, imageUrl });
    const savedItem = await newMenuItem.save();
    console.log('Saved item:', savedItem);
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding menu item', error: error.message });
  }
});



// server port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
