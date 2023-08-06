// Если вы обратили внимание, то все примеры были даны с функциями
// определенными через ключевое слово function, и нигде не использовалась жирная
// стрелка (fat arrow) из ES2015, давайте попробуем создать объект, у которого методы
// будут определены таким образом, и посмотрим что получится:

const Roomba = {
    model: "Romba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // После свойств объявляют его методы.
    startCleaning: () => {
        this.counterOfStarts++;
        console.log('I am cleaning... I have started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: () => {
        console.log('I am going to charge...');
    },
    switchUVLamp: () => {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
            'not working'}.`);
    }
};

// И попробуем вызвать наши методы разными способами:

// Вызов методов объекта.
Roomba.startCleaning(); // I am cleaning... I have started: NaN times.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: NaN times.
Roomba.startCleaning.apply(Roomba); // I am cleaning... I have started: NaN times.
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod(); // I am cleaning... I have been started: NaN times.
setTimeout(Roomba.startCleaning.bind(Roomba), 1000); // I am cleaning... I have started: NaN times.

// Как мы можем видеть ни один метод не сработал, мы везде получили NaN, почему
// так? Ответ на этот вопрос кроется в спецификации ES2015, где сказано что у
// стрелочных функций нет своего контекста, в них this ссылается на тот же объект,
// который является контекстом для функции выше, в которой эта функция объявлена.
// Получается в нашем случае this внутри методов будет ссылаться на глобальный
// объект, и методы call, apply и bind не помогут нам переопределить этот контекст.
// Казалось бы, как не удобно, но на самом деле стрелочные функции очень удобны
// когда используются как анонимные функции внутри методов, т.к. мы можем
// использовать в них this из самого метода. Давайте посмотрим на примере:

const Stand = {
    model: "Stand-1",
    robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
    // Метод, с использованием стрелочной функции в качестве
    // функции обратного вызова.
    startTestingArrow: function () {
        console.log('Start testing...');
        this.robots.forEach((value) => {
            console.log('stand: ', this.model, 'is testing robot: ',
                value);
        })
    },
    // Метод, с использованием классической функции в качестве
    // функции обратного вызова.
    startTestingClassic: function () {
        console.log('Start testing...');
        this.robots.forEach(function (value) {
            console.log('stand: ', this.model, 'is testing robot: ',
                value);
        })
    },
};

Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
Stand.startTestingClassic();
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2

// Как мы можем видеть, первый метод, в котором функция обратного вызова
// объявлена через стрелочную функцию отработал отлично, т.к. не имея своего
// собственного this функция обратного вызова использовала this из метода объекта,
// потому получила доступ к свойству model. А вот второй метод, в котором функция
// обратного вызова была объявлена классическим способом не смогла получить
// доступ к методу объекта, т.к. у неё есть свой собственный this, который был не
// определен в момент вызова этой функции.