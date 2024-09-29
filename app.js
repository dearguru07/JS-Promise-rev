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
  


// function Download(){
//     console.log('btn clicked...')
//     console.log('feacthing the server')
//     let myPromise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('downloading the movie')
//         resolve()
//         },5000)
//     })
//     myPromise.then(()=>{
//         console.log('movoe downloaded')
//         console.log('movie storaded ur mbl')
//     }).catch(()=>{
//         console.log('server is broken')
//     }).finally(()=>{
//         console.log('fianally movie is watching')
//     })

// }


function Download(){
   let data= fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//    console.log(data)
    .then((data)=>{
        let originaData=data.json()
        console.log(originaData)
    })
}