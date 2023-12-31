"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    constructor(bookArr){
        this.bookArr = bookArr
    }

    bookArr = []
    #books = []

    allBooks(){
        console.log('all book:', this.#books);
        return this.#books
    }

    findDuplicates(){
        const duplArr = this.bookArr.filter((elem, index, arr) => {
            return arr.indexOf(elem) !== index;
            });
        if(duplArr.length !== 0){
            console.log('ERROR');
        } else {
            this.bookArr.map((elem) => {
                this.#books.push(elem)
            })
        }
    }

    addBook(title){
        if(this.#books.includes(title)){
            console.log('This book allready added');
        } else{
            this.#books.push(title)
        }
    }

    removeBook(title) {
        if(this.#books.indexOf(title) === -1){
            console.log('Book was not finded');
        } else {
            this.#books.splice([this.#books.indexOf(title)], 1)
            console.log('Deleted');
        }
    }

    hasBook(title){
        return this.#books.includes(title)
    }
}

const item1 = new Library(["book1", "book2", "book3", "book2"])
// console.log({item1});
console.log(item1.findDuplicates());
// item1.allBooks()
// item1.addBook("book2")
// item1.allBooks()
// item1.addBook("book4")
// item1.allBooks()
// item1.removeBook("book5")
// item1.removeBook("book4")
// item1.allBooks()
// console.log(item1.hasBook("book2"));