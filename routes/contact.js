const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.static("public"));
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', (req,res) => {
    res.send("You are on root of contact");
});

module.exports = router;