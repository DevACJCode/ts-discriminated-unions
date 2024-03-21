/* 
Functions
Classes
Interfaces
*/

// function inverterArray<T = string>(arr: T[]): T[] {
//   return arr.reverse();
// }

// interface User {
//   id: number;
//   name: string;
// }

// inverterArray<number>([1, 2, 3, 4]);
// inverterArray<string>(["a", "b", "c"]);
// inverterArray<User>([
//   { id: 1, name: "agnaldo" },
//   { id: 2, name: "tiao" },
// ]);
// inverterArray(["a", "b", "c"]);

// class Produto<T> {
//   nome: T;

//   constructor(nome: T) {
//     this.nome = nome;
//   }
// }

// const produto1 = new Produto<number>(15);
// const produto2 = new Produto<string>("Maquina de lavar");

// console.log(produto1);
// console.log(produto2);

interface ResponseData<T> {
  statusCode: number;
  data: T;
}

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
}

async function getData<T>(url: string): Promise<ResponseData<T>> {
  const response = await fetch(url);
  const data = await response.json();
  return { statusCode: response.status, data: data };
}

setTimeout(async () => {
  const resultado = await getData<IUser>(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const resultado1 = await getData<IPost>(
    "https://jsonplaceholder.typicode.com/posts/5"
  );

  const resultadoArray = await getData<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  resultadoArray.data.forEach((user) => console.log(user.name));
}, 100);
