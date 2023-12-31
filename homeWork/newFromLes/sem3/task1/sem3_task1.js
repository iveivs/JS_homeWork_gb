/*
Задание 1: 
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" 
во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на 
кнопку "Загрузить новости", ваш код должен имитировать задержку, словно 
происходит реальная загрузка данных из внешнего источника, а после этой 
задержки — отображать новости на странице.
 
1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером 
для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна 
имитировать задержку в 2 секунды перед успешным возвращением данных из 
"виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она 
должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), 
обрабатывая успешное выполнение и ошибки с использованием then() и catch().
При успешной загрузке отобразите статьи на странице. При ошибке покажите 
сообщение об ошибке.
4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" 
новостей и активирует её снова после завершения операции (будь то успешная 
загрузка или ошибка).
*/

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.3) {
                reject("Error")
            } else {
                const mockDatabase = [
                    {title: "news1", content: "Soderzjimoe novosti 1"},
                    {title: "news2", content: "Soderzjimoe novosti 2"}
                ]
                resolve(mockDatabase)
            }
            console.log('test');
        }, 1000)
    });
}

const divElem = document.querySelector(".content")

const btn = document.querySelector(".btn")

btn.addEventListener('click', () => {
    fetchNews()
        .then((res) => {
            const html = res.map((el) => {
                return `<article>
            <h1>${el.title}</h1>
            <p>${el.content}</p>
        </article>`
            }).join("")
            console.log("res", res);
            console.log("html", html);
            divElem.innerHTML = html
        })
        .catch((err) => {
            divElem.innerHTML = "Proizoshla Oshibka..."
            console.log(err);
        })
})

