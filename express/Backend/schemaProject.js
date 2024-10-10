const mongoose=require('mongoose');

const schema  = mongoose.Schema({
    id:Number,
    name:String,
    Image:String,
    discription:String,
    price:Number,
})
const model = mongoose.model('project', schema);
module.exports = model;