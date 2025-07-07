const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect ('mongodb://127.0.0.1:27017/yummy-backend',{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then ( () => console.log('Connected!'))
    .catch ( err => console.error ('Failed to connect to MongoDB!:')); 
};

module.exports = connectDB;
