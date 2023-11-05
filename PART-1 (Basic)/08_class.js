/*

class CreateUser {
    constructor(firstName, lastName, age, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }


    about = function () {
        return `${this.firstName} is ${this.age} years old`;
    }

    is18 = function () {
        return this.age >= 18;
    }
}

const user1 = new CreateUser("Abhishek", "Swami", 20, "abhi@gmail.com", "Latur");
console.log(user1);
console.log(user1.about());
console.log(Object.getPrototypeOf(user1));



class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    eat(){
        return `${this.name} is eating`;
    }
}


const animal1  = new Animal("Tom", 5);

console.log(animal1);
console.log(animal1.eat());

class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    
}

const tom = new Dog("Maxi", 4, 40);
console.log(tom);

// getter and setter

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
    
    set fullName(fullName){
        const[firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("Abhishek", "Swami");
console.log(person1.fullName);

person1.fullName = "Clay Jensen";
console.log(person1.fullName);


// static methods and properties

class Person {
    
    static classInfo() {
        console.log("static methods only called by class name");
    }
    
    static desc = "static property";
}

const info = Person.classInfo();
console.log(info);

console.log(Person.desc);

*/
