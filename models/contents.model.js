const mongoose = require('mongoose');

const schema = new mongoose.schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
},{
    collection:'contents',
    timestamps:true,
});

modules.exports = mongoose.model('Contents',schema);