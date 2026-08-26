import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
    res.send("Send Endpoint");
})

export default router;