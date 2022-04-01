class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hallo, nama saya ${this.name}, saya berumur ${this.age} tahun`);
        
    }
}

const person1 = new Person("Prayoga Eka Ardiansyah ", 21);

console.log(person1.name + person1.age);
person1.greet();