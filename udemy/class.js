"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //Метод
    calcArea() {
        return this.height * this.width;
    }
}

// пример наследования ООП
class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor){
        super(height, width); //всегда на первом месте и передает от главного класса все свойства
        this.text = text;
        this.bgColor = bgColor;
    }
    //Метод
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

/*
    1 абстракиця - отделяем экземпляр от концепции (например от созданного нами класса(концепции))
    отделяем посредством создания нового экземпляра от концепции
    2 наследование - способность нашего класса/объекта базироваться на основе другого объекта/класса
    3
*/






 