const product=require('../models/product')

exports.createproduct=asyn(req,res)=>   //async  will wait for the database operation to complete
    {
    try{
         const product=await Product.create(req.body);
         res.json(product);
         res.status
        }
    catch(err){
           res.status(500).json(err)
         }
    }                                           