const express = require("express");
const router = express.Router();

const Academia = require("../../models/Academia");


router.post("/academia/create", async(req, res) => {
    var { academia_name } = req.body;

    const academia = new Academia({
        academia_name: academia_name
    });

    try{
        await academia.save();
        res.json(academia);
    } catch(err) {
        res.json({error: true, message: err.message});
    }
});




module.exports = router;