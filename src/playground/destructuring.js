//
// ##  OBJECT DESTRUCTURING  ##
// 

// const person = {
//   name: 'Huad',
//   age: 27,
//   location: {
//     city: 'Bangkok',
//     temp: 30
//   }
// };

// const { name: nickName = 'Someone', age } = person;
// // equivalent to ---
// // const name = person.name;
// // const age = person.age;
// console.log(`Hi! this is ${nickName} and I'm ${age}.`);



// const { city, temp: tempWOW } = person.location;

// if (city && tempWOW) {
//   console.log(`It's ${tempWOW} in ${city} !`);
// }

// ######

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const add = (data) => {
  return data.a + data.b;
};
console.log(add({ a: 2, b: 4 }));

const doMathStuff = ({ x, y }, z) => {
  return x * y + z;
};
console.log(doMathStuff({ x: 3, y: 7 }, 50));


// ##############
//
// ##  ARRAY DESTRUCTURING  ##
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;

const [, , state = 'New York'] = address; 
// skip the first & second one and ignore the forth.

console.log(`You are in ${state}.`);

// ######

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}`);