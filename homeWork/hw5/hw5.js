// Задание 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

// Выводим искомые значения из объекта numbers
for(let key in numbers) {
    if(numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}
// Выводим ключи с искомыми значениями из объекта numbers
for(let key in numbers) {
    if(numbers[key] >= 3) {
        console.log(key + " " + numbers[key]);
    }
}
// 2-й способ
const numbersValues = Object.values(numbers)
// console.log(numbersValues);
// for(let i of numbersValues) {
//     if(numbersValues[i] >= 3) {
//         console.log(numbersValues[i]);
//     }
// }

// 3-й способ (выводим в массив)
const newArrNumbers = numbersValues.filter((el) => el >= 3)
console.log(newArrNumbers);
console.log(...newArrNumbers);
// - - - - - - - - - - - - - - - - - - - - - - 


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
// - - - - - - - - - - - - - - - - - - - - - - 


// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// // через forEach
// products.forEach(elem => {
//     elem.price = elem.price - (elem.price * 0.15)
// })
// console.log(products);

// без forEach
// const valOfProd = Object.values(products)

// for(let i = 0; i < valOfProd.length; i++) {
//     valOfProd[i].price = valOfProd[i].price - (valOfProd[i].price * 0.15 )
// }
// console.log(products);
//  - - - - - - - - - - - -

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. 
//     Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, 
//     заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

console.log('PROBEL');
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

// Решение через filter
const prodWithPhoto = products.filter(elem1 => {
    if(elem1.photos !== undefined && elem1.photos.length > 0)
    return true
    }
)
console.log(prodWithPhoto);

// Решение через sort
const sortedArr = products.sort((a, b) => a.price > b.price ? 1 : -1);
console.log(sortedArr);

// - - - - - - - - - - - - - - - - - - - - - - 

// Задание 5

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Решение
const translate = {}
for(let i = 0; i < en.length; i++) {
    translate[en[i]] = ru[i]
}
console.log(translate);

