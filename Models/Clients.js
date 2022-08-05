const mongoose= require('mongoose');

const ClientSchema = new mongoose.schema({
    Name: {
        type: String,
        required: [true, ' Please Enter Your Name']
    },
    Phone:{
        type: Number,
        required: [true, 'Please enter phone number'],
        maxlength:[10, 'Phone number cannot be more than 10 characters'],

    },
    Email: {
        type: String,
        required: [true, 'Please enter your email address'],
    },
    Message: {
        type: String,
        required: [true, 'Please Enter your message so we can know what to help you with']
    }
})
module.exports = mongoose.model.Client || mongoose.model('Client', ClientSchema );