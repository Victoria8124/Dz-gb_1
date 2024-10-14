// Задание 1
// Шаг 1: Создаем массив альбомов
const albums = [
    { title: "Got to Be There", artist: "Michael Jackson", year: "1972" },
    { title: "Ben", artist: "Michael Jackson", year: "1972" },
    { title: "Music & Me", artist: "Michael Jackson", year: "1973" }
];

// Шаг 2: Создаум объект в котоом содержится массив альбомов и свойство симбл
const musicCollection = {
    albums, 
    [Symbol.iterator]() {
        let index = 0; 

        return {
            next: () => {
                if (index < this.albums.length) {
                    return { value: this.albums[index++], done: false };
                } else {
                    return { done: true }; 
                }
            }
        };
    }
};

// Шаг 3: Перебераем альбомы 
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} ${album.year}`);
}

// Задание 2
// Создаем Map для хранения блюд и их поваров
const dishesChefs = new Map([
    ["Пицца Маргарита", "Виктор"],
    ["Пицца Пепперони", "Виктор"],
    ["Суши Филадельфия", "Ольга"],
    ["Суши Калифорния", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);

// Создаем Map для хранения заказов клиентов
const orderStorage = new Map();

// Функция для добавления заказа клиента
function addOrder(customer, dishes) {
    orderStorage.set(customer, dishes);
}

// Добавим заказы клиентов
addOrder("Алексей", ["Пицца Пепперони", "Тирамису"]);
addOrder("Мария", ["Суши Калифорния", "Пицца Маргарита"]);
addOrder("Ирина", ["Чизкейк"]);

// Функция для получения информации о заказах и повара

function orderInformation() {
    for (let [customer, dishes] of orderStorage.entries()) {
        console.log(`Клиент: ${customer}`);
        
        for (let element of dishes) {
            let chef = dishesChefs.get(element);
            console.log(`  Заказал: ${element} (Повар: ${chef})`);
        }
    }
}

orderInformation();


