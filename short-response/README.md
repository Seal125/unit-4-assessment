# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**
- `this` is a keyword that is determined by the context of which it is called in, such as it pointing to `window` when called into the global scope, or an Object when called in one.


**2. What will the following code produce? Why?**

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```
- It will return NaN and 0. The first log returns NaN because `a` is being declared with let, and in doing so, returns undefined when giving it the keyword `this`. That's because in the context of `this`, a is not defined. However, the second log returns 0 because `this` is being referred to `c`, an object. In this object, `a` is defined with -10, while `b` is being called from outside the object because `this` wasn't used, so the context for `b` is 10.

**3. What is a closure? How does it allow us to create private data?**
- A closure is a function that is returned inside a function. It allows us the create private data by hving the outer function become the scope of the inner function, as opposed to the global scope being the scope. This means that outside scopes can't access the variables inside what is inside, and the closure is the only one with access to the variables, and it can manipulate this variable's value.

**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben") )
  ```
- The first logs the closure function, and this is because when you log it, you're not invoking the closure function. Notice that it also takes in a parameter, so you would have to put in an argument for it to work properly as well. This means invoking it twice, like the second log, which works as expected.

**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**
- Encapsulation is binding data to functions that can act upon it, keeping the data private in a sense that no outside scope can manipulate the data. This helps if you want to make sure data is being outputted or acted upon properly and is not messed with. Constructors help by having the keywords `get` and `set`, which can either manipulate data to always output it in a certain way, or setting the data in a certain way. This makes it a litle more private, since they won't be able to access the original data. Prototypes can also help by manipulating data - usually prototypes have methods that will act upon data as well.


**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**
- An object's prototype holds methods that can act upon data (the constructor is located in __proto__), while the prototype property of a function holds not only the constructor, but the __proto__ property as well.

**7. What is polymorphism? Illustrate using code.**
- Sub objects that take parameters and methods from the parent object, but have their own unique parameters or methods as well, and are related to the parent object. For example:
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `I am ${this.name}, and I'm ${this.age} years old.`;
  }
}

class Employee {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  getInfo() {
    return `I am ${this.name}, and I'm ${this.age} years old. My salary is ${salary}`;
  }
}
```