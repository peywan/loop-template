/*
//Exercise 1: Array Manipulation
// Exercise 1: Given an array of numbers, write a function that returns a new array
// where each element is doubled.
const numbers = [1, 2, 3, 4, 5];

function doubleValues(arr) {
    // Your code here: Use the map function to double each element in the array.
    return arr.map(num => (num*2));
}

console.log(doubleValues(numbers));


//Exercise 2: Object Properties
// Exercise 2: Given an object representing a person, add a new property 'age' and set it to 25.
const person = {
    name: "John Doe",
    email: "john@example.com"
};

function addAge(obj) {
    // Your code here: Add the age property to the object.
    obj.age = 25

}
addAge(person);
console.log(person); // Expected output: { name: 'John Doe', email: 'john@example.com', age: 25 }




//Exercise 2.1:
// Initial array with some movies.
const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999 }
];


// Function to add a movie to the array.

function addMovie(movieArray, title, director, year) {
    // Create a new movie object.
    const newMovie = { title, director, year };

    // Add the new movie to the end of the movieArray.
    movieArray.push(newMovie);

}
addMovie(movies,
    "taken 3",
    "Olivier Megaton",
    2014
);

console.log(movies)
*/







//Exercise 3: Filtering Array
// Exercise 3: Write a function that filters out all values in an array that are above 10.
const mixedNumbers = [4, 11, 8, 20, 3, 7, 12];
function filterNumbers(arr) {
    // Your code here: Use the filter method to remove numbers greater than 10.
    return arr.filter(function(e) {
        return e < 10;
    })
}

console.log(filterNumbers(mixedNumbers)); // Expected output: [4, 8, 3, 7]




/*

//Exercise 4: Object and Array Combination
// Exercise 4: Given an array of objects where each object represents a book,
// add a function that adds a new book to the array.
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];

function addBook(bookArray, title, author) {
    // Your code here: Add a new book object to the bookArray
    let newBook = {title: title, author: author}
    bookArray.push(newBook);
}

addBook(books, "The Great Gatsby", "F. Scott Fitzgerald");
console.log(books);
// Expected output: Array containing the original books plus "The Great Gatsby"








//Exercise 5: Function Returning an Object
// Exercise 5: Write a function that creates and returns an object.
// The object should represent a vehicle, with properties type, model, and color.

function createVehicle(type, model, color) {
    // Your code here: Return a new object based on the function parameters.
const myCar = createVehicle("Car", "Toyota Corolla", "Blue");

console.log(myCar);
}

// Expected output: { type: 'Car', model: 'Toyota Corolla', color: 'Blue' }
*/
