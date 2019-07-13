const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    nama:String,
    salt:{
        type:String,
        required:true
    },
},{
    colllection:'usser',
    timestamps:true,
});

module.exports = mongoose.model('Usser',schema);