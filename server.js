const express= require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/databaseConfig');
const colors = require('colors');

// router files
const bootcamps= require('./routes/bootcamps');

//Load env config
dotenv.config({path:'./config/config.env'});
const app=express();

//connect to database
connectDB();

//Dev logging middleware
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);


const PORT=process.env.PORT||5000;
const server=app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

process.on('unhandledRejection',(err,promise)=>{
console.log(`Error:${err.message}`.red.bold);
//close the server and exit process with failure
server.close(()=>process.exit(1));
});