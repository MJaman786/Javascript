// Localstorage Defination:
// LocalStorage is a part of the Web Storage API, which allows you to store data locally within
// the user's browser. It's a key-value storage system, meaning you store data using a
// unique key and retrieve it using the same key.
// LocalStorage is synchronous, meaning that it blocks the execution of other code until
// the data is stored or retrieved.

let user = {
    name: 'Rohan',
    age: 25,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: 10001
    },
    display: function () {
        console.table(user);
        // console.log(`\nName: ${user.name}`
        //     + `\nAge: ${user.age}`
        //     + `\nOccupation: ${user.occupation}`
        //     + `\nAddress : \nSTREET : ${user.address.street}\nCITY : ${user.address.city}\nSTATET : ${user.address.state}\nZIP : ${user.address.zip}`
        // );
    }
};

// localStorage.setItem('Name','Aman');
// localStorage.setItem('Age',25);
// localStorage.setItem('Occupation','Software Engineer');
// console.log(localStorage.getItem('Name'));

localStorage.setItem('product', JSON.stringify(user));
console.log(localStorage.getItem('product'));

let product2 = JSON.parse(localStorage.getItem('product'));
console.log(product2);

localStorage.removeItem('Age');
localStorage.removeItem('Name');

localStorage.clear()

