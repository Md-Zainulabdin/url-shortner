import { nanoid } from "nanoid";
import { URl } from "../models/url.mjs";

export async function generateNewShortUrl(req, res) {
    const body = req.body();
    if (!body.url) return res.status(400).json({ error: "url is reqiured" })
    const shortId = nanoid(8);
    await URl.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({
        id: shortId
    })
}

