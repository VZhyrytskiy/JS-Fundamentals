// function reverseInPlace(str){
//   console.log( str.split(' ').reverse().join(' ')
//   .split('')
//   .reverse()
//   .join('')
//   );

//   return str.split(' ').reverse().join(' ').split('').reverse().join('');
// }

// console.log(reverseInPlace('I am the good boy'));


// function swapNumb(a, b){
//   console.log('before swap: ','a: ', a, 'b: ', b);
//   b = b -a;
//   a = a+ b;
//   b = a-b;
//   console.log('after swap: ','a: ', a, 'b: ', b);  
// }

// swapNumb(2, 3);


// const children = [
//   { id: '1', age: 15, firstName: 'Donny' },
//   { id: '2', age: 14, firstName: 'Many' },
//   { id: '3', age: 15, firstName: 'Tony' },
//   { id: '5', age: 16, firstName: 'Peter' },
//   { id: '6', age: 10, firstName: 'Anna' }
//   ]

//   const newObj = children.reduce((acc, {firstName, id}) => (
//      {...acc, [firstName]: id}
//   ), {})
//   console.log('new', newObj)