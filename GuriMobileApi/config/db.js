const mongoose = require("mongoose")


async function ConnectedDB(){

    mongoose.connect("mongodb://localhost:27017/guri_garage").then(()=>
        console.log("connect to data base")
    )
    .catch((e)=>{
    console.log(e)
    }
    )
}

module.exports=ConnectedDB