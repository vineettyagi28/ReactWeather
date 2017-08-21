var names = ['Vineet', 'Sandeep', 'Deep'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
})
