const express = require('express');
const { connection } = require('./src/connection');
const app = express();

connection();

const Faculty = require('./src/FacultyModel');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'api-docs')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'api-docs/index.html'))
})

app.get('/faculty', async (req, res) => {
    res.json(await Faculty.find());
})

app.get('/faculty/:id', async (req, res) => {
    const data = await Faculty.findOne({ _id: req.params.id })
    res.json(data ? data : {
        id: req.params.id,
        isFound: false,
        messege: "Faculty does not found"
    });
})

app.delete('/faculty/:id', async (req, res) => {
    res.json(await Faculty.deleteOne({ _id: req.params.id }));
})

app.post('/faculty', async(req, res)=>{
    res.json(await Faculty.create(req.body));
})

app.put('/faculty/:id', async(req, res)=>{
    try{
        await Faculty.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            acknowlwdge: true,
            updateCount:1
        })
    }
    catch(err){
        res.send(err);
    }
})

app.listen(3000, () => {
    console.log("App is Listing at port 3000");
})