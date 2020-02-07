import {sayHello,counterLevel,prossMessages,info} from './helpers'
import util from 'util';
import chalk from 'chalk'
const log = console.info;
//const info = (...args) => console.log(chalk.cyan(...args));

let obj = [{
  array: [ 1, 2, [3, 4], 5 ],
  boolean: true,
  null: null,
  number: 123,
  object: {
    a: "b",
    c: "d",
    e: "f"
  },
  string: "Hello World"
},
{
  pif: "pipe",
  empty: { "ʕ": "40k" },
  hellmood: [
    "◕",
    [ { hello : "<ﾆフ" },{ eros : "< 3" } ],
    "◕"
  ],
  "": { hugin: "ʔ" }
}]

const counter = counterLevel();
let arrWirte=[]
const deepMapKeys = (obj, callback = key => key) =>{
  return Array.isArray(obj)
    ? obj.map((val,i) => {
     // val !== null && typeof val === 'object'? info(util.inspect(obj,{colors:true, depth:null}),util.inspect(val,{colors:true, depth:null}) ,counter.next().value):false;
      val !== null && typeof val === 'object'?info({father:obj, child:val},counter.next().value):false
      return deepMapKeys(val, callback)
    })
    : typeof obj === 'object'? objectProces(obj,callback) : obj;
}

const objectProces = (obj, callback = key => key) =>
  Object.keys(obj).reduce((acc, current) => {
    const val = obj[current];
      //val !== null && typeof val === 'object'? info(current, util.inspect(val,{colors:true, depth:null}),counter.next().value):false;
      val !== null && typeof val === 'object'?info({father:current, child:val},counter.next().value):false
      acc[callback(current)] =val !== null && typeof val === 'object' ? deepMapKeys(val, callback) : (acc[callback(current)] = val);
      return acc;
    }, {})

const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
//console.log(upperKeysObj)