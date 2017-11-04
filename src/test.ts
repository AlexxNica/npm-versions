var jsonPromise = new Promise(function (resolve, reject) {
  resolve(JSON.parse(`{
    "heading": "<h1>A story about something</h1>",
    "chapterUrls": [
      "chapter-1.json",
      "chapter-2.json",
      "chapter-3.json",
      "chapter-4.json",
      "chapter-5.json"
    ]
  }`));
});

jsonPromise.then(function (data) {
  console.log('It worked!\n', data);
}).catch(function (err) {
  console.log('It failed!\n', err);
}).then(function(){
  console.log('Aftermath.');
}).then(function(){
  console.log('Another aftermath!');
})
