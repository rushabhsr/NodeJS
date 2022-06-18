let userId = process.env.USER_ID; // "239482"
let userKey = process.env.USER_KEY; // "foobar"
console.log(userId, userKey);
console.log(process.argv);

const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething()');
    // do something, and measure the time it takes
    doSomething();
    console.timeEnd('doSomething()');
    console.error('doSomething()');
};
measureDoingSomething();

// Variables from Outside
// $ USER_ID = 239482 USER_KEY = foobar node environmentVariable.js nodeVarfromOutfile = "Rushabh"
// [
//     'C:\\Program Files\\nodejs\\node.exe', --Default Variable (NODE PATH)
//     'D:\\My_WorkSpace\\MERNStack\\NodeJS\\environmentVariable.js', --Default Variable (CURRENT FILE)
//     'nodeVarfromOutfile=Rushabh'
// ]
// $ USER_ID = 239482 USER_KEY = foobar node environmentVariable.js "Rushabh"
// [
//     'C:\\Program Files\\nodejs\\node.exe', --Default Variable 
//     'D:\\My_WorkSpace\\MERNStack\\NodeJS\\environmentVariable.js', --Default Variable
//     'Rushabh'
// ]

var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
// node environmenVariables.js -x 3 -y 4 -n5 -abc foo bar baz
//Same Impact of - and --
// {
//     _: [ 'foo', 'bar', 'baz' ],
//     x: 3,
//     y: 4,
//     n: 5,
//     a: true,
//     b: true,
//     c: true,
//     beep: 'boop'
//   }
