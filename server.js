const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const router = express.Router()
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/dtblog', {useNewUrlParser: true})

/*, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
*/

app.set('view engine', 'ejs') //convert the ejs code in to html
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', async (req,res) => {
    //res.send('Hello') // respond with "Hi" when a GET request is made to the homepage
    const articles = await Article.find().sort({ createdAt: 'desc'})
    res.render('articles/index', { articles : articles }) //render access views folder
})

app.use('/articles', articleRouter)

app.listen(5000)
