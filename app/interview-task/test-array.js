// const entries = ['a','b','c','d'];
// const r = entries.splice(2,0, 'ADC');
// console.log(entries.toString());

// const entries = [1,3,4,56,7,3,5,5,3,3,3,3,3];
// let isFound = false;
// let element;
// const newArray = entries.map((el, index, array) => {
//   if (!isFound && array.includes(el, index + 1))  {
//     isFound = true;
//     element = el;
//     return"*";
//   }
//   if (isFound && element === el) {
//     return"*";
//   }
//   return el;
// });

// console.log(entries);
// console.log(newArray);

// const entries = [1,3,4,56,7,3,5,5];
// const  binArr = entries.map(el => {
//   return +(el).toString(2);
// })
// console.log(binArr);

// const  binArr = entries.map(el => {
//   return +(el).toString(8);
// })
// console.log(binArr);

// const str = 'a big brown fox jumps over the lazy dog';
// str.split(' ').filter(w => w.length <= 3)


// const arr = ['a',1,'b',2];
// const res = arr.every(i => typeof i === 'string');
// console.log(res);

// const arr = [1,2,3,4,5];

// const binarySearch = (arr, value) => {
//   let index;
//   return (index = arr.slice(0, Math.floor(arr.length/2)).indexOf(value) === -1 ? false : index  ) ||
//   (index = arr.slice(Math.floor(arr.length/2)+1).indexOf(value) === -1 ? -1 : index);
// }

// console.log(binarySearch(arr, ))

// let field = “actual”;
// let hours = 8;
// let task = { [field + “Hours”]: hours };
// console.log(task);


// let task = {
// 	action: 'Create',
// 	isDone: true
// };
// console.log(task.prototype);


// let task = { isDone: false };
// let anotherTask = Object.create(task);
// console.log('isDone' in anotherTask);


// Вывести массив объектов с заданным значением возраста от максимального (1 - самый старший, 2 - второй по страришинству и т.д) 

const children = [
  { id: '1', age: 15, firstName: 'Donny' },
  { id: '2', age: 14, firstName: 'Many' },
  { id: '3', age: 15, firstName: 'Tony' },
  { id: '4', age: 16, firstName: 'Donny' },
  { id: '5', age: 16, firstName: 'Peter' },
  { id: '6', age: 10, firstName: 'Anna' }
  ];
  
  const findOlderChildren = (value) => {  
    children.sort((a, b) => b.age - a.age);
    const sortedSetOfAges = Array.from(new Set(children.map((child) => child.age)));
 
    return children.filter((child) => sortedSetOfAges[value - 1] === child.age) 
  };
  
  console.log(findOlderChildren(2));


// Получить на основе входящего массива массив с рандомным кол-вом элементов в диапазоне от min до max, не изменяя входной массив
const writers = [`Brad Bird`, `Robert Rodrigues`, `Takeshi Kitano`, `Hayao Miazaki`, `Robert Zemeckis`, `Martin Scorsese`, `Quentin Tarantino`, `Stephen King`];

const getRandomArray = function (arr, min, max) {
  const numberRandom = getRandomIntegerNumber(min, max);
  const arrClon = arr.slice();
  const arrNew = [];
  let numberArrRandom;

  for (let i = 0; i < numberRandom; i++) {
    numberArrRandom = getRandomIntegerNumber(0, arrClon.length - 1);
    arrNew.push(arrClon[numberArrRandom]);
    arrClon.splice(numberArrRandom, 1);
  }
  return arrNew;
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

console.log(getRandomArray(writers, 2, 5))

