"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {title: 'Rounds', artist: "Four Tet", year: 2003},
  {title: 'Treated Timber Resist Rot', artist: " Xploding Plastix", year: 2008},
  {title: 'Foley Room', artist: "Amon Tobin", year: 2007},
]

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const el of albums) {
        yield el
    }
  }
}

for(const el of musicCollection){
  console.log(`Название альбома: ${el.title}, \n Исполнитель: ${el.artist}, \n Год выпуска: ${el.year}`);
  console.log(`\n`);
}
