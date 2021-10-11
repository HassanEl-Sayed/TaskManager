require('../src/db/mongoose')
const User =require('../src/modules/user')

// User.findByIdAndUpdate('6155dd78d0648b687e4e7fe9',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id , age) => {
      const user = await User.findByIdAndUpdate(id , {age})
      const count = await User.countDocuments({age})
      return count
}

updateAgeAndCount('6155dd78d0648b687e4e7fe9',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})