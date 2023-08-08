// Создание объектов и наследование с использованием class и extends.

// Мы научились создавать объекты и устанавливать прототипы, создавать
// конструкторы и разобрались как работает оператор new. С приходом ES2015 в язык
// был добавлен синтаксис классов, чтобы все эти операции можно было делать
// удобнее и в более привычном синтаксисе для тех, кто уже программировал с
// использованием классов в других языках программирования. Давайте создадим
// наших роботов с использованием нового синтаксиса.

// Класс робот-пылесос.
class VacuumCleaner123 {
    model = "vacuum cleaner";
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    // Для создания конструктора, нужно создать метод constructor.
    constructor() {
    }
    startCleaning() {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of VacuumCleaner');
    console.log('I am cleaning... I have been started: ',
    this.counterOfStarts, 'times.');
    }
    goCharge() {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of VacuumCleaner');
    console.log('I am going to charge...');
    }
    }
    // Попробуем создать экземпляр класса и посмотреть как он работает.
    const BaseRobot = new VacuumCleaner123;

    console.log(BaseRobot.constructor); // class VacuumCleaner123 {
// model = "vacuum cleaner";
// counterOfStarts = 0;
// isFull = false;
// isObstacle = false;
// Для создания конструктора, нужно создать метод constructor.
// constructor() {
// }
// ...
console.log(BaseRobot.model); // vacuum cleaner
console.log(BaseRobot.startCleaning()); // I am the method of VacuumCleaner123
// I am cleaning... I have been started: 1 times.

// Мы создали наш базовый класс, и можем видеть, что у него есть методы и свойства,
// а метод конструктор распечатывает сам класс. Также класс устанавливает прототип
// для объекта, для этого нужно расширить наш базовый класс с помощью ключевого
// слова extend. Давайте создадим наш расширяющий класс DancingSeries:

// Расширенный класс DancingSeries. C помощью extends мы
// указываем от какого класса будем наследоваться.
class DancingSeries extends VacuumCleaner123 {
    // Объявляем новые свойства и переопределяем свойство model.
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;
    // Добавляем новый метод.
    switchUVLamp() {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
            'not working'}.`);
    }
};

// Создадим новый экземпляр класса, чтобы посмотреть как он работает и что в нем есть.
const DancingRobot = new DancingSeries;
console.log(DancingRobot.__proto__); // VacuumCleaner123 {constructor: ƒ, switchUVLamp: ƒ}
console.log(DancingRobot.model); // dancing series
console.log(DancingRobot.switchUVLamp()); // I am the method of DancingSeries
// UV lamp is working.

// Мы расширили наш базовый класс, и создав экземпляр нового робота видим в нём
// прототип на базовый класс, новый метод и предопределенное свойство model. Все
// работает как должно и ожидается.

// Давайте теперь разберем что же делают классы. Работа классов достаточна проста
// и прозрачна. Объявляя класс, движок JavaScript создает функцию конструктор по
// имени класса и берет её код из метода constructor класса, если такого метода нет, то
// функция будет пустой. Если класс расширяет другой класс, то для этой функции
// указывается свойство prototype. После чего находит все остальные методы
// объекта и прописывает их в свойство prototype для новой функции. Вот почему мы в
// прототипе для объекта DancingSeries увидели не только методы родительского
// класса, но и метод класса DancingSeries. Ну а дальше все просто, мы получили
// функцию конструктор, с прототипом и всеми необходимыми методами, поэтому при
// вызове оператора new мы создаем наш объект, как будто он был создан старым
// способом. Конечно в работе классов есть тонкости, например функцию
// конструктор, созданную классом, нельзя вызвать без использования оператора
// new, а все создаваемые ей методы будут помечены как неперечислимые.
// Давайте возьмем предыдущей пример, и посмотрим на функцию конструктор,
// созданную классом:

// Созданный конструктор является функцией, код которой взят из конструктора.
console.log(DancingSeries === DancingSeries.prototype.constructor); // true
// В созданном конструкторе есть свойство prototype и оно содержит все методы.
console.log(DancingSeries.prototype); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}

// Синтаксис классов намного проще и лучше читается, а для многих программистов,
// кто пришел к изучению JavaScript после других объектно-ориентированных языков
// он намного привычнее. К сожалению еще не все браузеры умеют работать с
// синтаксисом классов напрямую, поэтому чаще всего в проектах необходимо
// использовать дополнительные инструменты для конвертации кода ES2015 в более
// привычный для браузеров ES5.