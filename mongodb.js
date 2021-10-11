const {MongoClient,ObjectID} = require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=> {
     if (error) {
       return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)
////////////////////////////////////////////////////////////////////
//insert the data.

db.collection('users').insertOne({
    name: 'hhhhhh',
    age:18
}, (error, result) => {
    if(error){
        return console.log('Unable to insert user')
    }
    console.log(result.ops)
})

// db.collection('users').insertMany([
//     {
//         name:'Seif',
//         age:15
//     },{
//         name:'shahd',
//         age:20
//     } 
//   ],(error,result) => {
//       if(error){
//            return console.log('Unable to inser documents')
//       }

//       console.log(result.ops)
//   })
////////////////////////////////////////////////////////////////////////////////
//quiring dB

// db.collection('users').findOne({_id: new ObjectID("61508b18eeeecfeb9023a5ed")} ,(error,user) =>{
//     if(error){
//         return console.log('Unable to fetch')
//     }
//     console.log(user)
// })
 
// db.collection('users').find({age:15}).toArray((error , users) =>{
//     console.log(users)
// })

// db.collection('users').find({age:15}).count((error , users) =>{
//     console.log(users)
// })
//  db.collection('tasks').find({completed :false}).toArray((error,  tasks) => {
//   console.log(tasks)
//  })
///////////////////////////////////////////////////////////////////////////////////
//Update

  // db.collection('users').updateOne({
  //    _id: new ObjectID("61507fa609aeea9596802926")
  //  },{
  //    $set: {
  //      age:22
  //     }     
  //  }).then((result) => {
  //    console.log(result)
  //  }).catch((error)=>{
  //    console.log(error)
  //  })

//   db.collection('tasks').updateMany({
//     completed: false 
//   },{
//     $set:{
//       completed:true
//     }
//   }).then((result)=>{
//     console.log(result.modifiedCount)
//   }).catch((error)=>{
//     console.log(error)
//   })
///////////////////////////////////////////////////////////////////
//Delete

// db.collection('users').deleteMany({
//   age:15
// }).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })
//   db.collection('tasks').deleteOne({
//     description:"play"
//   }).then((result)=>{
//     console.log(result)
//     }).catch((error)=>{
//     console.log(error)
//  })
})
