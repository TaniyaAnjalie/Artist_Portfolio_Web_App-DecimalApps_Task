const Art = require('../Models/ArtModel')

//create a art
const postArt = async(req, res) => {
    console.log(req.body);
    res.send(req.body)
    try{
        const art = await Art.create(req.body)
        res.status(200).json(art);

    } catch (error){
        res.status(500)
        throw new Error (error.message)
    }
}

//get all arts
const getArts = async(req, res) => {

    //for pagination
    const page = parseInt(req.query.page)

    try{
        const art = await Art.find({}).populate("reviews").skip(page * 8).limit(8);
        res.status(200).json({count : art.length, message: "Successfull", data:art});
        
    } catch (error){
        res.status(500)
        throw new Error (error.message)
    }
}

module.exports = {
    postArt,
    getArts,
}