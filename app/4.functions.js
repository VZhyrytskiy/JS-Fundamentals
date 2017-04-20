console.log('Functions');


// Task 1. FDS
// Создайте функцию conc, которая должна конкатенировать два параметра a и b
// и возвращать строку. Используйте Function Declaration Statement (FDS).
// Вызовите функцию до ее объявления.
// Тестовые данные:
// a = '1', b = '1', result = '11'
// a = 1, b = 1, result = '11'



// Task 2. FDE
// Создайте функцию comp, которая должна сравнивать два параметра a и b и
// возвращать 1, если они равны и - 1, если они не равны.
// Используйте Function Definition Expression (FDE). Вызовите функцию перед ее
// объявлением.
// Тестовые данные:
// a = 'abc', b = 'abc', result = 1
// a = 'abC', b = 'abc', result = -1



// Task 3. AF
// Создайте анонимную функцию, которая должна выводить сообщение в коноль
// 'message in console'. Используйте ее как обработчик события click для кнопки.



// Task 4. NFE
// Создайте функцию fibo для вычисления чисел Фибоначчи по формуле
// F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Используйте Named Function Expression (NFE)
// Создайте функцию factorial для вычисления факториала числа по формуле
// Fn = 1 * 2 *..*n. Используйте Named Function Expression (NFE).



// Task 5. FC
// Получите тело и параметры функции от пользователя с помощью prompt
// (или проинициализируйте переменные строчными литералами). Создайте функцию
// на основе этой информации используя Function Constructor (FC).
// Вызовите эту функцию.



// Task 6. ArF
// Объявите массив arr = [1,8,3,5,12,7,9,11]
// Используя стрелочную функцию создать новый массив elem * elem < 100 и
// отсортировать его по возрастанию.



// Task 7. IIFE
// Напишите конструкцию, с помощью которой выполниться выше реализованная
// функция conc.



// Task 8. Arguments Object, Rest
// Создайте функцию parts, которая принимает несколько параметров.
// Каждый параметр – это группа предложений. Функция должна вырезать из параметра
// подстроку, начиная с символа двоеточие (:) и заканчивая символом точка (.).
// Функция должна возвращать массив подстрок.
// Используйте Function Definition Expression (FDE).
// Тестовые данные:
// param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
// param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."
// result = [“cherries, oranges, apples, bananas”, “red, blue, yellow, black”].



// Task 9. Optional Arguments
// Создайте функцию find(testString, test), которая должна возвращать позицию
// строки test в строке testString. Если второй параметр не задан,
// используйте test = testString. Используйте Function Definition Expression (FDE).
// Тестовые данные:
// testString = 'abc', test ='b', result = 1
// testString = 'abc', result = 0
// testString = 'abc', test = 'd', result = -1
// testString = 'abc', test='a', test2='b', result = 0



// Task 10. Function as an Object
// Создайте функцию str, которая принимает один строчный параметр и
// выводит alert('String is non empty'), если параметр - непустая строка и
// alert('String is empty'), если параметр – пустая строка.
// Создайте функцию isNonEpmtyStr, как свойство функции str. Эта функция должна
// принимать один параметр и возвращать true, если параметр непустая строка,
// иначе false. Используйте эту функцию для реализации условия в основной функции.
// Тестовые данные:
// str.isNonEmptyStr(), result = false
// str.isNonEmptyStr(''), result = false
// str.isNonEmptyStr('a'), result = true
// str.isNonEmptyStr(1), result = false
// str(), alert('String is empty')
// str('a'), alert('String is non empty')




// Task 11. Function as a Parameter
// Создайте функцию toConsole с одним параметром, которая выводит значение
// параметра в консоль.
// Создайте функцию toAlert с одним параметром, которая выводит значение
// параметра используя alert().
// Создайте функцию splitToWords с двумя параметрами: msg и callback.
// Функция должна разделять строку на слова и использовать колбек для отображения
// слов. Если второй параметр не задан, функция должна возвращать массив слов.
// Тестовые данные:
// splitToWords("My very long text msg", toConsole);
// result
// My
// very
// long
// text
// msg
// splitToWords("My very long text msg", toAlert);
// result = alert(My), ….
// console.log( splitToWords("My very long text msg") );
// result = ['My', 'very', 'long', 'text', 'msg']



// Task 12. Function as a Result
// Создайте функцию copyright, которая должна возвращать другую функцию с
// одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
// вначале своего параметра. Объявите этот знак в функции copyright.
// Тестовые данные:
// console.log( copyright()('EPAM') ); result = © EPAM.



// Task 13. Function as a Result
// Задание аналогично предыдущему, но в этот раз функция copyright получает знак
// как свой параметр.



// Task 14. Function as a Method
// Создайте литерал объекта employee со следующими свойствами:
// name: 'Ann', work – функция, которая выводит в консоль сообщение
// "I am Ann. I am working..."
// Тестовые данные
// employee.work()  результат в консоле "I am Ann. I am working..."



// Task 15. Borrow Method
// Создайте литерал объекта person со свойством name. Вызовите метод work
// объекта employee из предыдущего задания.



// Task 16. Memoization
// Создать функцию fiboMemo для вычисления чисел Фибоначчи по
// формуле F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
// которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
// определите время вычисления функции fibo и функции fiboMemo.




















