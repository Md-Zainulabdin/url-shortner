import { Router } from "express";

const staticRoute = Router();
staticRoute.get("/", (req, res) => {
    return res.render("home")
})
export default staticRoute;