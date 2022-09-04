const express = require('express');
const router = express.Router()

module.exports = router;

//Post Methods
router.post('/bookAppointment', async (req, res) => {
    const data = new Model({
        shopID: req.body.shopID,
        arrivalTime: req.body.time,
        clientName: req.body.name,
        dateOfArrival: req.body.date,
        contact: req.body.contact

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
    try {
      const dataToSave = await data.save();
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