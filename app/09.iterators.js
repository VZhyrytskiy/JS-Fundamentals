'use strict'

console.log('Topic: Iterators');
// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.

// function keyValueIterable(target){
//     const targetEntries = Object.entries(target)
//     // return entries

//     // const targetKeys = Object.keys(target)
//     const targetLength = targetEntries.length
//     let targetIndex = 0;
//     target[Symbol.iterator] = () => {
//         return {
//             next: () => {
//                 const done = targetLength <= targetIndex
//                 let value = undefined

//                 if( ! done ){
//                     value = targetEntries[targetIndex]
//                 }

//                 targetIndex ++
//                 const result = {done, value}

//                 return result
//             }
//         }

//     }

//     return target
// }

const colors = {
  green: '#0e0',
  orange: '#f50',
  pink: '#e07'
};

// colors[Symbol.iterator] = () => {
//     const colorsEntries = Object.entries(colors)
//     const colorsLength = colorsEntries.length
//     let colorsIndex = 0
//     return {
//         next: () => {
//             let value = undefined

//             const done = (colorsLength <= colorsIndex)
//             if( ! done ){
//                 value = colorsEntries[colorsIndex]
//             }

//             colorsIndex ++

//             const result = { value, done, }
//             return result
//         }
//     }
// }

// const keyValueIterable  = colors => colors

// const itColors = keyValueIterable(colors);
// for (const [, color] of itColors) {
//   console.log(color);
// }


// Task 2
// RU: В коллекции хранятся все имена пользователей, которые присоединились к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте итератор, который возвращает только имена администраторов.
// EN: The following collection store all the names of the user that have joined a particular telegram group. 
//     The boolean flag indicates whether a user is an administrator of the group.
//     Сreatereate an iterator that returns only the administrators' names.

const users = {
  anna: false,
  boris: true, // admin
  christina: false,
  dave: false,
  elena: false,
  felix: true,  // admin
};

// users[Symbol.iterator] = () => {
//     const entries = Object.entries(users)
//     const entriesLength = entries.length
//     let currentIndex = 0
//     let done = false
//     return {
//         next(){

//             let user = undefined
//             while(true){
//                 let isAdmin

//                 const entry = entries[Symbol.iterator].next()
//                 [ user, isAdmin ] = entry
//                 if(isAdmin){ break }

//                 currentIndex ++
//                 done = entriesLength <= currentIndex

//                 if( done ){ break }
//             }

//             const value = user

//             const returnValue = { value, done }
//             return returnValue
//         }
//     }
// }

// users[Symbol.iterator] = () =>{
//     const usersEntries = Object.entries(users).filter(el => el[1])
//     const usersLength = usersEntries.length
//     let usersIndex = 0
//     return {
//         next: () => {
//             let value = undefined
//             const done = usersLength <= usersIndex

//             if( ! done ){
//                 const usersEntry = usersEntries[usersIndex]
//                 value = usersEntry[0]
//             }

//             usersIndex ++

//             const result = {value, done, }
//             return result
//         }
//     }
// }

// [...users].forEach(name => console.log(name)); // boris, felix 


// Task 3
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random

// const random = {
//   [Symbol.iterator]: () => ({
//     next: () => ({
//       value: Math.random()
//     })
//   })
// };

// const take = (iterable, num) =>{
//     // const items = Array(num)
//     const iterator = iterable[Symbol.iterator]()
//     let iteratorIndex = 0
//     const taker = {
//         [Symbol.iterator]: () =>{
//             return {
//                 next: () =>{
//                     const done = num <= iteratorIndex
//                     let value = done ? undefined : iterator.next()

//                     iteratorIndex ++

//                     const result = { value, done }
//                     return result
//                 }
//             }
//         }
//     }

//     return taker
// }

// const a = [...take(random, 3)];
// console.log(a);


// Task 4
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

// const fib = {
//     [Symbol.iterator]: () => {
//         let prev = [... Array(2).keys()];
//         return {
//             next: () => {
//                 const done = false
//                 const value = prev[0] + prev[1]

//                 prev = [ prev[1], value, ]

//                 const result = {value, done,}
//                 return result
//             }
//         }
//     }
// }

// const Fib = {
//     [Symbol.iterator]: () => {
//         let fibIndex = 0;
//         const fibIterator = fib[Symbol.iterator]()
//         let done = false
//         return {
//             next: () => {
//                 let value = fibIterator.next()
//                 // done = done || (10 <= fibIndex)

//                 fibIndex ++

//                 const result = value // {value, done,}
//                 return result
//             },
//             [`return`]: () => {
//                 done = true
//                 return { done }
//             },
//         }
//     }
// }

// for (let v of Fib) {
//   console.log(v);
//   if (v > 50) break;
// }


// Task 5
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

// Number.prototype[Symbol.iterator] = function(){
//     const numberValue = this.valueOf()
//     const isNegative = -1 === Math.sign(numberValue)
//     const valuesLimit = Math.abs(numberValue)

//     let valuesIndex = 0
//     return {
//             next: () =>{
//                 const done = valuesLimit < valuesIndex

//                 let value = valuesIndex
//                 if( isNegative ) {value = - value}

//                 valuesIndex ++

//                 const result = {value, done,}
//                 return result
//             }
//         }
// }

// console.log([...-5]);
// console.log([...5]);
