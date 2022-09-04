const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email:{
        required: true,
        type:String
    },
    workingHours:{
        start:{type:String},
        end:{type:String}
    },
    location:{
        lat: {type:Number,required:true},
        lng: {type:Number, required:true},

    }
})

module.exports = mongoose.model('Data2', dataSchema,'Shops')