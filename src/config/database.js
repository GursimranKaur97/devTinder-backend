const mongoose = require('mongoose');

console
const connectDB = async()=>{
await mongoose.connect(
    'mongodb+srv://simrankaur2997:VNvIapBhYJIhY6Qv@gursimranmongodb.xxp3a6m.mongodb.net/devTinder'
) // Connect to mongoose cluster/database
}
module.exports = connectDB;
