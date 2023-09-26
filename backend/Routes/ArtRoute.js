//create express application on node.js application
const express = require ('express')
//create art model
const Art = require('../Models/ArtModel')
//create router variable
const router = express.Router()

//import ArtctControllers
const {
    postArt, 
    getArts
} = require('../Controllers/ArtController')


//Routes

router.post ('/' , postArt)
router.get ('/' , getArts)  


module.exports = router;




