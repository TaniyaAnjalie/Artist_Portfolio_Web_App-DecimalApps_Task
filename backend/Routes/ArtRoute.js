//create express application on node.js application
const express = require ('express')
//create product model
const Art = require('../Models/ArtModel')
//create router variable
const router = express()

//import ProductControllers
const {
    postArt
} = require('../Controllers/ArtController')


//Routes

router.post ('/' , postArt)  


module.exports = router;




