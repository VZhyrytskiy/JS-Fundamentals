'use strict'
console.log('Topic: Sync-Generators');

// Task 1. 
// RU: Наишите функцию-генератор generateSequence, которая генерирует числа в диапазоне от start до end.
// EN: Create function-generator generateSequence, which generates and returns numbers from start to end.

// const generateSequence = function*(n, m){
//     for(let i = n; i <= m; i ++){
//         yield i
//     }
// }
// console.log([...generateSequence(3,15)])

// Task 2. Long Sequences
// RU: Создать массив из чисел от 1 до 1000. 
//     Реализовать функцию-генератор для формирования всех пар из этого массива.
//     Генератор возвращает одну пару за один раз.  
//     Результат [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]
// EN: Create an array of numbers from 1 to 1000.
//     Implement a generator function to create all pairs from this array.
//     Result [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]

// const getIterator = num => {
//     const iterator = {[Symbol.iterator]: () => {
//         const skipFromStart = 1
//         const iteratorArrayKeys = Array(num + skipFromStart).keys()
//         for(let i = 0; i < skipFromStart; i ++){
//             iteratorArrayKeys.next()
//         }
//         return {
//             next: () => {
//                 const result = iteratorArrayKeys.next()

//                 return result
//             }
//         }
//     }, }

//     return iterator
// }

// const generateSequence = function*(num){
//     const iteratorI = getIterator(num)[Symbol.iterator]()
//     let [resultI, resultJ,] = [undefined, undefined,]

//     while( resultI = iteratorI.next() ){
//         const {done} = resultI
//         if(done){break}

//         const iteratorJ = getIterator(num)[Symbol.iterator]()
//         while( resultJ = iteratorJ.next() ){
//             const {done} = resultJ
//             if(done){break}

//             const [i, j, ] = [resultI.value, resultJ.value,]

//             yield [i, j, ]
//         }
//     }
// }

// const sequenceGenerator = generateSequence(1000)

// let val = undefined
// while(val = sequenceGenerator.next().value){
//     console.log(val)
// }



// Task 3. 
// RU: Реализуйте функцию генерации чисел Фибоначчи до бесконечности
// EN: Implement the infinite function-generator of generating Fibonacci numbers

// const fibGenClosure = () => {
//     let [prev, sum] = [0, 1]

//     function* fibGen(){
//         while(true){
//             const following = prev + sum
//             prev = sum
//             sum = following

//             yield sum
//         }
//     }

//     return fibGen
// }

// const fibGen00 = fibGenClosure()();

// [...Array(10)].forEach(() => {console.log(
//     fibGen00.next().value
// )})

// Task 4. yield* 
// RU: Реализуйте функцию-генератор, которая будет генерировать последовательность 
//     символов от 0 до 9, затем от a до z, затем от A до Z. Воспользуйтесь функцией генератором
//     generateSequence, реализованой выше, String.fromCharCode(code), и диапазоном чисел от 48 до 57,
//     от 65 до 90 и от 97 до 122
// EN: Create a function-generator that will generate a sequence
//     characters from 0 to 9, then from a to z, then from A to Z. 
//     Use the function-generator generateSequence implemented above, 
//     String.fromCharCode (code), and a range of numbers from 48 to 57,
//     65 to 90 and 97 to 122

// const generateSequence = function*(n, m){
//     for(let i = n; i <= m; i ++){
//         yield i
//     }
// }

// const generateChars = function*(){
//     const pairs = [ [48, 57,], [65, 90, ], [ 97, 122, ], ]
//     for(let i = 0; i < pairs.length; i ++)
//     {
//         const pair = pairs[ i ]
//         const generateNumber = generateSequence(...pair)
//         yield* [...generateNumber].map(i => String.fromCharCode(i))
//     }
// }

// console.log([...generateChars()])

// Task 5. Sync Piping
// RU: Создайте-функцию генератор multipleByTwo, которая принимает массив чисел, 
//     умножает каждое число на 2 и возвращает их по одному
//     Создайте-функцию генератор minusOne, которая принимает массив чисел, 
//     отнимает 1 и возвращает их по одному
//     Создайте-функцию генератор isMultipleOfThree, которая принимает массив чисел, 
//     и возвращает только те, которые делятся на 3 без остатка по одному
//     Объявите массив от 0 до 9
//     Вызовите первую функцию и передайте ей массив, результат этой функции передайте второй
//     а затем результат второй передайтетретей.
//     Примените спред оператор к резульату третей функции и создайте массив тех чисел, 
//     которые останутся
// EN: Create a function-generator multipleByTwo that takes an array of numbers,
//     multiplies each number by 2 and returns them one at a time
//     Create a function-generator minusOne that takes an array of numbers,
//     takes 1 and returns them one at a time
//     Create a function-generator isMultipleOfThree that takes an array of numbers,
//     and returns only those that are divided by 3 without remain part one at a time
//     Declare an array from 0 to 9
//     Call the first function and pass an array to it, pass the result of this function 
//     to the second and then the result of the second pass to the third function.
//     Apply the spread operator to the result of the third function and create an array 
//     of those numbers which will remain

// const generateSequence = function*(n, m){
//     for(let i = n; i <= m; i ++){
//         yield i
//     }
// }

// const multipleByTwo = function*(nums){
//     for (const num of nums){
//         const multiplied = 2 * num
//         yield multiplied
//     }
// }

// const minusOne = function*(nums){
//     for(const num of nums){
//         const decremented = num - 1
//         yield decremented
//     }
// }

// const isMultipleOfThree = function*(nums){
//     for(const num of nums){
//         const isMatched = ( 0 ===  (num % 3) )
//         if( isMatched ){
//             yield num
//         }
//     }
// }

// const numsToTen = [... generateSequence(0,9)]
// console.log([... isMultipleOfThree(minusOne(multipleByTwo(numsToTen))) ])

// Task 6. Communication with Infinite Generator
// RU: Реализуйте бесконечную функцию-генератор calculation, которая будет выводить выражения
//     a + b = ?, где a, b будет случайно генерировать и запрашивать у пользователя ответ.
//     Если ответ верный, то писать в консоль true, иначе false. 
//     Запустите код в консоли браузера
// EN: Implement an infinite calculation generator-function that will output expressions
//     a + b = ?, where a, b will be randomly generated and request a response from the user.
//     If the answer is correct, then write true to the console, otherwise false.

// function* numGenerator(){
//     const makeNum = () => {
//         const num = Math.floor(10 *  Math.random())

//         return num
//     }
//     while(true){
//         const [a, b,] = [makeNum(), makeNum(),]
//         yield {a, b, }
//     }
// }

// function* calculation(){
//     while(true){
//         const {a, b, } = numGenerator().next().value
//         const sum = a + b

//         const userInput = parseInt( prompt( `${a} + ${b} = ?`, `` ))

//         const result = ( sum === userInput )

//         yield(result)
//     }
// }

// const it = calculation()
// for( const cmpResult of it ){
//     console.log(cmpResult)
//     break
// }

// Task 7. throw method
// RU: Модифицируйте код предыдущего задания так, чтобы при вызове it.throw() генератор 
//     не прекращал свою работу
// EN: Modify the code of the previous task so that when it.throw() is called, the generator
//     did not stop its work


// function* numGenerator(){
//     const makeNum = () => {
//         const num = Math.floor(10 *  Math.random())

//         return num
//     }
//     while(true){
//         const [a, b,] = [makeNum(), makeNum(),]
//         yield {a, b, }
//     }
// }

// function* calculation(){
//     const numGen = numGenerator()
//     while(true){
//         let result = undefined
//         try{
//             const {a, b, } = numGen.next().value
//             const sum = a + b

//             const userInput = parseInt( prompt( `${a} + ${b} = ?`, `` ))

//             result = ( sum === userInput )
//             // const argFromNext =
//             yield result
//             // console.log( `argFromNext: '${argFromNext}'` )
//         }
//         catch(e){
//             console.log(`Catched: ${e}`)
//             yield result
//         }
//     }
// }

// const it = calculation()
// // console.log(it.next().value)
// // console.log(it.next().value)
// // console.log(it.next(112).value)

// let i = 0
// for( const cmpResult of it ){
//     i ++

//     console.log(cmpResult)
//     it.throw( new Error( `It is Error` ) )

//     if( 5 < i ){it.return()}
// }

// Task 8. 
// RU: В коллекции хранятся все имена пользователей, которые присоединились 
//     к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте генератор, который на вход получает этот объект и 
//     возвращает только имена администраторов по одному за вызов.
// EN: The collection stores all the usernames that joined
//     to a specific telegram group.
//     A boolean flag indicates whether the user is a group administrator.
//     Create a generator that receives this object as input
//     and returns only admin names.

// const users = {
//   anna: false,
//   boris: true, // admin
//   christina: false,
//   dave: false,
//   elena: false,
//   felix: true,  // admin
// };

// const namesGenerator = function*(users){
//     const entries = Object.entries(users)
//     for( const entry of entries ){
//         const[ name, isAdmin ] = entry
//         if( isAdmin ){
//             yield name
//         }
//     }
// }

// console.log([...namesGenerator(users)])