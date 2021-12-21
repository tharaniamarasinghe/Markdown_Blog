const express = require('express')
const articleRouter = require('./routes/articles')
const router = express.Router()

const app = express()

app.set('view engine', 'ejs') //convert the ejs code in to html

app.use('/articles', articleRouter)

// respond with "Hi" when a GET request is made to the homepage
app.get('/', (req,res) => {
    //res.send('Hello')
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

app.listen(5000)
