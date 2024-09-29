// console.log("one");
// console.log("two");

// let myPromise = new Promise((resolve, reject) => {
//   resolve();
//   console.log("three");
//   console.log("four");
//   console.lg("five");
// });
// myPromise.then(()=>{
//     console.log("six");
//     console.log("seven");
// }).finally(()=>{
//     console.log("eight");
// })



// let myPromise = new Promise((resolve, reject) => {
//     reject();
//     console.log("three");
//     console.log("four");
//     console.lg("five");
//   });
//   myPromise.then(()=>{
//       console.log("six");
//       console.log("seven");
//   }).finally(()=>{
//       console.log("eight");
//   })
  


function Download(){
    console.log('btn clicked...')
    console.log('feacthing the server')
    let myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('downloading the movie')
        resolve()
        },5000)
    })
    myPromise.then(()=>{
        console.log('movoe downloaded')
        console.log('movie storaded ur mbl')
    }).catch(()=>{
        console.log('server is broken')
    }).finally(()=>{
        console.log('fianally movie is watching')
    })

}