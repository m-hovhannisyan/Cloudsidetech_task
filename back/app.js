const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const RateSchema = require("./schema/RateSchema");
const ModelRate = require("./model/ModelRate");
const Puppeteer = require("puppeteer");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

mongoose.connect("mongodb+srv://miqayel:mh694499@cluster0.fk4ni.mongodb.net/Banks_rate?retryWrites=true&w=majority", {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false 
}).then(() => {
    console.log("Mongodb connected")
}).catch( err => console.log(err));


let converse_link = "https://www.conversebank.am/hy/exchange-rate/" ;
let hsbc_link = "https://www.hsbc.am/en-am/help/rates/" ;


let converse = async () => {
    console.log("start1")
    let res 

    try{
        let browser = await Puppeteer.launch({
            headless :true,
            slowMo:100,
            devtools:true
        })
        let page = await browser.newPage()
        await page.setViewport({
            width:1600 , height:950
        })
        await page.goto(`${converse_link}`)
        await page.waitForSelector("#main_static_content > table:nth-child(5) > tbody")
        let html = await page.evaluate(async() => {
            let page = []
            try {
                let table = document.querySelector("#main_static_content > table:nth-child(5) > tbody") 
                let trs = table.querySelectorAll("tr")
                for(let i = 2 ; i < 6 ; i++) {
                    let tds = trs[i].querySelectorAll("td")
                    let obj = {
                        currency:tds[0].innerText,
                        cash_buy:tds[3].innerText,
                        cash_sell:tds[4].innerText,
                        noncash_buy:tds[5].innerText,
                        noncash_sell:tds[6].innerText
                    }
                    page.push(obj)
                }
                return page
            } catch(err) {
                console.log(err)
            }
        })
        res = html
    } catch(err) { 
        console.log(err) ;
    } 

    await ModelRate.Converse_NC.updateOne({} , {
        USD_BUY: res[0].noncash_buy,
        USD_SELL: res[0].noncash_sell,
        EUR_BUY: res[1].noncash_buy,
        EUR_SELL:res[1].noncash_sell,
        RUR_BUY: res[3].noncash_buy,
        RUR_SELL: res[3].noncash_sell,
        GBP_BUY: res[2].noncash_buy,
        GBP_SELL: res[2].noncash_sell,
    })

    await ModelRate.Converse_C.updateOne({} , {
        USD_BUY: res[0].cash_buy,
        USD_SELL: res[0].cash_sell,
        EUR_BUY: res[1].cash_buy,
        EUR_SELL:res[1].cash_sell,
        RUR_BUY: res[3].cash_buy,
        RUR_SELL: res[3].cash_sell,
        GBP_BUY: res[2].cash_buy,
        GBP_SELL: res[2].cash_sell,
    })
} 
let interval = async ()=>{
    await setInterval(converse , 1000 * 3600)
  }
  interval();


let hsbc = async () => {
    console.log("start2")
    let res 
    try{
        let browser = await Puppeteer.launch({
            headless :true,
            slowMo:100,
            devtools:true
        })
        let page = await browser.newPage()
        await page.setViewport({
            width:1600 , height:900
        })
        await page.goto(`${hsbc_link}`)
        await page.waitForSelector("#content_main_basicTable_1 > table > tbody")
        let html = await page.evaluate(async() => {
            let page = []
            try {
                let table = document.querySelector("#content_main_basicTable_1 > table > tbody") 
                let trs = table.querySelectorAll("tr")
                let trs_to_use = [trs[5] , trs[6] , trs[9] , trs[10]]
                for(let i = 0 ; i < trs_to_use.length ; i++) {
                    let tds = trs_to_use[i].querySelectorAll("td")
                    let obj = {
                        currency:tds[0].innerText,
                        cash_buy:tds[3].innerText,
                        cash_sell:tds[4].innerText,
                        noncash_buy:tds[1].innerText,
                        noncash_sell:tds[2].innerText
                    }
                    page.push(obj)
                }
                return page
            } catch(err) {
                console.log(err)
            }
        })
        res = html
    } catch(err) { 
        console.log(err) ;
    } 

    await ModelRate.Hsbc_NC.updateOne({} , {
        USD_BUY: res[3].noncash_buy,
        USD_SELL: res[3].noncash_sell,
        EUR_BUY: res[0].noncash_buy,
        EUR_SELL:res[0].noncash_sell,
        RUR_BUY: res[2].noncash_buy,
        RUR_SELL: res[2].noncash_sell,
        GBP_BUY: res[1].noncash_buy,
        GBP_SELL: res[1].noncash_sell,
    })

    await ModelRate.Hsbc_C.updateOne({} , {
        USD_BUY: res[3].cash_buy,
        USD_SELL: res[3].cash_sell,
        EUR_BUY: res[0].cash_buy,
        EUR_SELL:res[0].cash_sell,
        RUR_BUY: res[2].cash_buy,
        RUR_SELL: res[2].cash_sell,
        GBP_BUY: res[1].cash_buy,
        GBP_SELL: res[1].cash_sell,
    })
}

let interval2 = async ()=>{
    await setInterval(hsbc , 1000*3600)
  }
  interval2();

app.get("/" , (req , res) =>{
    res.send("Hello Node.js")
})


app.post("/data" , async(req , res) => {
    let converse_cash = await ModelRate.Converse_C.findOne()
    let converse_noncash = await ModelRate.Converse_NC.findOne()
    let converse_card = converse_noncash
    let hsbc_cash = await ModelRate.Hsbc_C.findOne()
    let hsbc_noncash = await ModelRate.Hsbc_NC.findOne()
    let hsbc_card = hsbc_noncash
    // console.log(hsbc_cash)
    res.send({
        converse:{
            cash:converse_cash ,
            noncash:converse_noncash ,
            card:converse_card ,
        },
        hsbc:{
            cash:hsbc_cash ,
            noncash:hsbc_noncash ,
            card:hsbc_card
        }
    })
});


app.listen(8000);