const express = require('express');
// const bodyParser = require('body-parser');
// const routesHandler = require('./routes/handler.js');
const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');
const app = express();

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// app.use('/', routesHandler);


const PORT = 4000; // backend routing port



// const fetch = async (input) => {
//     try {
//         return await axios(input)
//     } 
//     catch (error) {
//     return error
//         }
// }

//  async makes a function return a Promise
//  await makes a function wait for a Promise

const lookup = async () => { 
    const url = 'https://www.carmax.com/car/22967788';
    const res = await axios({url})
    const b = cheerio.load(res.data)
    return b.text()

    await axios(url).then((response) => {
        const htmlData = response.data;
        const $ = cheerio.load(htmlData);
        return $
    });
    }

    // const domTraverser = cheerio.load(page.data) 

    // const val = domTraverser('.price-mileage__car-title__year-make')

    // const text = val.text()





app.get('/tweets', async(req, res) => {

    try {
        const title = await lookup();
        console.log(title);
        return res.status(200).json({
          result: title,
        });
      } catch (err) {
        return res.status(500).json({
          err: err.toString(),
        });
      }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });


module.exports = app;