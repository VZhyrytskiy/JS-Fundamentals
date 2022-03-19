// console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// function Tune(title, artist) {

//     this.title = title;
//     this.artist = artist;

//     this.concat = () => {
//       console.log(`${this.title} ${this.artist}`);
//       }
// }

// const o1 =new Tune("tit1', "art1");
// console.log(o1);

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// function Tune(title, artist) {

//     let title = title;
//     let artist = artist;

//     this.concat = () => {
//       console.log(`${this.title} ${this.artist}`);
//       }
// }


// function Tune(_title, _artist) {
//   const title = _title;
//   const artist = _artist;
  
//   Tune.prototype.concat = function() {
//     console.log(title + ' ' + artist);
//   }
// }

// const o1 = new Tune("tit1", "art1");
// console.log(o1);
// console.log(o1.concat);


// String.prototype.exclaim = String.prototype.exclaim ? String.prototype.exclaim : function() {​​
//   return `${​​this}​​!`;
// }
// if (!String.prototype.exclaim) {
//   String.prototype.exclaim = function() {​​
//     return '${​​this}​​!';
//   }
// }

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class


// const Book = (function() {

//   function Book(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   Book.prototype.getTitle = function() {
//     return this.title;
//   }

//   Book.prototype.getAuthor = function() {
//     return this.author;
//   }

//   return Book;
    
// })();

// const TechBook = (function() {

//   function TechBook(title, author, category) {

//     // this.title = title;
//     // this.author = author;
//     Book.call(this, title, author);
//     this.category = category;
//   }

//   TechBook.prototype = Object.create(Book.prototype);
//   TechBook.prototype.constructor = TechBook;
  

//   TechBook.prototype.getCategory = function() {
//     return this.category;
//   }

//   TechBook.prototype.getAuthor = function() {
//     return this.author;
//   }

//   return TechBook;
    
// })();
// const book = new Book('title1', 'artist1';)



// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.


// class Shape {
//   constructor() {
//     Shape.count++;
//   }
// }

// Shape.count = 0;

// class Rectangle extends Shape {
//   constructor(wedth, heidht) {
//     super();
//     this.width = wedth;
//     this.heidht = heidht;
    
//   }

//   calcArea() {
//     return this.width * this.heidht;
//   }
  
// }

// const o1 = new Rectangle(10,10);
// console.log(Shape.count);


// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)


// function Person( {

// })
// Person.prototype.setFirstName = function(value) {
//   this.setFirstName = value;
//   return this;
// }

// Person.prototype.setLasttName = function(value) {
//   this.setLastName = value;
//   return this;
// }

// const ob = new Person();
// ...

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.


// const data = {};
// Object.defineProperties(data, {
//   id: {
//     value: 1,
//     writable: true
//   },
//   type: {
//     value: 'primary',
//     enumerable: true
//   },
//   category: {
//     get() {
//       return this._category;

//     },
//     set(value) {
//       this._category = value;

//     },
//     enumerable: true,
//     configurable: true
    
      
//     }

  
// });
// data.category = 'javascript';
// console.log(data);
// for (const field in data) {
//   console.log(field);
// }




// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.






// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.

class Task {
  constructor(title) {
    this.title = title;
    // this.status = 'new';
  }
  toString() {
    return `[${this.status}] ${this.title}`;
  }

  complete() {
    this.status = 'completed';
  }
}
Task.prototype.status = 'new';

class TaskList {
  constructor() {
    this.tasks = new Set();
  }

  add(task) {
    this.tasks.add(task);
  }

  print() {
    this.tasks.forEach((task) => {
       console.log(task.toString());
    });
  }

  complete(task) {
      for(const t of this.tasks) {
        if (t.title ===task.title) {
          t.complete();
          break;
        }
      }
  }

  delete(task) {
    this.tasks.delete(task);
  }

  sort() {
    const arr = Array.from(this.tasks);
    arr.sort((o1, o2) => {
      return o1.title.localeCompare(o2.title);
    });
    return arr;
  }
}


const task1 = new Task('create');
task1.complete();
console.log(task1);
console.log(task1.status);
console.log(task1.toString());


