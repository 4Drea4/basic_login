const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique:true,
        trim:true
    },

    email: {
        type:String,
        required:true,
        unique:true,
        match: [/.+@.+\..+/, "Must match an email address!"]
    },
    password:{
        type:String,
        required: true,
        minlength:8
    }
});

userSchema.pre('save', async function () {
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
});

// ooowee okay I am using Hasnas activity as an example
userSchema.pre