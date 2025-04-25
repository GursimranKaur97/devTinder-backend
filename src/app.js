const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth")

// app.get('/getUserData', (req,res)=>{
//     throw new Error('ghsdghdsg')
//     res.send('User Data Sent');
// })

// app.use('/', (err,req,res,next)=>{
//     if(err){
//         // Log your error
//         res.status(500).send('Something went wrong');
//     }

// })

/// OR ADD TRY CATCH TO HANDLE ERRORS---------------->


app.get('/getUserData', (req,res)=>{
    try{
    throw new Error('ghsdghdsg');
    res.send('User Data Sent');
    } catch(err){
        res.status(500).send('Some error occured contact customer support');
    }
})

// Handle Auth Middleware for all GET, POST, ... requests
// app.use('/admin',adminAuth)
// // app.use('/user', userAuth)

// app.get('/user', userAuth, (req,res)=>{
//     res.send('User Data Sent');
// })
// app.get('/admin/getAllData', (req,res)=> {
//         res.send('All Data Sent');

// })

// app.get('/admin/deleteUser', (req,res)=> {
//     res.send('Deleted a user');

// })


// Independant route handling
// app.get("/user", (req, res, next) => {
//   console.log("Handling the route user1!!");
//   next();
// });
// app.get("/user", (req, res) => {
//   console.log("Handling the route user2!!");
//   res.send("Handling the route user2!!");
// });

// app.use("/user", [
//   (req, res, next) => {
//     // Route Handler 1
//     console.log("Handling the route user!!");
//     next();
//     // res.send('1st Response!!');
//   },
//   (req, res, next) => {
//     // Route Handler 2
//     console.log("Handling the route user!!");
//     // res.send('2nd Response!!');
//     next();
//   },
//   (req, res, next) => {
//     // Route Handler 3
//     console.log("Handling the route user!!");
//     // res.send('3rd Response!!');
//     next();
//   },
//   (req, res, next) => {
//     // Route Handler 4
//     console.log("Handling the route user!!");
//     // res.send('4th Response!!');
//     next();
//   },
//   (req, res) => {
//     // Route Handler 5
//     console.log("Handling the route user!!");
//     res.send("5th Response!!");
//   },
// ]);

// It'll give response for / abc and also for /ac as by add ? after b it becomes optional
// app.get('/ab?c', (req,res)=>{
//     res.send({firstName: 'Gursimran', lastName: 'Kaur'})
// })

// It'll give response for / abcd and also for /abcbcd or / abcbcbcd
// app.get('/a(bc)+d', (req,res)=>{
//     res.send({firstName: 'Gursimran', lastName: 'Kaur'})
// })

// it'll give response for dragonfly or dragonnnnnnnflag but not given any response for dragonflyjj


// app.get(/.fly$/, (req, res) => {
//   res.send({ firstName: "Gursimran", lastName: "Kaur" });
// });
// // This will only handle GET call to /user
// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log("***req.params****", req.params);
//   res.send({ firstName: "Gursimran", lastName: "Kaur" });
// });

// app.post("/user", (req, res) => {
//   console.log("Save Data to the database");
//   res.send("Data successfully saved to the database");
// });

// app.delete("/user", (req, res) => {
//   res.send("Deleting successfully");
// });
// This will match all the HTTP method API calls to /test so if we do GET or POST call for all it'll return us Hello form the server
// app.use("/test", (req, res) => {
//   res.send("Hello from the server");
// });
app.listen(3030, () => {
  console.log("Server successfully listening on port 3030");
});
