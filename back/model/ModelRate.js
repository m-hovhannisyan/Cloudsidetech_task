const mongoose = require("mongoose");
const RateSchema = require("../schema/RateSchema");


const Converse_NC = mongoose.model("converse_ncash" , RateSchema);
const Converse_C = mongoose.model("converse_cash" , RateSchema);
const Converse_Card = mongoose.model("converse_card" , RateSchema);
// const ConverseF_NC = mongoose.model("converse_f_ncash" , RateSchema);
// const ConverseF_C = mongoose.model("converse_f_cash" , RateSchema);
// const ConverseF_Card = mongoose.model("converse_f_card" , RateSchema);
const Hsbc_NC = mongoose.model("hsbc_ncash" , RateSchema);
const Hsbc_C = mongoose.model("hsbc_cash" , RateSchema);
const Hsbc_Card = mongoose.model("hsbc_card" , RateSchema);
// const HsbcF_NC = mongoose.model("hsbc_f_ncash" , RateSchema);
// const HsbcF_C = mongoose.model("hsbc_f_cash" , RateSchema);
// const HsbcF_Card = mongoose.model("hsbc_f_card" , RateSchema);


module.exports = {
    Converse_NC ,
    Converse_C , 
    Converse_Card ,
    Hsbc_NC ,
    Hsbc_C ,
    Hsbc_Card ,

}



// ModelRate.Hsbc_NC.create({
    //     USD_BUY: "res[0][0].buy",
    //     USD_SELL: "res[0][0].sell",
    //     EUR_BUY: "res[0][1].buy",
    //     EUR_SELL: "res[0][1].sell",
    //     RUR_BUY: "res[0][3].buy",
    //     RUR_SELL: "res[0][3].sell",
    //     GBP_BUY: "res[0][2].buy",
    //     GBP_SELL: "res[0][2].sell",
    // })
    // ModelRate.Hsbc_C.create({
    //     USD_BUY: "res[0][0].buy",
    //     USD_SELL: "res[0][0].sell",
    //     EUR_BUY: "res[0][1].buy",
    //     EUR_SELL: "res[0][1].sell",
    //     RUR_BUY: "res[0][3].buy",
    //     RUR_SELL: "res[0][3].sell",
    //     GBP_BUY: "res[0][2].buy",
    //     GBP_SELL: "res[0][2].sell",
    // })
    // ModelRate.Hsbc_Card.create({
    //     USD_BUY: "res[0][0].buy",
    //     USD_SELL: "res[0][0].sell",
    //     EUR_BUY: "res[0][1].buy",
    //     EUR_SELL: "res[0][1].sell",
    //     RUR_BUY: "res[0][3].buy",
    //     RUR_SELL: "res[0][3].sell",
    //     GBP_BUY: "res[0][2].buy",
    //     GBP_SELL: "res[0][2].sell",
    // })
    // 