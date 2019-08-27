let LOG = console.log;



// const pizzaArray = [
//     {
//     name: "pep",
//     number: 1,
//     price: 10
// },
// {
//     name: "mushroom",
//     number: 3,
//     price: 5
// },
// {
//     name: "mango",
//     number: 6,
//     price: 15
// },
// {
//     name: "pineapple",
//     number: 8,
//     price: 1000
// }
//     // "pep", "mushroom", "mango", "pineapple"
// ]

// // console.log(pizza[0].name);
// const[pep, mushroom, mango, pineapple] = pizza;

// console.log(pizza[0], pizza[1], pizza[2], pizza[3]);

var pizzaObj = {
    pepp: "monday",
    array: [
        1,
        2,
        3
    ],
    funFunction: function (name) {
        LOG(`I'm ${name}'s function`);
    }
};

console.log

// LOG(pizzaObj["array"]);
// pizzaObj.funFunction();

const {
    peppStr,
    arrayArr,
    funFunction
} = pizzaObj;

funFunction("Bobby");

var dogType = "pug";
var dog = {
    [dogType + 'Bark']() {
        LOG("I'm a pug!")
    }
}

dog.pugBark();