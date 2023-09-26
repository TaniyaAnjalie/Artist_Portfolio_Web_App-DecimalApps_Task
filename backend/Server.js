const express = require ('express')     //create express application on node.js application
const mongoose = require('mongoose')     //create mongoose variable

// const Art = require('./Models/ArtModel')

//import Routes
// const ArtRoute = require('./Routes/ArtRoute')

const app = express()     //create app variable

// const MONGO_URL = process.env.MONGO_URL

// create app --> this add to mongoose - line 104
app.listen(4000, () => {
    console.log('Node API is running on port 4000')
})

app.get('/', (req, res)=>{
    res.send('Hello')
})


// mongoose.connect('mongodb+srv://admin:artworkAdmin@artwork.f0skof2.mongodb.net/?retryWrites=true&w=majority')
//     .then(() => {
//         console.log('Connected to MongoDB!')
    
//         //create app
//         app.listen(4000, () => {
//         console.log(`Node API is running on port 4000`)
//     })

//     }).catch((error) => {
//         console.log(error)
//   })