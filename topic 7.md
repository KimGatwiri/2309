# Introduction to Object-Oriented Programming in JavaScript

## Last Updated: 24 May, 2023

JavaScript is widely used in Web Development. This document explores Object-Oriented Programming (OOP) mechanisms in JavaScript and common interview questions related to OOP concepts, such as:

- How is Object-Oriented Programming implemented in JavaScript?
- How does it differ from other languages?
- Can you implement Inheritance in JavaScript?

## OOP Concepts in JavaScript
JavaScript supports the following OOP concepts:
- Objects
- Classes
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

Let's dive into each of these concepts and their implementation in JavaScript.

### Object
An Object is a unique entity that contains properties and methods. For example, a car has characteristics like color, type, model, and horsepower, and it performs actions like driving. These characteristics are called Properties, and actions are called Methods. An Object is an instance of a class.

#### Creating Objects in JavaScript
##### 1. Using Object Literal
An object literal is the simplest way to create an object. It is a collection of key-value pairs enclosed in curly braces `{}`.
```javascript
let person = {
    firstName: 'Mukul',
    lastName: 'Latiyan',
    getFullName() {
        return `The name of the person is ${this.firstName} ${this.lastName}`;
    },
    phoneNumber: {
        mobile: '12345',
        landline: '6789'
    }
};
console.log(person.getFullName());
console.log(person.phoneNumber.landline);
```

##### 2. Using Object Constructor
An object constructor is a function used to create multiple instances of an object with the same properties and methods.
```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new Person('Mukul', 'Latiyan');
let person2 = new Person('Rahul', 'Avasthi');

console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);
```

##### 3. Using `Object.create()`
```javascript
const coder = {
    isStudying: false,
    printIntroduction() {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`);
    }
};

const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();
```

### Classes
Classes are blueprints for Objects. JavaScript is a prototype-based language, meaning it does not have traditional classes like other OOP languages. However, ES6 introduced `class` syntax, which is syntactic sugar over JavaScript’s existing prototype-based inheritance.

#### Creating Classes in JavaScript
##### Using ES6 Classes
```javascript
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return `The name of the bike is ${this.name}.`;
    }
}

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
```

##### Traditional Prototype-Based Approach
```javascript
function Vehicle(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}

Vehicle.prototype.getDetails = function () {
    console.log('The name of the bike is ' + this.name);
};

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
```

### Encapsulation
Encapsulation is the process of wrapping properties and methods within a single unit.
```javascript
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    addAddress(address) {
        this.address = address;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Address: ${this.address}`);
    }
}

let person1 = new Person('Mukul', 21);
person1.addAddress('Delhi');
person1.getDetails();
```

### Abstraction
Abstraction means displaying only essential details and hiding the implementation.
```javascript
function Person(fname, lname) {
    let firstName = fname;
    let lastName = lname;

    let getDetails_noaccess = function () {
        return `First name is: ${firstName} Last name is: ${lastName}`;
    };

    this.getDetails_access = function () {
        return `First name is: ${firstName}, Last name is: ${lastName}`;
    };
}

let person1 = new Person('Mukul', 'Latiyan');
console.log(person1.firstName); // undefined
console.log(person1.getDetails_noaccess); // undefined
console.log(person1.getDetails_access());
```

### Inheritance
Inheritance allows one Object to use properties and methods of another Object.
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `Name of person: ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() {
        return `${super.toString()}, Student ID: ${this.id}`;
    }
}

let student1 = new Student('Mukul', 22);
console.log(student1.toString());
```

### Polymorphism
Polymorphism allows methods with the same name to behave differently.

- **Method Overriding**: A child class can override a method from the parent class.
```javascript
class Person {
    greet() {
        console.log('Hello!');
    }
}

class Student extends Person {
    greet() {
        console.log('Hello, I am a student!');
    }
}

let student = new Student();
student.greet();
```

## Conclusion
JavaScript follows a prototype-based approach to Object-Oriented Programming. While ES6 introduced `class` syntax for better readability, JavaScript objects still inherit from other objects. By understanding objects, classes, encapsulation, abstraction, inheritance, and polymorphism, developers can write more structured and maintainable JavaScript code.

---
