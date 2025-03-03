# JavaScript Error and Exception Handling



In JavaScript, error and exception handling allows you to manage unexpected issues that occur during code execution. Using tools like `try`, `catch`, `throw`, and `finally`, you can handle errors efficiently, preventing crashes and ensuring smooth execution.

## What is JavaScript Error?
An error in JavaScript is a problem that prevents the code from running as expected. Errors can occur during development or runtime, causing the program to malfunction.

### Types of Errors in JavaScript

#### 1. Syntax Errors
Occurs when the code does not follow proper syntax.

```javascript
console.log("Hello World"
// Missing closing parenthesis
```
**Output:**
```
SyntaxError: missing ) after argument list
```

#### 2. Reference Errors
Occurs when trying to access an undeclared variable.

```javascript
console.log(x); // ReferenceError: x is not defined
```
**Output:**
```
ReferenceError: x is not defined
```

#### 3. Type Errors
Happens when a value is not of the expected type.

```javascript
let num = 5;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function
```
**Output:**
```
TypeError: num.toUpperCase is not a function
```

#### 4. Range Errors
Occurs when a value is out of an allowed range.

```javascript
let arr = Array(-1); // RangeError: Invalid array length
```
**Output:**
```
RangeError: Invalid array length
```

#### 5. Custom Errors
Developers can create specific errors using the `throw` statement.

```javascript
throw new Error("Custom error occurred");
```
**Output:**
```
Error: Custom error occurred
```

## Exception Handling in JavaScript
Exception handling helps manage errors that occur during execution. JavaScript provides the `try...catch...finally` mechanism.

### Handling Errors Using `try…catch`

#### Syntax:
```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Optional cleanup code
}
```

#### Example:
```javascript
try {
    let res = 10 / 0;
    if (!isFinite(res)) {
        throw new Error("Cannot divide by zero");
    }
    console.log(res);
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("Execution completed");
}
```
**Output:**
```
Error occurred: Cannot divide by zero
Execution completed
```

### Throwing Custom Errors

```javascript
function check(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Access granted");
}
try {
    check(16);
} catch (error) {
    console.error(error.message);
}
```
**Output:**
```
Age must be 18 or above
```

### Using `finally` for Cleanup
The `finally` block executes regardless of whether an error occurs.

```javascript
try {
    console.log("Trying...");
    throw new Error("An error occurred");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleaning up...");
}
```
**Output:**
```
Trying...
An error occurred
Cleaning up...
```

### Advanced: `try…catch` with `async/await`

```javascript
async function fetchData() {
    try {
        let res = await fetch("https://api.example.com/data");
        let d = await res.json();
        console.log(d);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}
fetchData();
```
**Output:**
```
Error fetching data: fetch failed
```

## Benefits of Exception Handling
- **Graceful Degradation**: Ensures the program continues running despite errors.
- **Error Logging**: Helps diagnose and fix issues.
- **Prevents Crashes**: Keeps the app stable when encountering errors.

## Best Practices for Error Handling
- **Catch Specific Errors**: Handle different error types appropriately.
- **Use `finally` for Cleanup**: Release resources after execution.
- **Avoid Silent Failures**: Always log or handle errors visibly.
- **Use Custom Errors**: Provide meaningful error messages.

## FAQs

### What is the purpose of `try…catch` in JavaScript?
The `try…catch` block helps handle errors by running code in the `try` block and catching errors in the `catch` block, preventing crashes.

### What is the difference between `SyntaxError` and `ReferenceError` in JavaScript?
- **SyntaxError**: Occurs when the code violates JavaScript’s syntax rules (e.g., missing parentheses).
- **ReferenceError**: Happens when referencing an undeclared variable.

### How do custom errors work in JavaScript?
Developers can create custom errors by throwing instances of the `Error` object or extending it.

### Can `finally` be used without `catch`?
Yes, `finally` can be used alone with `try`. It executes regardless of whether an error occurs, making it useful for cleanup tasks.

### What happens if an error is not caught in JavaScript?
If an error is not caught, JavaScript propagates the error up the call stack, potentially stopping execution.

---

# Asynchronous JavaScript



Asynchronous JavaScript is a programming approach that enables the non-blocking execution of tasks, allowing concurrent operations, improved responsiveness, and efficient handling of time-consuming operations in web applications. 

JavaScript is a single-threaded and synchronous language. The code is executed in order, one at a time. However, JavaScript may appear to be asynchronous in some situations.

## Table of Contents
- [Using Callbacks](#using-callbacks)
- [Using Promises](#using-promises)

## Using Callbacks
Callbacks are functions passed as arguments to be executed after an asynchronous operation completes. They are used in asynchronous JavaScript to handle responses and ensure non-blocking execution.

### Syntax:

```javascript
function myFunction(param1, param2, callback) {
    // Do some work...
    // Call the callback function
    callback(result);
}
```

### Example:
In this example, `myFunction` simulates an async task with a 3-second delay. It passes fetched data to the callback, which logs it. 

#### Code:
```javascript
function myFunction(callback) { 
    setTimeout(() => { 
        const data = { name: "Aman", age: 21 }; 
        callback(data); 
    }, 3000); 
} 
  
myFunction((data) => { 
    console.log("Data:", data); 
});
```

#### Output:
```
Data: { name: 'Aman', age: 21 }
```

## Using Promises
Promises are objects representing the eventual completion (or failure) of an asynchronous operation, providing better handling of asynchronous code with `.then()` and `.catch()`.

### Syntax:
```javascript
let promise = new Promise(function(resolve, reject) {
     // Do something
});
```

### Example:
In this example, the function `mydata()` returns a Promise that resolves with data after a delay. The data is logged, or an error is caught if rejected, after 2 seconds.

#### Code:
```javascript
function mydata() { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const data = { name: "Rohit", age: 23 }; 
            resolve(data); 
        }, 2000); 
    }); 
} 
  
mydata() 
    .then((data) => { 
        console.log("Data:", data); 
    }) 
    .catch((error) => { 
        console.error("Error:", error); 
    });
```

#### Output:
```
Data: { name: 'Rohit', age: 23 }

