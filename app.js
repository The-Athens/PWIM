const express = require('express')
const app = express()

const cors = require('cors')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 8080


app.use(cors())
app.use('/public', express.static( path.join(__dirname, '/public')))
app.use('/views', express.static( path.join(__dirname, '/views')))
app.use('/jquery', express.static( path.join(__dirname, '/node_modules/jquery')))
app.use('/bootstrap', express.static( path.join(__dirname, '/node_modules/bootstrap')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render(path.join(__dirname, 'views/index'), {title: 'Home'})
    res.end()    
})

app.listen( port, () => {
    console.log(`listening on port ${port}`)
})
