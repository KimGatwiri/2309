# INTERMEDIATE JAVASCRIPT
## ES6+ (Modern JavaScript Features)

## Introduction
ECMAScript 2015 (ES6) and later versions introduced powerful new features that improve JavaScript's readability, maintainability, and performance. Below are some key ES6+ features with explanations and examples.

---

## let and const
- **`let`**: Block-scoped variable (can be reassigned).
- **`const`**: Block-scoped constant (cannot be reassigned).

```javascript
let name = "Kim";
name = "Gatwiri"; // Allowed

const age = 22;
age = 23; // Error: Assignment to constant variable
```

---

## Arrow Functions
- Provides a shorter syntax for functions.
- `this` is lexically bound (inherits from the surrounding scope).

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```
  function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

---

## Template Literals
- Allows embedded expressions using backticks (`` ` ``).

```javascript
const user = "Kim";
console.log(`Hello, ${user}!`); // Output: Hello, Kim!
```
 
---

## Destructuring
- Extract values from arrays or objects easily.

```javascript
const person = { name: "Kim", age: 22 };
const { name, age } = person;
console.log(name, age); // Output: Kim 22

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // Output: 1 2
```

---

## Spread and Rest Operators
- **Spread (`...`)**: Expands an array/object.
- **Rest (`...`)**: Gathers multiple values.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread
console.log(arr2); // Output: [1, 2, 3, 4, 5]

function sum(...numbers) { // Rest
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

---

## Default Parameters
- Provide default values for function parameters.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
```

---

## Enhanced Object Literals
- Shorter syntax for defining objects.

```javascript
const name = "Kim";
const user = { name, greet() { console.log("Hello"); } };
console.log(user); // Output: { name: "Kim", greet: [Function: greet] }
```

---

## Promises
- Handles asynchronous operations.
simplify handling asynchronous operations by providing .then and .catch methods.
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
};
fetchData().then(console.log); // Output (after 2s): Data received
```

---

## ES6 Modules (`import/export`)
- Enables modular JavaScript by allowing code to be split into separate files.

**export.js**
```javascript
export const greet = () => console.log("Hello!");
```

**import.js**
```javascript
import { greet } from "./export.js";
greet(); // Output: Hello!
```

---

## Optional Chaining (`?.`)
- Prevents errors when accessing deeply nested properties.

```javascript
const user = { profile: { name: "Kim" } };
console.log(user.profile?.name); // Output: Kim
console.log(user.address?.city); // Output: undefined (instead of error)
```

---


ES6+ introduces essential features that enhance JavaScript development. Understanding these concepts is crucial before diving into **Modules, Error Handling, and Asynchronous Programming**.

## Error Handling

Error handling in JavaScript is crucial for debugging and preventing unexpected failures. ES6+ provides robust mechanisms to handle errors effectively.


The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.
### try...catch
The `try...catch` statement allows handling runtime errors without stopping script execution.

```javascript
try {
  let result = 10 / 0;
  console.log(result);
  throw new Error("Custom error message");
} catch (error) {
  console.error("Error caught:", error.message);
}
```

### finally
The `finally` block executes after `try` and `catch`, regardless of whether an error occurred.

```javascript
try {
  console.log("Trying...");
} catch (error) {
  console.error("Error caught");
} finally {
  console.log("Execution complete");
}
```

### Throwing Custom Errors
You can manually throw errors using `throw`.

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  return "Access granted";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.error(error.message);
}
```

### Handling Errors in Promises
To catch errors in promises, use `.catch()`.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Network Error"), 2000);
  });
};

fetchData()
  .then(console.log)
  .catch(error => console.error("Caught error:", error));
```

### Handling Errors in async/await
For `async/await`, wrap the call in `try...catch`.

```javascript
async function fetchData() {
  try {
    let response = await fetch("invalid-url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchData();
```

---


