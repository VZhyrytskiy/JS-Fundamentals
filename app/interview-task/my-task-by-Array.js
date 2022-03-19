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
  
  console.log(findOlderChildren(1));

    

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

