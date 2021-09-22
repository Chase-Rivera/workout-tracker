const router = rquire("express").Router();
const workoutRoutes = require("./workoutRoutes");

router.use("/workouts", workoutRoutes);

module.exports = router;