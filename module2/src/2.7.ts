{
  //

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type VehicleOwner = "bike" | "car" | "ship"; // manually

  type VehicleOwner2 = keyof Vehicle; // dynamically care union type form a another type

  const owner: VehicleOwner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Jafar",
    id: 19116,
    designation: "Frontend Developer",
  };

  const car = {
    model: "toyota corola 100",
    year: 2010,
  };

  const userId = getPropertyValue<typeof user, keyof typeof user>(user, "id");

  const carModel = getPropertyValue(car, "year");

  //
}
