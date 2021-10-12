const {calculateTip,fahrenheitToCelsius,CelsiusTofahrenheit,add} = require('../src/math')

test ('Should calculate total with tip',()=>{
    const total = calculateTip(10,.3)
    expect(total).toBe(13)

    // if(total!==13){
    //   throw new Error ('total tip should be 13. got ' +total)
    // }
})


test ('Should convert 32 F to 0 C',()=>{
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})


test ('Should convert 0 C to 32 F',()=>{
    const temp = CelsiusTofahrenheit(0)
    expect(temp).toBe(32)
})


// test('Async test demo' , (done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         done()
//     },2000)
// })

test('Should add 2 number' , (done)=>{
   add(2,3).then((sum)=>{
       expect(sum).toBe(5)
       done()
   })
})
test('Should add 2 number async/await' , async ()=>{
    const sum= await add(10,22)
    expect(sum).toBe(32)
 })




// test('Hello world!' , ()=>{

// })

// test('This should fail' , ()=>{
//     throw new Error ('fail')
// })