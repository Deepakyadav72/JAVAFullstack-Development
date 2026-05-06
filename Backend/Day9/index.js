const express = require("express");
require("dotenv").config();

const { Connection, userModel } = require("./db");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// Read
app.get("/user", async (req, res) => {
    const userData = await userModel.find();
    res.send(userData);
});

// create
// app.post("/userCreate", async (req, res) => {
//   const userData = await userModel.insertOne({
//     name: "Deepak",
//     age: 21,
//     married: false
//   });
//   res.send(userData);
// });

app.post("/userCreate", async (req, res) => {
    const userData = await userModel.insertMany([
        {
            name: "Deepak",
            age: 21,
            married: false
        },
        {
            name: "Kashis",
            age: 20,
            married: false
        }]);
    res.send(userData);
});

//# Delete
app.delete("/userDelete", async (req, res) => {
  try {
    const userData = await userModel.deleteOne({_id: "69f9d12c378dd65a95091a67"});
    res.send(userData)
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.status(500).send(err.message);
  }
})




app.patch("/userUpdate", async (req, res) => {
    const userData = await userModel.updateOne({_id: "69f9cbda3f1a973813183725"},{name: "Kashi ka Deepak"});
    res.send(userData);
});

app.listen(PORT, async () => {
    try {
        await Connection;
        console.log("DB is Connected");
    } catch (error) {
        console.log("🚀 ~ error:", error);
        console.log("DB is Disconnected");
    } finally {
        console.log(`Server is running on ${PORT}`);
    }
});
