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
type TDeveloper<T, X = null> = {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseDate: string;
  };
  smartWatch: T;
  bike?: X;
};

const masumVai: TDeveloper<{ type: string; brand: string }> = {
  name: "Masum Raihan",
  computer: {
    brand: "AMD",
    model: "9dfsdf",
    releaseDate: "20 jan 2023",
  },
  smartWatch: {
    type: "apple watch",
    brand: "apple",
  },
};
