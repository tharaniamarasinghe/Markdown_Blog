const express = require('express')
const router = express.Router()

router.get('/new', (req,res) => {
    res.render('articles/new')
})

router.post('/new', (req,res) => {  //handle post request
    
})

module.exports = router