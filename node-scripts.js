//Async I/0
/*
var fs = require('fs');
var arr = undefined;
function getFile(callback) { 
fs.readFile(process.argv[2], function doneReading(err, fileContents){ 
    fileContents = fileContents.toString();
    arr = fileContents.split(/\n/);
callback()
 }); 
}

function logMyFile() { 
console.log(arr.length - 1);
}

getFile(logMyFile)
*/ 

//Filtered LS 
/* var fs = require('fs');
var path = require('path');
var pathName = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(pathName, function callback(err, list){ 

function getExt(value) { 
return path.extname(value) == ext; 
}
var arr = list.filter(getExt);
arr = arr.toString().replace(/,/gi, "\n"); 

console.log(arr);
}); 
*/ 

//Create Module 

/*var fs = require('fs');
var path = require('path');
var pathName = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(pathName, function callback(err, list){ 
 if(error) { 
 return console.log(err)
 }

function getExt(value) { 
return path.extname(value) == ext; 
}
var arr = list.filter(getExt);
arr = arr.toString().replace(/,/gi, "\n"); 

console.log(arr);
}); 
*/

/* Create Module 
var mymodule = require('./myModule.js');
var pathName = process.argv[2];
var extFilter = process.argv[3];

mymodule(pathName, extFilter, function(err, fileList) { 
if (err) {
console.log(err);
}

fileList.forEach(function (file) {
        console.log(file)
 });

});
*/ 

 // HTTP Client 

var http = require('http'); 

http.get(process.argv[0], function(res) { 
}).on("data", function(data) { 
console.log(data);
});


    


