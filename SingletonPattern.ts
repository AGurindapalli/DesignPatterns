let count = 0;
let instance;
class counter {
  constructor() {
    if (instance) {
      throw console.error("Instance already exists");
    }
    instance = this;
  }
  increment() {
    count++;
  }
  decrement() {
    count--;
  }
  getCount() {
    return count;
  }
  getInstance() {
    return this;
  }
}
const singletonCounter = Object.freeze(new counter());
// export default singletonCounter;
//Reduces the risk of overwriting the values in the object.

// At any give point of time we should only have
// one instance of the class.

const user1 = singletonCounter.getInstance();
const user2 = singletonCounter.getInstance();
console.log("Test 1:", user1 === user2); // true // count - 0
user1.increment();
console.log("Test 2:", user2.getCount()); // 1
user2.increment();
user1.decrement();
console.log("Test 3:", user1.getCount()); // 1

// Applications of Singleton Pattern
// 1. C# -- Dependency Injection -- Singleton Pattern
// 2. Logger -- Singleton Pattern
// 3. DB Config - Connection String
// 4. Cache -- Singleton Pattern
// 5. Hardware Interface -- Singleton Pattern ( Rocket System -- Hardware Interface )
// 6. Printer -- Singleton Pattern
