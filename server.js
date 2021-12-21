const express = require('express')
const articleRouter = require('./routes/articles')
const router = express.Router()

const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

// respond with "Hi" when a GET request is made to the homepage
app.get('/', (req,res) => {
    //res.send('Hello')
    res.render('index') //render access views folder
})

app.listen(5000)
