// Фархад
// this

let person = {  

  name: 'Superman',  

  getName: function() {  

      console.log(this.name);  

  } 

};  

person.getName()

// что будет?

setTimeout(person.getName, 1000); 

// что будет? почему indefined?

// Какие вариант решить эту проблему?

setTimeout(person.getName.bind(person), 1000); 
setTimeout(() => person.getName(), 1000); 

// -----------------------------------------------

// Получить из массива объект
let arr = ['name','family','age'] 

// to: 

// {  0: 'n',  1: 'f',  2: 'a'} 


const obj = {};

arr.forEach((el, index) => obj[index] = el.charAt(0))

console.log(obj)


// ----------------------------------------------

// const foo = (x) => (y) => (z) => x * y * z

console.log(foo(2)(3)(4)); // output : 24  

console.log(foo(4)(3)(4)); // output : 48 

function foo(x) {
  return function(y) {
    return function(z) {
      return  x * y * z
    }
  }
}




