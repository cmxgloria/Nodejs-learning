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
