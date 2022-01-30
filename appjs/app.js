// var logger=require('./logger');
// logger.log('message')

//path module
// const path=require('path')
// const pathObj= path.parse(__filename)
// console.log(pathObj);

//os module
// const os=require('os')

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`total memory : ${totalMemory}`)
// console.log(`free memory : ${freeMemory}`)

//file system module
//  const fs= require('fs')

//  const files= fs.readdirSync('./')
//  console.log(files)

//  fs.readdir('./',function(err,files){
 
//  })

//even emitter module

//const EventEmitter = require('events');
// const Logger =require('./logger');
// const logger = new Logger();

// //register a listener
// logger.on('messageLogged',(arg)=> {
//     console.log('Listener called',arg);
// })

// logger.log('message') 

// // //raise an event
// // emitter.emit('messageLogged',{id:1,url: 'http://'})


//http module
const http = require('http')
const server= http.createServer((req,res) => {

    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end()
    }
})

//registering a listener
server.on('connection', (socket)=> {
    console.log('new connection..');
}

)
server.listen(3000);
console.log('Listening on port 3000')
