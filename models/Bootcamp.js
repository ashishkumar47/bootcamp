const mongoose = require('mongoose');

const BootcampSchema= new mongoose.Schema({
   name:{
       type:String,
       required:[true,'Please add a name'],
       unique:true,
       trim:true,
       maxlength:[50,'Name can not be more than 50 characters']
   },
   slug:String,
   description:{
    type:String,
    required:[true,'Please add a description'],
    maxlength:[500,'Description can not be more than 500 characters']
   },
   website:{
       type:String,
       match:[
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
       ]
   },
   phone:{
       type:String,
       maxlength:[20,'phone number can not be more than 20 characters']
   },
   email:{
    type:String,
    match:[
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,
     'Please add a valid email'
    ]
},
address:{
    type:String,
    required:[true,'Please add an address']
}
});