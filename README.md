# Callback Functions
## [Traffic Light Sequence Challenge](https://osamadw2002.github.io/traffic-light-sequence-challenge/)
## What is the callback functions?
Callback function is a function that passed as a parameter to anoother function in order to executed later, To use this concept we pass the function reference without parenthese as below:
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Executing the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing sayGoodbye as a callback (without parentheses)
greet("Alice", sayGoodbye);
```
## Why are callbacks important in asynchronous programming?
Javascript is a ***single-thread*** , meaning that tasks which take a long time will block the execution, so callback  and asynchronous functions solve this problem by :-
**1-** The program doesn't stop and wait for a task to complete.
**2-** Other code can continue running while waiting for the task.
**3-** The callback function executes only when the task is finished.

## How do you define and pass a callback function to another function?
We pass the function reference without parenthese, and if we need to pass arguments with the callback we can wrap the function with arrow function and pass the arrow one as a callback. 
## The difference between synchronous and asynchronous callbacks.
### Synchronous callbacks executes immediately 
means it blocking the execution for the rest of the code until it completes for example map, filter, reduce ...
### Asynchronous callbacks scheduled later 
means it allowing the execution for the rest of the code then it executes for example setTimeout, setInterval, Promise ...

## "Callback Hell" Problem
Callback hell happens when nested callbacks which make the code hard to read, understand and maintain.
to prevent this problem we can use Promise function or Async/Await
