const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    shopName: {
        required: true,
        type: String
    },
    clientName:{
        required:true,
        type:String
    },
    arrivalTime:{
        required: true,
        type:String
    },
    contact:{
        required:true,
        type:String
    },
    dateOfArrival:{
        type:String,
        required:true,
    },
    status: {
        type:String
    }

})

module.exports = mongoose.model('Data', dataSchema,'Appointments')