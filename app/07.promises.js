console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const p1 = new Promise(
  () => {
    console.log('Promise is created');
  },
  () => {}
);
console.log(p1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const p2 = Promise.resolve('Promise Data').then(console.log);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const p3 = Promise.reject('Promise Error').then(console.log, console.log);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    return resolve('Promise Data');
  }, 3000);
}).then(console.log);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess: (paramName) => {
    console.log(`Promise is resolved with data: ${paramName}`);
  },
  onError: (paramName) => {
    console.log(`Promise is rejected with error: ${paramName}`);
  },
};
document.querySelector('#btn-create-promise').addEventListener('click', () => {
  handlePromise.promise = new Promise((resolve, reject) => {
    handlePromise.reject = reject;
    handlePromise.resolve = resolve;
  })
    .then((v) => handlePromise.onSuccess(v))
    .catch((v) => handlePromise.onError(v));
});
document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
  handlePromise.resolve('Promise Data');
});
document.querySelector('#btn-reject-promise').addEventListener('click', () => {
  handlePromise.reject('Promise Error');
});

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then

const handlePromise1 = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess: (paramName) => {
    console.log(`Promise is resolved with data: ${paramName}`);
  },
  onError: (paramName) => {
    console.log(`Promise is rejected with error: ${paramName}`);
  },
};
document.querySelector('#btn-create-promise').addEventListener('click', () => {
  handlePromise1.promise = new Promise((resolve, reject) => {
    handlePromise1.reject = reject;
    handlePromise1.resolve = resolve;
  })
    .then((v) => {
      handlePromise1.onSuccess(v);
      return v;
    })
    .then(handlePromise1.onSuccess)
    .catch((v) => handlePromise1.onError(v));
});
document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
  handlePromise1.resolve('Promise Data');
});
document.querySelector('#btn-reject-promise').addEventListener('click', () => {
  handlePromise1.reject('Promise Error');
});

// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

const p7 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('My name is');
  }, 1000);
});
const onSuccess = (str) => {
  return str + ' Alex';
};
const print = (str) => console.log(str);
p7.then(onSuccess).then(print);

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

const p8 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('My name is');
  }, 1000);
});
const onSuccess1 = (str) => {
  throw new Error('some error');
};
const print1 = (str) => console.log(str);
p8.then(onSuccess1).then(print1).catch(console.log);

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

const getPromiseData = (promise) => promise.then(console.log);
const obj = { name: 'Anna' };
const p9 = (obj) => new Promise((resolve) => resolve(obj));
getPromiseData(p9(obj));

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

const p10first = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: 'Anna' });
  }, 2000);
});
const p10second = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ age: 16 });
  }, 3000);
});
Promise.all([p10first, p10second])
  .then(([a, b]) => ({ ...a, ...b }))
  .then(console.log);

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

const p11first = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: 'Anna' });
  }, 2000);
});
const p11second = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise Error');
  }, 3000);
});
Promise.all([p11first, p11second])
  .then(([a, b]) => ({ ...a, ...b }))
  .catch(console.log);

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

const p12first = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise Data');
  }, 5000);
});
let rejectFunc;
const p12second = new Promise((resolve, reject) => {
  rejectFunc = reject;
});
document.querySelector('#btn-cancel-promise').addEventListener('click', () => {
  rejectFunc('Promise Canceled');
});
Promise.race([p12first, p12second]).then(console.log).catch(console.log);
