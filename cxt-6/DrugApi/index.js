const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome! Career Ex Drug Api Server is Runn")
})

const port = "8080";
app.listen(port, ()=> console.log(`Application listening at http://localhost:${port}`));