const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular
console.log('hello');

// Interpolated
console.log('hello I am A %s string!', '+poop');
// Styled
console.log('%c I am some great text', 'font-size: 40px');
// warning!
console.warn('OHHH NOOO!');
// Error :|
console.error('SHİT!');
// Info
console.info('25 years old');
// Testing
const p = document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'Ohhhh nooo');
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.map(dog => {
    console.group(dog.name);
    console.log(`This is ${dog.name} and ${dog.name} is ${dog.age} years old`);
    console.groupEnd(dog.name);
})
// counting
console.count('mustafa');
console.count('Yasin');
console.count('mustafa');
console.count('Yasin');
console.count('mustafa');
console.count('mustafa');
console.count('Yasin');
console.count('mustafa');
console.count('Yasin');
console.count('Yasin');
console.count('Yasin');
console.count('mustafa');
console.count('mustafa');
console.count('mustafa');
// timing
