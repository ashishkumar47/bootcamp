const express= require('express');
const app=express();

const bootcampRouter=express.Router();

bootcampRouter.get('/',(req,res)=>{
    //res.status(400).send({sucess:false});
    res.status(200).json({sucess:true,data:'show all bootcamps'});
});

bootcampRouter.post('/',(req,res)=>{
    //res.status(400).send({sucess:false});
    res.status(200).json({sucess:true,data:'create bootcamp'});
});

bootcampRouter.get('/:id',(req,res)=>{
    //res.status(400).send({sucess:false});
    res.status(200).json({sucess:true,data:`get a bootcamp for id: ${req.params.id}`});
});

bootcampRouter.put('/:id',(req,res)=>{
    //res.status(400).send({sucess:false});
    res.status(200).json({sucess:true,data:`update a bootcamp for id: ${req.params.id}`});
});

bootcampRouter.delete('/:id',(req,res)=>{
    //res.status(400).send({sucess:false});
    res.status(200).json({sucess:true,data:`delete a bootcamp for id:${req.params.id}`});
});


module.exports=bootcampRouter;