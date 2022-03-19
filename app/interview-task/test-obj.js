let task = {
	action: `Create`,
	isDone: true,
	estHours: 16
};
console.log(typeof task.toString);

'use strict';
let task = { };
Object.defineProperty(task, `action`, {value: `doIt` });
task.action = `${task.action} now!`;
console.log(task.action);

let task = { };
Object.defineProperties(task, {
'action': {
		value: `doIt`
	}
});
let descriptor = Object.getOwnPropertyDescriptor( task, `action`);
console.log(descriptor);


let hours = 8, rate = 50;
let task = {
	hours,
	rate,
	'умножить'() { 	return this.hours * this.rate; }
};
console.log(task['умножить']());

let field = 'actual';
let hours = 8;
let task = { [field + 'Hours']: hours };
console.log(task);


let task = {
	action: 'Create',
	isDone: true
};
console.log(task.prototype);

let task1 = { id: 1 };
let task2 = { priority: 100 };
Object.setPrototypeOf(task1, task2);
console.log(task1.priority);

let task1 = { id: 1 };
let task2 = { id: 2, priority: 100 };
let task3 = { name: 'Implement…' };
Object.setPrototypeOf(task2, task3);
let target = {};
Object.assign(target, task1, task2);
console.log(target);

let Task = function(action) {
	this.action = action;
	return 10;
};
let task = new Task('create');
console.log(task.action);

let Task = function(action) {
	this.action = action;
	this.done = false;
};
console.log( Task.prototype.constructor === Task);
console.log( Task.prototype.constructor, Task);


const toBinary = (num) => {
  let binary = "";

  while (num > 0) { 
    num % 2 ? binary =  1 + binary : binary = 0 + binary;
    num = Math.floor(num / 2); 
  }
  return binary;
}
console.log(toBinary(10))



// const callPeriod = (time) => {
//   let interval = time;
//   setTimeout(function run() {
//     console.log(interval);
//     interval += time;
//     setTimeout(run, time);
//   }, time);
// }

// callPeriod(30);
