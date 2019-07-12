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