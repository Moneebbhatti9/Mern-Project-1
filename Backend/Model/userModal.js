const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  
    firstName:{
        type: String,
    },

    lastName:{
        type: String,
    },

    email:{
        type: String,
    },

    phone:{
        type: String,
    },

    services:{
        type: Array,
    },

    address:{
       type: String,
    }

})

module.exports = mongoose.model("User" , userSchema)