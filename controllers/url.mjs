import { nanoid } from "nanoid";
import { URL } from "../models/url.mjs";

export async function generateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is reqiured" })
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({
        id: shortId
    })
}

