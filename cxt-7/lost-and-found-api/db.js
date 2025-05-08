const mongoose = require("mongoose");

const connectToDB = async () => {
    console.log("Connecting to Database...")
    await mongoose.connect("mongodb+srv://aduragbemioduntan:admin@cluster0.vx8ik.mongodb.net/lost_found?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connection successful!")
}

module.exports = connectToDB();