class Person{
    
    static counter = 0;

    constructor(name, salary){
        this._name = name;
        this._salary = salary;
        this._id = ++Person.counter;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    set name(name) {
        this._name = name;
    }

    set salary(salary) {
        this._salary = salary;
    }

}

const people = [];