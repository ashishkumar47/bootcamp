const express= require('express');
const {getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp}=require('../controllers/bootcamps');
const app=express();
const bootcampRouter=express.Router();

//these will redirect to the appropriate controller method

bootcampRouter.route('/').get(getBootcamps).post(createBootcamp);
bootcampRouter.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports=bootcampRouter;