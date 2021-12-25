// pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
pipe = (...functions) => (value) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };

getName = (person) => person.name;

uppercase = (string) => string.toUpperCase();

get6Characters = (string) => string.substring(0, 6);

reverse = (string) => string.split('').reverse().join('');



let ans = pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
  )({ name: 'Buckethead' });

console.log(ans);