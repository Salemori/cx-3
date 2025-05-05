const express = require("express")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Lost and found server is running.")
})

const PORT = "8000";

app.listen(PORT, ()=> console.log(`Server listening at http://localhost:${PORT}`));