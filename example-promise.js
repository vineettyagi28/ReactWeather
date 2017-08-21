// function getTempCallback (localtion, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//     resolve(79);
//     reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Noida').then(function(temp){
//   console.log('promise success', temp);
// }, function (err){
//   console.log('promise error', err);
// });

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }else{
        reject('I can add numbers only');
      }
    }, 1000)
  });
}

addPromise(2, 'sss').then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
