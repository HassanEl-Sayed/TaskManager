require('../src/db/mongoose')
const Task =require('../src/modules/tasks')

// Task.findByIdAndDelete('6155e5cbcb50da5395c572f7').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async (id)=>{
   const task = await Task .findByIdAndDelete(id)
   const count = await Task.countDocuments({completed: false})
   return count
} 

deleteTaskAndCount('6154dde3fc8de60b1eb44e98').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})