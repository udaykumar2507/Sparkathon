const express = require("express");
const router = express.Router();
// const {
//     getTracker,
//     putTracker
// } = require("../controllers/meditationController");



router.get("/", async (req, res) => {
    return res.status(200).json({message: "hello app"})
});

// router.put("/meditation", putTracker);

// router.get("/workouts",getTracker);
module.exports = router;