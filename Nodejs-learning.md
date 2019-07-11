https://www.youtube.com/watch?v=zQRrXTSkvfw&list=LLIZOHI1C_qph0CwVtzsADkQ&index=10&t=0s       nodejs



https://app.pluralsight.com/library/courses/nodejs-getting-started/table-of-contents           nodejs-teaching-lessons

## introduction
nodejs ---
different way of thinking
picking good options
small packages

what is callback? It is a function that node will "call back" in later point in the time of program.

## getting started
cr..single tab  then search to the cr... that word
c...double tab the search all the words start with c

setTimeout sample
```
const rocks = who =>{
console.log('who'+ 'rocks');
};
setTimeout(rocks, 2*1000, 'Plurasight');
//print from the node (Plurasight rocks)
```

```
const funcOne = delay => {
  console.log('Hello after ' +  delay + ' seconds');
};
setTimeout(funcOne, 4*1000, 4);
setTimeout(funcOne, 8*1000, 8);
//`Hello after 4 seconds'
'Hello after 8 seconds'
```

setInterval for looping the time every seconds until stop if press the control+C
```
setInterval (()=>console.log('Hello every 3 seconds'),3000);
```

if you do not want to see the message then see the sample as below
```
const timeId = setTimeout(()=>console.log('You will not see this one.'),0);
//setImmediate
clearTimeout(timeId);
//clearInterval
//clearImmediate
```

```
setTimeout(()=>console.log('Hello delay 0.5 seconds'),500);
for(i=0;i<1e10;i++){
  //Block Node Synchronously
}
```

Timer to stop after a certain times
```
let counter = 0;
const intervalId = setInterval(()=>{console.log('hello for 5 times');
  counter +=1;
  if(counter===5){console.log('Done');
    clearInterval(intervalId);
  }
  
},1000)
//'hello for 5 times'
'hello for 5 times'
'hello for 5 times'
'hello for 5 times'
'Done'
```

## Node CLI
REPL and execute script
not sure this one
```
process.stdin.on('readable',()=>{
  const chuck= process.stdin.read();
  if(chuck!==null){
    process.stdout.write(chuck);
  }
});
```

## variable and block scopes

## class
```
class Person{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log(`Hello ${this.name}`);
  }
}
class Student extends Person {
  constructor(name,level){
    super(name)
    this.level = level;
  }
  greet(){
    console.log(`Hello ${this.name} from ${this.level}. `);
  }
}
const o1 = new Person('Max');
const o2 = new Student('Tina','grade 1');
const o3 = new Student('Matt', 'grade 2');

o3.greet = () => console.log('I am a specail.');

o1.greet()
o2.greet()
o3.greet()
//'Hello Max'
'Hello Tina from grade 1. '
'I am a specail.'
```

## async await
```
const https = require('https');
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}
fetch('https://www.jacascript.com/')
  .then(data => {
    console.log(data.length)
  });
(async function read() {
  const data = await fetch('https://www.jacascript.com/');
  console.log(data.length);
})();
```


# NPM
why npm?
share code with other developers
re-use own code in other projects
use code written by others

## npm command
npm -v
6.1.0
if install the lastest version
npm install -g npm


npm i express
 
 ## package.json and package-lock.json
 after you install, it shows on dependency
 such as 
 npm i lodash
 
 ```
 if 
 npm i -D nodemon  (//D for developer)
 so it show another like as below
 "devDependencies":{
 "nodemon":"^1.17.5"
 }
 ```
 npm init --yes
 it shows all the package.json of your project if you already link with git
 
 ## npm use the semantic versioning(semVer)
 eg 4.2.0
 first-Major Breaking Changes
 second--Minor Backward Compatible
 third--Patch Bug Fixes
 eg ~4.2.0 can change 4.2.x(x can be any greater than 0)
 eg ^1.2.3 can change 1.x.y(x can be any greater than 2 and y can be any greater than 3)
 
 ## npm install
 ---99% install from local
---- 1% install from globle, like the create-react-app
npm i -g create-react-app

## npm create and publish

## npx and the npm run script
npm start
npm test // normally for local
npx jest // can work outside the local
npm run check

npx eslint// can work outside the local
npx eslint --init

## update npm package
if 
npm unistall express
then the express from dependencies will be gone

npm show request version
request is one of dependencies, it shows all the request versions

```
npm outdated
package current wanted  latest   location
lodash  4.16.6  4.16.6  4.17.10   5-update
npm update
```
it shows all details

npm i lodash@latest
npm show lodash version

review 
yarn(yarnpkg.org)
npm command
local and global installs

# defining and node modules

## node global object

## errors vs exceptions
error is a problem
exception is a condition

```
const path = require('path');
const fs = require('fs');
const files = ['.bash_profile', 'hkhhkh', '.npmrc'];
files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);

  } catch (err) {
    console.log('File not Found');
  }
});
// File data is....
// File not Found
// File data is....

// IF LIKE AS BELOW
//....
const path = require('path');
const fs = require('fs');
const files = ['.bash_profile', 'hkhhkh', '.npmrc'];
files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath, 'hkhhygfd');
    console.log('File data is', data);

  }
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not Found');
    } else {
      throw err;
    }
  }
//Error.....
```
## node clusters
```
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}
main();
console.log('TEST');
```

sample
```
const (readFile) = require('fs').promises;

async function main() {
  const data = await readfile(__filename);
  console.log('File data is', data);
}
main();
console.log('TEST');
```
## Event emitter 
```
const EventEmitter = requrie('events');
const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');
myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
//nothing to print
myEmitter.emit('TEST_EVENT');
// if add this one here again, print 3 times of 'TEST_EVENT was fired'


//use event emitter
const EventEmitter = requrie('events');
const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit('TEST_EVENT');
});
myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
//'TEST_EVENT was fired'
//'TEST_EVENT was fired'
//'TEST_EVENT was fired'
```

