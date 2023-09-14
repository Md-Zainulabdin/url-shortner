import express from "express";
import urlRoute from "./routes/url.mjs";
import { URL } from "./models/url.mjs";
import './config.mjs'
import connectMongoDB from "./mongodb/mongodb.mjs";

const app = express();
const PORT = 8000;

app.use(express.json());

connectMongoDB();

app.use("/url", urlRoute)
app.get("/", (req, res) => {
    res.json({ message: "hello world" })
})

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            },
        },
    })

    res.redirect(entry.redirectUrl)
})

app.listen(PORT, () => console.log("Server is started at PORT: ", PORT))