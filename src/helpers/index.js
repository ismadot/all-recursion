import util from 'util';
import chalk from 'chalk'
const log = console.info;

const info = (...args) => log(chalk.cyan(...prossMessages([...args])));

const prossMessages = (args) =>{
	return args.map((item)=> item !== null && typeof item === 'object'? util.inspect(item,{colors:true, depth:null}):item)
}

let sayHello =(message)=> console.log(message)

function *counterLevel() {
	let count = 0;
	while(true) {
		yield count++;
	}
}

log

export {sayHello,counterLevel,prossMessages,info}