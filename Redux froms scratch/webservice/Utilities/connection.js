const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const schema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

let connection={}
connection.getconnection = () => {
    return mongoose.connect('mongodb://localhost:27017/LoginData',{ useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
        return db.model("loginData", schema)
    
    }).catch((err) => {
        console.log("connecting to Db failed", err);
    })
}

module.exports=connection