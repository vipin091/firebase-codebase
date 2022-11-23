const express = require("express");
const cors = require("cors");
const User = require("./config");
//const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res)=>{
const getData = await User.get();
res.send({ message: "user added" });
});

app.post("/create", async (req, res) => {
    const data = req.body;
    await User.add(data);
    res.send({ message: "user added" });
});

app.listen(4000, () => { console.log("server is running on 4000") });