const mongoose = require("mongoose")
const dotenv = require("dotenv").config()


// const MongoUrl = process.env.MongoUri

const MongoUrl = "mongodb+srv://calendar:calendar@calendar.hikmumx.mongodb.net/?retryWrites=true&w=majority"


const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MongoUrl, {
            useNewUrlParser: true
        });
        console.log("connected to db")
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

module.exports = InitiateMongoServer
