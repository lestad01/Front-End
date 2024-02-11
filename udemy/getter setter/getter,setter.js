'use strict';

const persone = {
    name: "Alex",
    age: 28,

    get userAge() {
        return this.age;
    },

    set userAge(number) {
        this.age = number
    }
};

console.log(persone.userAge = 31);
console.log(persone.userAge);