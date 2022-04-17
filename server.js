const express= require('express');
const dotenv=require('dotenv');

// router files
const bootcamps= require('./routes/bootcamps');

//Load env config
dotenv.config({path:'./config/config.env'});
const app=express();

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})