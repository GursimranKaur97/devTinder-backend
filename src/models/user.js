const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
        // index: true // creating index
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true, // If we're adding unique as true then by default it creates index also for emailid
        lowercse: true,
        trim: true,
        validate(value){
        if(!validator.isEmail(value)){
          throw new Error('Invalid Email Address' + value)
        }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
        if(!validator.isStrongPassword(value)){
            throw new Error('Enter a strong password: ' + value)
        }
        }
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        enum: {
            values:["male","female","other"],
            message: `{VALUE} is not a valid gender type`
        }, 

    },
    photoUrl: {
        type: String,
        default: 'https://github.com/amanjha8100',
        validate(value){
            if(!validator.isURL(value)){
              throw new Error('Invalid Photo Url' + value)
            }
            }
    },
    about: {
        type: String,
        default: "This is a default about of the user!"
    },
    skills: {
        type: [String]
    },
},
{
    timestamps: true
})

userSchema.index({firstName: 1, lastName: 1}); // Compound Index

userSchema.methods.getJWT = async function(){
    const user =  this;
    const token = await jwt.sign({_id: user._id}, "DEV@Tinder#123", {expiresIn: "1d"});
    return token;
}

userSchema.methods.validatePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash);

    return isPasswordValid;

}

module.exports = mongoose.model("User", userSchema); // Creating User model