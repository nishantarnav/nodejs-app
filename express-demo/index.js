const config= require("config")
const logger= require('./middleware/logger')
const courses= require('./routes/courses')
const home= require('./routes/home');
const express= require('express')
const app=express()

app.set('view engine','pug')
app.set('views','./views')
//middleware to use in the app of request processing pipeline
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use('/api/courses',courses)
app.use('/',home)


//configuration
console.log('Application Name:' +config.get('name'))
console.log('Mail Server: '+config.get('mail.host'))
 console.log('Mail Password: '+config.get('mail.password'))



//check environmet
console.log(`Node_env: ${process.env.NODE_ENV}`)
//or
console.log(`app: ${app.get('env')}`)

//its use cases
// if(app.get('env')==='development'){
//     app.use(morgan('tiny'))
//     console.log("morgan enabled")
// }

//custom middleware
app.use(logger)   //shows dev by default 




//port
const port=process.env.PORT || 5000
app.listen(port,()=> {
    console.log(`Listening on port ${port}..`)
})