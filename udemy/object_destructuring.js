

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors : {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
//Деструктуризация объекта
const {border,bg} = options.colors;
console.log(bg);


//console.log(Object.keys(options).length);
// options.makeTest();
// console.log(options);

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             //counter++;
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }






