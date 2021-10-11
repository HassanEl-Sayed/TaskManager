const express = require('express')
require('./db/mongoose')
const userRouter =  require('./routers/user')
const taskRouter =  require('./routers/tasks')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})

// app.use((req,res,next)=>{
    //     if(req.method === 'GET'){
        //         res.send('Get request are disable')
        //     }else{
            //         next()
            //     }
            // })
            
            // app.use((req, res , next)=>{
                //     res.status(503).send('Site is currently down .check back soon!')
                // })
                
                
                //bcrypt
                // const myFunction = async () =>{
                    //     const password = 'Red12345!'
                    //     const hashedPassword = await bcrypt.hash(password, 8)
                    //     console.log(password)
                    //     console.log(hashedPassword)
                    //     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
                    //     console.log(isMatch)
                    // }
                    
//jsonwebtoken
//  const myFunction = async () =>{
    //         const token = jwt.sign({ _id:'abc123' }, 'this is my new cource', {expiresIn:'7 days'})
    //         console.log(token)
    
    //         const data = jwt.verify(token , 'this is my new cource')
    //         console.log(data)
    
    // }
    
    //  myFunction()
    
    
    // const Task = require('./modules/tasks')
    // const User = require('./modules/user')
    
    // const main = async () => {
        //     const task = await Task.findById('61605b4b2cb748d14ae2d7c6')
        //     await task.populate('owner')
        //     console.log(task.owner)
        //     // const user = await User.findById('61605b2b2cb748d14ae2d7be')
        //     // await user.populate('tasks')
        //     // console.log(user.tasks)
        // }
    // main()

//Upload
// const upload = multer ({
//     dest: 'images',
//     limits : {
//         fileSize : 1000000
//     },
//     fileFilter(req , file , cb){
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error ('please upload a PDF'))
//         // }
//         if(!file.originalname.match(/|.(doc|docx)$/)){
//         return cb(new Error ('please upload a word document'))
//     }
//        cb(undefined , true )
       
//     }
// })

// app.post('/upload' ,upload.single('upload') , (req,res) =>{
//     res.send(), (error , req , res ,next) =>{
//         res.status(400).send({error : error.message})
//     }   
// })