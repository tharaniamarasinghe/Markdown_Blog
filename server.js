const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const router = express.Router()
const app = express()
//var MongoClient = require('mongodb').MongoClient

/*
var url = "mongodb://localhost:27017/dtblog"

MongoClient.connect(url, function(err,dtblog){
    if (err) throw err
    console.log("Database created")
    db.close()
})
*/

mongoose.connect('mongodb://127.0.0.1:27017/dtblog', {useNewUrlParser: true})

//mongoose.connect('mongodb://localhost:27017/{DT_BLOG}')

/*, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
*/

app.set('view engine', 'ejs') //convert the ejs code in to html
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    //res.send('Hello') // respond with "Hi" when a GET request is made to the homepage
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', { articles : articles }) //render access views folder
})

app.use('/articles', articleRouter)

app.listen(5000)
