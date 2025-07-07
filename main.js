const express = require('express');
const app = express();
const db = require('./reglog');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());

// to connect 
  mongoose.connect ('mongodb://127.0.0.1:27017/yummysite',{
      useNewUrlParser : true,
      useUnifiedTopology : true
  })
  .then ( () => console.log('Connected!'))
  .catch ( err => console.error ('Failed to connect to MongoDB!:'));    

const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    username: String,
    password: String,
    mobile: String,
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
});

const Users = mongoose.model('users', user);


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: 'pushpender6650@gmail.com',
    pass: 'gclmohyydoopjpeo',
  }
});


//-------- to register -------//

app.post('/contact', async(req, res) =>{
  const data = req.body;
  console.log(data);

  const mailOptions = {
    from: 'pushpender6650@email.com',
    // to: 'manjeet.rajput8870@gmail.com',
    to: 'oms610447@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello Thank you for the registering to the Medicine site'
  };
  const userData = new Users(data);

  try {
    await userData.save();
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', + info.response);
      }
    });

    res.send("data inserted successfully");

  }  catch (error) {
    console.error('error');
    res.send(500).send("Error inserting data")
 }

});    

//--------- to Login ----------//

app.post('/logins', async(req, res) =>{
    const data = req.body;
    let datas = await Users.findOne(data);
    console.log(datas);
    if (datas==null) {
        res.send("Username and Password does not match");
    } else {
        res.send("login successfully");
    }
});


app.listen(4000);