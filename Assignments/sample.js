class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log('Generic animal sound');
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    speak() {
      console.log('Woof!');
    }
  }
  
  const dog = new Dog('Buddy', 'Golden Retriever');
  dog.speak(); // Output: Woof!
  console.log(dog.name); // Output: Buddy
  console.log(dog.breed); // Output: Golden Retriever