const path = require('path') //used to utilize the built in modules
// console.log(path)  //path module exists to help you with paths in node js 

//Methods of path module

//1
console.log(path.resolve('./app1.js'))  //converts relative path to the absolute path

//2
console.log(path.relative('/','./temp/utils.js'))
//here it give the path from /(root) to the GIT folder
// tells the location of GIT folder relative to root 
//Solve the relative path from {from} to {to}. At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

//3
console.log(path.extname('./app1.js'))
//this gives the extension name of the path

//4
console.log(path.dirname('./FullStackWebDev1/utils.js'))
//this gives the parent directory name where the file is

//5
console.log(__dirname)
//this keyword give the directory name of the file we are using (app1.js)

console.log(path.join(__dirname, 'app1.js'))  //joins file with current directory.