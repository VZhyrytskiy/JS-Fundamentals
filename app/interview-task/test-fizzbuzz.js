const gen = (n, w) => (num) => num % n === 0 ? w : "";
const fizz = gen(3, "Fizz");
const buzz = gen(5, "Buzz");
[...Array(15).keys()]
  .map((i) => i + 1)
  .forEach((i) => console.log(i, fizz(i) + buzz(i) || i));

  

for (let i = 1; i < 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);
}
