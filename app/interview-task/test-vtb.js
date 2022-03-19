// создать из массива объект с ключами
const arr = ["prom1", "prom2", "prom3", "prom4"];
const obj = {};
arr.forEach((el) => {
  obj[el] = el;
});
console.log(obj);


const obj1 = arr.reduce((acc, current) => {
  return {...acc, 
    [current]: current,
  };
}, {});
console.log(obj1);

// получить через деструктуризацию
const employe = {
   id: '1', name: 'e1', salary: {reg: 2000, prise: 5000}, managerNames: ['Donny', 'Petr', 'Vim'],
};

const {salary: {reg}, managerNames: [, managerName, ...rest]} = employe;
  console.log(reg, managerName);

// непонятное задание дописать в промисе с использованием await asyn
function getUrl(url) {
   return new Promise((resolve, reject) => {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', url, true);
       xhr.onload = resolve;
       xhr.onerror = reject;
       xhr.send();
   })
}

// const response = await getUrl('google.com');

const response = getUrl('http://google.com')
    .then(function (e) {
        console.log(e.target.response,);
    }, function (e) {
        // handle errors
    });

    console.log(response);

// не нашел решения

async function getUrl(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        })
     }

  const response = getUrl('http://google.com')
  console.log(response)