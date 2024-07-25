class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const createPeople = (n) => {
    const people = [];
    for (let i = 0; i < n; i++) {
        const name = `Person${i + 1}`;
        const age = Math.floor(Math.random() * 100); 
        people.push(new Person(name, age));
    }
    return people;
};

const n = 5; 
const people = createPeople(n);

people.forEach(person => person.greet());
