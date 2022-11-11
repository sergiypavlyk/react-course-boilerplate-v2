const person = {
  name: 'Sergiy',
  age: 25,
  location: {
    city: 'NY',
    temp: 92,
  }
};

const { age, personName: firstName = 'Anonymous' } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);

}

const book = {
  title: 'title',
  author: 'author',
  publisher: {
    name: 'PublisherName'
  }
}

const { name: publisherName = 'Self' } = book.publisher;
console.log(publisherName);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

