const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("/excersise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/excersise.html"))
});

module.exports = router;