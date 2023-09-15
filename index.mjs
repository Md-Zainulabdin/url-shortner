import express from "express";
import urlRoute from "./routes/url.mjs";
import staticRoute from './routes/staticRouter.mjs'
import path from "path"
import { URL } from "./models/url.mjs";
import './config.mjs'
import connectMongoDB from "./mongodb/mongodb.mjs";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

connectMongoDB();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use("/url", urlRoute)
app.use("/", staticRoute)

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls
    })
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