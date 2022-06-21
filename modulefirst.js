// import {simple, simple2} from "./modulesecond.mjs"
// import * as a2 from "./modulesecond.mjs"
// import simple from "./modulesecond.mjs"
// import car from "./modulesecond.mjs"
// const simple = require("./modulesecond.mjs");

// simple()
// simple2()
// console.log(a2.simple())

// app.js
const tesla = require('./exposeModules');
const ford = require('./exposeModules').car;

console.log(tesla, ford);