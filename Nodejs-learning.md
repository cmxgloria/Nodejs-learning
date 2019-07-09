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

