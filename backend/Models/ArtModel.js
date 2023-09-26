const express = require('express')
const {default: mongoose} = require ('mongoose')

const artSchema = mongoose.Schema(
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

const Art = mongoose.model('Art', artSchema);

module.exports=Art;