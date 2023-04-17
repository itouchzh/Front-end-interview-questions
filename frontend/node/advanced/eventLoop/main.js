// node 的事件循环机制
//  同步任务 =》 nextTick => 微任务 =》timer (setTimeout, setInterval) => poll, check(setImmediate)
// 在执行事件循环时，如果当前timer、poll、check队列中没有要执行的代码，就会阻塞在poll这里，当其他队列有了再去执行
// console.log('first')

// process.nextTick(() => {
//     console.log('second')
// })

// Promise.resolve().then(() => {
//     console.log('third')
// })

// setImmediate(() => {
//     console.log('four')
// })
// console.log('five')

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
   
  async function async2() {
    console.log('async2')
  }
   
  console.log('script start')
   
  setTimeout(function () {
    console.log('setTimeout0')
  }, 0)
   
  setTimeout(function () {
    console.log('setTimeout2')
  }, 300)
   
  setImmediate(() => console.log('setImmediate'));
   
  process.nextTick(() => console.log('nextTick1'));
   
  async1();
   
  process.nextTick(() => console.log('nextTick2'));
   
  new Promise(function (resolve) {
    console.log('promise1')
    resolve();
    console.log('promise2')
  }).then(function () {
    console.log('promise3')
  })
   
  console.log('script end')
