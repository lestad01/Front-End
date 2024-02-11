'use strict';
// инкапсуляция

class User{
    constructor(name,age){
        this.name = name;
        this._age = age;
    }
    

    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
    }
    // геттер
    get age () {
        return this._age;
    }
    // сеттер
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

// const alex = new User('Alex', 28);
// console.log(alex.age)
// alex.age = 99;
// console.log(alex.age);



// alex.setAge(30);
// alex.setAge(300);
// console.log(alex.getAge());

//alex.name = 'Ivan';

alex.say();