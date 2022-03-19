// Есть массив урлов и колбэк
// Нужно написать функцию, которая вызовет все урлы из массива
// и вызовет колбэк с ответами в порядке урлов в массиве
// Урлы могут повторяться, в случае повтора
// должен быть только один вызов этого урла.
// связать каждый урл с ответом на него


console.log('this0: ', this)
// Вспомогательная функция, эмулирующая запрос к API
"use strict"
async function fetchApi(url) {
  const value = Math.random() * Math.floor(3000)

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Result of: " + url)
    }, value)
  )
}

// Массив УРЛов
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/1/comments",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/1/comments",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/posts/1",
]

const urlsNew = Array.from(new Set(urls))

async function getdata(urls) {
  const newArr = []
  for (let i = 0; i < urls.length; i++) {
    const result = await fetchApi(urlsNew[i])
    newArr.push({ url: urls[i], result })    
  }
  console.log('this: ', this)
 return newArr
}

console.log('this1: ', this)

getdata(urlsNew).then((value) => console.log( value))

