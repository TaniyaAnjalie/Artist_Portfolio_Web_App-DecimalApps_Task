const express = require('express')
const {default: mongoose} = require ('mongoose')

const ArtSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required: [true, "Please enter a title"]
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: true
        },
    },
    {
        timestamps:{}
    }
)

const Art = mongoose.model('Art', ArtSchema);

module.exports.Art;