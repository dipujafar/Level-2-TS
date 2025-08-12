{
  type AreaString = {
    heigth: string;
    width: string;
  };


//   look up type
type Heigth = AreaString["heigth"]

// mapped type
  type AreaNumber = {
    [key in keyof AreaString] : number;
  };



//   mapped type with generic using loop up type
type Vechicle<T> = {
    [key in keyof T]: T[key]
}

const vechicle : Vechicle<{car: string, bike: boolean}> ={
    car: "Toyota",
    bike: false
}
}
