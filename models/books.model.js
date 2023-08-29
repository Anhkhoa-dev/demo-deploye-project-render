const monggose = require('mongoose')


const bookSchema = new monggose.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = monggose.model('Book', bookSchema)