/*
console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
*/

/*
const { coffeeStock, isCoffeeMachineReady } = require("./state");

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 160);
*/

/*
import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(stock);

console.log(stock);
console.log(isCoffeeMachineReady);
*/

/*
 try {
  console.log("Awal blok try");
  errorCode;
  console.log("akhir blok try");
} catch (error) {
  console.log("Terjadi error!");
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("Akan tetap dieksekusi");
} 
*/

/* 
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidarionError";
  }
}

// const json = '{ "name": "Yoda", "age": 20 }';
// const json = "{ bad json }";
let json = '{ "age": 20 }';

try {
  let user = JSON.parse(json);

  // if (!user.name) {
  //   throw new SyntaxError("'name' is required.");
  // }

  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }

  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }

  // errorCode;

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Validation Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
 */

/* 
console.log("Selamat datang!");

setTimeout(
  () => console.log("Terimakasih sudah mampir, silakan datang kembali!"),
  3000
);

console.log("Ada yang bisa dibantu?"); 
*/

/* 
function getUsers(isOffline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["John", "Jack", "Abigail"];

      if (isOffline) {
        reject(new Error("Cannot retrieve users due offline."));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

function userCallback(error, users) {
  if (error) {
    console.log("Process failed:", error.message);
    return;
  }

  console.log("Process success.", users);
}

getUsers(false)
  .then((users) => console.log(users))
  .catch((error) => console.log(error.message)); 
*/

/* 
PROMISIFY

import { promisify } from "util";

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));

getUsersPromise(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
*/

/* 
CHAINING PROMISE
function withDrawnMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error("Not enough money to buy ticket"));
      }

      resolve("ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("No ticket"));
      }

      resolve("Enjoy the movie");
    }, 1000);
  });
}

function watchMovie() {
  withDrawnMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}

watchMovie();

ASYNC AND AWAIT
async function watchMovie() {
  try {
    const money = await withDrawnMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie().then(() => console.log("Done")); 
*/

/* 
PROMISE STATIC METHOD

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Ups")), 1000)
);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

Promise.allSettled([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);

fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("1"), 1000)
);
const promiseResolve2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("2"), 2000)
);
const promiseResolve3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("3"), 3000)
);

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
  .then((value) => console.log(value)) // 1
  .catch((error) => console.log(error.message));

rejected sample
const promiseReject1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("1")), 1000)
);
const promiseReject2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("2")), 2000)
);
const promiseReject3 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("3")), 3000)
);

Promise.any([promiseReject1, promiseReject2, promiseReject3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); 
*/
