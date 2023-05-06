let express= require('express')

let product= require('../Model/product')

let router= express.Router()

router.route('/Products')
.get((req,res)=>{
    product.find({}).then(products=>{
        res.json(products)
    })
    .catch(err=>{
        res.send(err)
    })
})
.post((req,res)=>{
    let product1=new product(req.body)
    product1.save().then(()=>{
        res.status(201).send("Data is saved")
    })
    .catch((err)=>res.send(err))
})


router.route("/Products/:productid")
  .get((req, res) => {
    const productid = req.params.productid;

    product.findOne({ productid })
      .then(data => {
        if (!data) {
          return res.status(404).send('Product not found');
        }
        res.send(data);
      })
      .catch(error => res.status(500).send(error));
  })


.put((req, res) => {
    const productid = req.params.productid;

    product.findOneAndUpdate({ productid }, req.body, { new: true })
      .then(updatedProduct => {
        if (!updatedProduct) {
          return res.status(404).send('Product not found');
        }
        res.send('Record updated');
      })
      .catch(error => res.status(500).send(error));
  })


.delete((req, res) => {
    const productid = req.params.productid;

    product.findOneAndRemove({ productid })
      .then(deletedProduct => {
        if (!deletedProduct) {
          return res.status(404).send('Product not found');
        }
        res.send('Record deleted');
      })
      .catch(error => res.status(500).send(error));
  })

module.exports= router
