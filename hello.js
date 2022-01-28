const sayHello  = function (name) {
  console.log(`Hello, ${name}`);
}

sayHello('Christian');

const returnSayHello  = function (name) {
  return `Hello, ${name}`
}
const greeting = returnSayHello('Christian');
console.log(greeting);
