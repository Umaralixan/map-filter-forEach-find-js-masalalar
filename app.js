// EVERY
// 1 MASALA
// let emails = ["umarali@gmail.com", "umaralixan@yahoo.com", "hello@mail.com"];
// let result = emails.every(email => email.includes("@"));
// console.log(result);

// 2 MASALA
// let cars = [2015, 2020, 2011, 2018];
// let result = cars.every((yil) => yil > 2010);
// console.log(result);

// 3 MASALA
// let orders = [
//   { id: 1, paid: true },
//   { id: 2, paid: true },
//   { id: 3, paid: true },
// ];
// const result = orders.every((order) => order.paid);
// console.log(result);

// 4 MASALA
// let pages = [120, 150, 200, 180];
// let result = pages.every((p) => p > 100);
// console.log(result);

// 5 MASALA
// let fn = ["salom", "suz", "olma", "son"];
// let result = fn.every((son) => son.length > 3);
// console.log(result);

// FINDINDEX
// 1 MASALA
// let fn = ["MUnisa", "Malika", "urgent", "Anvar", "urgent"];
// let index = fn.findIndex((son) => son === "urgent");
// console.log(index);

// 2 MASALA
// let books = [
//   { title: "A", year: 2018 },
//   { title: "B", year: 2020 },
//   { title: "C", year: 2022 },
//   { title: "D", year: 2021 },
// ];
// let index = books.findIndex((book) => book.year === 2020);
// console.log(index);

// 3 MASALA
// let cars = ["BMW", "Audi", "Kia", "Ford"];
// let index = cars.findIndex((car) => car.length === 3);
// console.log(index);

// 4 MASALA
// let orders = [
//   { id: 1, sum: 500000 },
//   { id: 2, sum: 1500000 },
//   { id: 3, sum: 2000000 },
// ];
// let index = orders.findIndex((order) => order.sum > 1000000);
// console.log(index);

// 5 MASALA
// let emails = ["umarali@gmail.com", "xurshid@yahoo.com", "ismoil.mail.ru"];
// let index = emails.findIndex((email) => !email.includes("@"));
// console.log(index);

// FIND
// 1 MASALA
// let students = [
//   { name: "Anvar", score: 95 },
//   { name: "Zohid", score: 102 },
//   { name: "Xurshid", score: 110 }
// ];
// let result = students.findIndex(student => student.score > 100);
// console.log(result);

// 2 MASALA
// let fn = ["Samarqand", "Buxoro", "Toshkent", "Andijon"];
// let result = fn.find(city => city === "Toshkent");
// console.log(result);

// 3 MASALA
// let cars = [
//   { model: "BMW", color: "white" },
//   { model: "Audi", color: "black" },
//   { model: "Mersedes", color: "blu" }
// ];
// let result = cars.find(car => car.color === "black");
// console.log(result);

// 4 MASALA
// let orders = [
//   { id: 1, status: "completed" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "pending" }
// ];
// let result = orders.find(order => order.status === "pending");
// console.log(result);

// 5 MASALA
// let tasks = [
//   { text: "vazifa" },
//   { text: "uyga vazifa" },
//   { text: "40 ta masalani ishlash" },
//   { text: "vazifani bajarish" }
// ];
// let result = tasks.reduce((max, task) => task.text.length > max.text.length ? task : max, tasks[0]);
// console.log(result);

// FiTER
// 1 MASALA
// let students = [
//   { name: "Ali", score: 75 },
//   { name: "Sardor", score: 85 },
//   { name: "SAmandar", score: 90 },
//   { name: "Diyor", score: 74 }
// ];
// let result = students.filter(student => student.score > 80);
// console.log(result);

// 2 MASALA
// let products = [
//   { name: "Telefon", price: 120000 },
//   { name: "Quloqchin", price: 80000 },
//   { name: "Sichqoncha", price: 50000 },
//   { name: "Noutbuk", price: 300000 }
// ];
// let result = products.filter(product => product.price < 100000);
// console.log(result);

// 3 MASALA
// let user = [
//   { name: "Ali", age: 20 },
//   { name: "Sardor", age: 19 },
//   { name: "Samandar", age: 14 },
//   { name: "Diyor", age: 17 },
// ];
// let result = user.filter((user) => user.age < 18);
// console.log(result);

// 4 MASALA
// let tasks = [
//   { text: "vazifa 1", done: true },
//   { text: "vazifa 2", done: false },
//   { text: "vazifa 3", done: true },
//   { text: "vazifa 4", done: false }
// ];
// let result = tasks.filter(task => task.done === false);
// console.log(result);

// 5 MASALA
// let count = ["salom", "olma", "daraxt", "kitob", "uzbekistan"];
// let result = count.filter(suz => suz.length > 5);
// console.log(result);

// 6 MASALA
// let cars = [
//   { model: "BMW", year: 2023 },
//   { model: "Audi", year: 2026 },
//   { model: "Kia", year: 2027 },
//   { model: "Ford", year: 2022 }
// ];
// let futureCars = cars.filter(car => car.year < 2025);
// console.log(futureCars);

// 7 MASALA
// let count = [5, -2, 0, -7, 3, -1];
// let result = count.filter(temp => temp < 0);
// console.log(result);

// 8 MASALA
// let books = [
//   { title: "A", year: 1995 },
//   { title: "B", year: 2001 },
//   { title: "C", year: 1980 },
//   { title: "D", year: 2010 }
// ];
// let result = books.filter(book => book.year < 2000);
// console.log(result);

// 9 MASALA
// let fn = [
//   { id: 1, sum: 500000 },
//   { id: 2, sum: 1500000 },
//   { id: 3, sum: 2000000 }
// ];
// let result = fn.filter(order => order.sum > 1000000);
// console.log(result);

// 10 MASALA
// let users = [
//   { name: "Ali", email: "ali@gmail.com" },
//   { name: "Sardor", email: "sardor@email.com" },
//   { name: "Samandar", email: "samandar@gmail.com" },
//   { name: "Diyor", email: "diyor@email.ru" },
// ];
// let result = users.filter((user) => user.email.endsWith("@gmail.com"));
// console.log(result);

// MAP
// 1 MASALA
// let students = [
//   { name: "Umed", age: 20 },
//   { name: "Sardor", age: 18 },
//   { name: "Sevara", age: 22 },
//   { name: "Dilnoza", age: 19 }
// ];
// let names = students.map(student => student.name);
// console.log(names);

// 2 MASALA
// let products = [
//   { name: "Telefon", narx: 32990000 },
//   { name: "Quloqchin", narx: 99000 },
//   { name: "Sichqoncha", narx: 59000 },
// ];
// let result = products.map((product) => product.narx);
// console.log(result);

// 3 MASALA
// let users = [
//   { name: "Eldor", surname: "Shomirodov" },
//   { name: "Cristiano", surname: "Ronaldo" },
//   { name: "Celyan", surname: "Mbappe" },
// ];
// let fullNames = users.map((user) => `${user.name} ${user.surname}`);
// console.log(fullNames);

// 4 MASALA
// let numbers = [2, 4, 5, 10];
// let result = numbers.map(num => num * num);
// console.log(result);

// 5 MASALA
// let orders = [
//   { count: 2, price: 10000 },
//   { count: 5, price: 20000 },
//   { count: 1, price: 50000 }
// ];
// let result = orders.map(order => order.count * order.price);
// console.log(result);

// 6 MASALA
// let cars = [
//   { brand: "BMW", model: "X5" },
//   { brand: "Audi", model: "A6" },
//   { brand: "Kia", model: "K5" }
// ];
// let result = cars.map(car => `${car.brand} ${car.model}`);
// console.log(result);

// 7 MASALA
// let texts = ["html", "react", "javascript", "sas"];
// let result = texts.map(text => text.length);
// console.log(result);

// 8 MASALA
// let sums = [11000, 55000, 22000, 44000];
// let rate = 11000;
// let dollars = sums.map(sum => sum / rate);
// console.log(dollars);

// 9 MASALA
// let books = [
//   { title: "Python", year: 2010 },
//   { title: "JS", year: 2020 },
//   { title: "C++", year: 2005 },
// ];
// let result = books.map((book) => `${book.title} ${book.year}`);
// console.log(result);

// 10 MASALA
// let users = [
//   { id: 1, name: "Almira" },
//   { id: 2, name: "Sevara" },
//   { id: 3, name: "Dilnoza" }
// ];
// let result = users.map(user => user.id);
// console.log(result);

// FOREACH
// 1 masala
// let students = [
//   { name: "Anvar", age: 20 },
//   { name: "Sardor", age: 18 },
//   { name: "SAmandar", age: 22 },
//   { name: "Diyor", age: 19 },
// ]; students.forEach((student) => console.log(student.name));

// 2 masala
// let prices = [10000, 20000, 50000];
// let result = [];
// prices.forEach(price => {
//   result.push(price * 1.1);
// }); console.log(result);

// 3 masala
// let users = [{ name: "Ali" }, { name: "Sevara" }, { name: "Diyor" }];
// users.forEach((user) => {
//   user.isOnline = false;
// });
// console.log(users);

// 5 masala
// let books = [
//   { title: "Book A", year: 2001 },
//   { title: "Book B", year: 1998 },
//   { title: "Book C", year: 2020 },
// ];
// books.forEach((book) => {
//   book.available = true;
// }); console.log(books);

// 6 masala
// let cars = [
//   { brand: "BMW", model: "X5" },
//   { brand: "Toyota", model: "Camry" },
//   { brand: "Chevrolet", model: "Malibu" },
// ]; let result = cars.map((car) => car.brand + " " + car.model);
// console.log(result);

// 7 masala
// let products = [
//   { name: "olma", price: 12000 },
//   { name: "anor", price: 18000 },
//   { name: "banan", price:13000 },
// ];
// let result = products.map((item) => item.price * 0.8);
// console.log(result);

// 8 masala
// let tasks = [
//   { text: "Uy vazifa", done: true },
//   { text: "Mashq qilish", done: false },
//   { text: "Do‘konga borish", done: true },
// ]; let count = 0;
// tasks.forEach((task) => {
//   if (task.done) count++;
// }); console.log(count);

// 9 masala
// let cities = ["toshkent", "samarqand", "buxoro", "qarshi"];
// let result = cities.map((city) => city[0].toUpperCase() + city.slice(1));
// console.log(result);

// 10 masala
// let temperatures = [12, -5, 0, 18, 25];
// let result = temperatures.map((t) => t + "°C");
// console.log(result);
