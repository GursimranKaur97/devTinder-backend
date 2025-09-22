const express = require('express');
const authRouter = express.Router();
const { validateSignupData } = require("../utils/validation");
const bcrypt = require('bcrypt');
const User = require("../models/user");


authRouter.post('/signup', async(req, res)=>{
    try {
        // Validation of data
        validateSignupData(req);
        const { firstName, lastName, emailId, password } = req?.body;
        
        // Encypt the password
        const passwordHash = await bcrypt.hash(password, 10);
    
        // Creating a new instance of the User model
        const user =  new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        })
        
        await user.save();
        res.send("User added successfully");
      } catch (err) {
        res.status(400).send("ERROR::" + err?.message);
      }
});

authRouter.post("/login", async(req,res)=>{
    try{
        const { emailId, password } = req.body;

        if(!emailId || !password){
            throw new Error("Please provide Email and password")
        }

        const user = await User.findOne({emailId: emailId});

        if(!user){
            throw new Error("Invalid Credentials")
        }


        // if(!validator.isEmail(emailId) || !validator.isStrongPassword(password)){
        //     res.status(400).send('ERROR : ' + err.message);
        // }

        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid){
            const token = await user.getJWT();

            // Add the token to cookie and send the response back to the user
            res.cookie("token", token, {
                expires: new Date(Date.now() + 8*3600000)
            });
            res.send(user);
        } else {
            throw new Error('Invalid Credentials');
        }


    } catch(err){
        res.status(400).send('ERROR : ' + err.message);
    }
})

authRouter.post('/logout', async(req,res)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now())
    });
    res.send("Logout Successful!!");
})

module.exports = authRouter;