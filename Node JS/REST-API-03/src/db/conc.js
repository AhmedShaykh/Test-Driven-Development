const mongoose = require("mongoose");

const URI = "mongodb+srv://syed_bilal:1234@cluster0.wwm7o.mongodb.net/mern?retryWrites=true&w=majority"  

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log('connection successful')
}).catch((err) => {
    console.log(err);
});