// const { val } = require('cheerio/lib/api/attributes');
const { text } = require('body-parser');
const express = require('express');
const router = express.Router();

// router.get('/tweets', (req, res) => {
//     const str = [
//         {
//             "name": "Codr Kai",
//             "msg": "This is my first tweet!",
//             "username": "codrkai"
//         },
//         {
//             "name": "Samantha Kai",
//             "msg": "React JS is so simple!",
//             "username": "samanthakai"
//         },
//         {
//             "name": "John K",
//             "msg": "Sweep the leg!",
//             "username": "johnk"
//         }
//     ];
//     res.end(JSON.stringify(str));
// });

// router.post('/addTweet', (req, res) => {
//     res.end('NA');
// });

// module.exports = router;




router.get('/tweets', (req, res) => {
    // import packages.

const axios = require("axios")
const cheerio = require("cheerio")
// const { writeFile } = require('fs/promises') 

// creating axios object


const fetch = async (input) => {
    try {
        return await axios(input)
    } 
    catch (error) {
    return error
        }
}

//  async makes a function return a Promise
//  await makes a function wait for a Promise

const lookup = async () => {  //  Ensure to use this function style.
  const page = await fetch({  // downloading of the page.
    url: 'https://www.carmax.com/car/22967788',
    })



  // used to extract data/tags.
  // create a cheerio(domTraverser)object.
  // extract info from page.data using cherrio.load method.

    const domTraverser = cheerio.load(page.data) 

    const val = domTraverser('.price-mileage__car-title__year-make')

    const text = val.text()


}
    lookup().then((text) => res.end(JSON.stringify(text)))
});

// router.post('/addTweet', (req, res) => {
//     res.end('NA');
// });

module.exports = router;






