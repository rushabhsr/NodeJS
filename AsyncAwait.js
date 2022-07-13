// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('I did something'), 3000)
//   })
// }

// const doSomething = async () => {
//   console.log(await doSomethingAsync())
// }

// console.log('Before')
// doSomething()
// console.log('After')

console.time("Start")
const promiseToDoSomething = () => {
    return new Promise(resolve => {
        console.log("Promise Resolved")
        setTimeout(() => resolve('I did something'), 3000)

    })
}

const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    
    console.timeEnd("Start")
    return something + '\nand I watched'
}
  
  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
  })