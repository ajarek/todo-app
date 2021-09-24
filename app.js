const express = require('express')
const mongoose = require('mongoose')
const {port,database} = require('./config')

const app = express()

mongoose.connect(database,()=>{
    console.log('connect database');
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
//routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))

app.listen(port, () => {
    console.log('Server started listening:' + port);
})