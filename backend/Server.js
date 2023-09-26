const express = require ('express')     //create express application on node.js application
const mongoose = require('mongoose')     //create mongoose variable

//import Routes
const ArtRoute = require('./Routes/ArtRoute')

const app = express()     //create app variable

const MONGO_URL = process.env.MONGO_URL

// create app --> this add to mongoose - line 104
app.listen(4000, () => {
    console.log('Node API is running on port 4000')
})

app.use(express.json())     //middleware : to application understand json

app.post('./art', (req, res)=>{
    console.log(req.body);
    res.send (req.body)
})
//middleware  to use Routes
// app.use('/api/products', ProductRoute)

//Routes - to access this through web browser - express need aware
// app.get ('/' , (req, res) => {
//     // throw new Error ('fake error')
//     res.send('Hello')
// })

//dont need CRUD codes in here because it add to ProductRoute.js


mongoose.connect('mongodb+srv://admin:artworkAdmin@artwork.f0skof2.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB!')
    
        //create app
        app.listen(PORT, () => {
        console.log(`Node API is running on port ${PORT}`)
    })

    }).catch((error) => {
        console.log(error)
  })