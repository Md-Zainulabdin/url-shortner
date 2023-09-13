import express from "express";
import urlRoute from "./routes/url.mjs";
// import { connectMongoDB } from "./connect";

const app = express();
const PORT = 8000;

// connectMongoDB();

app.use("/url", urlRoute)
app.get("/", (req,res) => {
    res.json({message:  "hello world"})
})

app.listen(PORT, () => console.log("Server is started at PORT: ", PORT))