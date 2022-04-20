const mongoose = require('mongoose');

const connectDB = async function() {
const connection=await mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser:true
});
console.log(`MongoDb connnected: ${connection.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;