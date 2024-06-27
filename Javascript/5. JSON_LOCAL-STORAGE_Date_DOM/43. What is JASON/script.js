let product = {
    "name": "T-shirt",
    "price": 20,
    "brand": 'Nike',
    "rating": {
        "stars": 4.5,
        "noOfReviews": 455
    }
}
console.log(product);
console.log(typeof (product));

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

user.display();

// JSON Methods
// JSON.stringify() : converts a JavaScript value to a JSON string.
// JSON.parse() : parses a JSON string and returns a JavaScript value.
let jsonUser = JSON.stringify(user);
console.log(typeof(jsonUser));
console.log(jsonUser);
/*
IT is very easy to store or transport the data over the network
output
string
{"name":"Rohan","age":25,"occupation":"Software Engineer","address":{"street":"123 Main St","city":"New York","state":"NY","zip":10001}}
*/

let parsedUser = JSON.parse(jsonUser);
console.log(typeof(parsedUser));
console.log(parsedUser);

/*
output
object
{
  name: 'Rohan',
  age: 25,
  occupation: 'Software Engineer',
  address: { street: '123 Main St', city: 'New York', state: 'NY', zip: 10001 }
}
*/
