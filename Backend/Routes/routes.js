const express = require('express');
const Model = require('../models/model');
const Shops = require('../Models/Shops');
const User = require('../Models/User');
const mongoose = require('mongoose')
const router = express.Router();

module.exports = router;

//Post Methods
router.post('/bookAppointment', async (req, res) => {
    const data = new Model({
        shopName: req.body.shopName,
        arrivalTime: req.body.time,
        clientName: req.body.name,
        dateOfArrival: req.body.date,
        contact: req.body.contact,
        status:"pending"

      })
      try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
      } catch (error) {
        res.status(400).json({message:error.message})
      }
})

router.post('/register', async (req, res) => {
  const data = new Shops({
      name: req.body.name,
      email: req.body.email,
      workingHours: {
        start:req.body.time1,
        end: req.body.time2
      },
      location:{
        lat: req.body.location.lat,
        lng: req.body.location.lng
      }
    })
  const data2 = new User({
    username: req.body.name,
    email: req.body.email,
    password: generatePassword()
  })
    try {
      const dataToSave = await data.save();
      const dataToSave2 = await data2.save();
      res.status(200).json(dataToSave)
    } catch (error) {
      res.status(400).json({message:error.message})
    }
})

//Get all appointments Method
router.get('/getAllAppointments', async (req, res) => {
  try{
    const data = await Model.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}

})

//Get All Shops
router.get('/getAllShops', async (req, res) => {
  try{
    const data = await Shops.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}

})

//Get by ID Method
router.get('/getOne/:id',async (req, res) => {
  try{
    const data = await Shops.findById(req.query.id);
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

//Get user by email

router.get('/getAppointments/', async (req, res) => {
  try{
    let shop = await Shops.find({email:req.query.email});
    console.log(shop[0].name)
    const data = await Model.find({shopName: shop[0].name});
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}

})


//Update by ID Method
router.patch('/update/:id',async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
})

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}