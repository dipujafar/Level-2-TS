

// --------------------- 2.5 ------------------------
type GenericArray<T> = Array<T>;

const arr: GenericArray<number> = [1, 2, 3];

interface User {
  name: string;
  age: number;
}

const user: GenericArray<User> = [
  {
    name: "John",
    age: 30,
  },
];





// --------------------- 2.6 ------------------------
type TDeveloper = {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseDate: number;
  }
}