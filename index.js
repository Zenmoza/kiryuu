const express = require('express');
const Axios = require('./tools');
const { JSDOM } = require('jsdom')
const app = express()

app.get('/', async(req,res)=>{
    res.send({status:200})
})
app.get('/:url', async(req,res)=>{
    try {
    const url = req.params.url
    let e = await Axios(`/${url}`);
    let { document: t } = await new JSDOM(e.data).window,
    title = t.querySelector('.entry-title').textContent,
    series = t.querySelector('.allc > a').href;
    let data = { status:200, title: title, series: series }
    res.send(data)

} catch (err) {
            
    res.send({status: 200, message: err.message});

};
})

const PORT = process.env.PORT || 80; 
app.listen(PORT, async () => {

    console.log('Listening on PORT ' + PORT);

});
