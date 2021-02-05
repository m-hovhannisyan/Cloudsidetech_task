const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RateSchema = new Schema({

    USD_BUY:{
        type:String,
    },
    USD_SELL:{
        type:String,
    },
    EUR_BUY:{
        type:String,
    },
    EUR_SELL:{
        type:String,
    },
    RUR_BUY:{
        type:String
    },
    RUR_SELL:{
        type:String
    },
    GBP_BUY:{
        type:String
    },
    GBP_SELL:{
        type:String
    }
//     Schema.Types.ObjectId,
//     ref:'user'
});

module.exports = RateSchema