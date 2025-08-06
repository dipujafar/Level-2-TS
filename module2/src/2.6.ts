{
  const createArrayWithGeneric = <T>(params: T): T[] => [params];

  const createTupleWithGeneric = <T, Q>(params: T, params2: Q): [T, Q] => [
    params,
    params2,
  ];

  type TUser = {
    name: string;
    age: number;
  };

  const user = createArrayWithGeneric<TUser>({
    name: "John",
    age: 30,
  });

  const user2 = createTupleWithGeneric<string, number>("John", 30);

  //   ------------------------------ dynamic type for a function where add course  ------------------------------
  const addCourse = <T>(student: T): T & { course: string } => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };


  const student = addCourse<TUser>({
    name: "John",
    age: 30,
  });

}
