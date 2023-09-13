import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        reqiured: true,
        unique: true
    },

    redirectUrl: {
        type: String,
        required: true
    },

    visitHistory: [{ timestamp: { type: Number } }]
}
    ,
    { timestamps: true }
)

export const URl = mongoose.model("url", urlSchema);