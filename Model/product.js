var mongoose=require('mongoose')

var Schema=mongoose.Schema

var productSchema=new Schema({
    productid:{type:Number},
    productname:{type:String},
    modelyear:{type:Number},
    price:{type:Number},
    description:{type:String}
})

var product=mongoose.model('product',productSchema,'products')

module.exports=product