var express=require('express')

var router=require('./Routes/productroutes')

var mongoose=require('mongoose')

var app=express()

app.use(express.json())

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/webinardb')
.then(()=>console.log("Db Connected"))
.catch((err)=>console.log(err))


app.use('/api',router)

app.listen(3000,function(){
    console.log("Server started...")
})