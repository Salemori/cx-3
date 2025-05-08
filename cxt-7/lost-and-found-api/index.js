const express = require("express");
const connectToDB = require("./db");
const ItemModel = require("./models/itemModel");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());

connectToDB;

const PORT = "8000";

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

app.get("/items", (req, res) => {
  return res.send("Lost and found server is running.");
});


// 3a. Add a found item
app.post("/items/create-item", async (req, res) => {
    try {
        const { itemName, description, locationFound, dateFound} = req.body;

        if(!itemName || !description || !locationFound || !dateFound){
            return res.status(400).json({message: "Fill required field"});
        }

        let newItem = new ItemModel({itemName, description, locationFound, dateFound});
        await newItem.save();

        return res.status(201).json({
            message: "Successful",
            data: newItem
        })
    } catch (error) {
        return res.json({
            message: "Failed",
            error: error.message
        })
    }
});


// 3b. View all unclaimed items
app.get("/items/unclaimed-items", async (req, res)=>{
    try {
        const unclaimedItems = await ItemModel.find({claimed: false});

        return res.status(200).json({
            message: "Successful",
            data: unclaimedItems
        })
    } catch (error) {
        return res.json({
            message: "Failed",
            error: error.message
        })
    }
   
});


// 3c. View one item by ID
app.get("/items/:id", async (req, res)=>{
    try {
        const {id} = req.params;
       
        if(!mongoose.isValidObjectId(id)){
            return res.status(400).json({message: "Invalid ID format"});
        }

        const item = await ItemModel.findById({_id: id});
    
        if(!item){
        
            return res.status(404).json({message: "Item not found"});
        }

        return res.status(200).json({
            message: "Successful",
            data: item
        })

    } catch (error) {
        return res.json({
            message: "Failed",
            error: error.message
        })
    }
});


// 3d. Update an item’s details or mark as claimed
app.patch("/items/mark-as-claimed/:id", async (req,res)=>{
    const {id} = req.params;
    const {claimed} = req.body;

    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({message: "Invalid ID format"});
    }

    if(claimed == null){
        return res.status(400).json({message: "Update field is required"});
    }

    const updatedItem = await ItemModel.findByIdAndUpdate(id, {claimed}, {new: true});

    if (!updatedItem) {
        console.log(updatedItem);
        return res.status(404).json({
            status: "failed",
            message: "Item not found",
        });
    }

    res.status(200).json({
        status: "Successful",
        message: "Item updated successfully",
    });
});


// 3e. Delete old/irrelevant entries