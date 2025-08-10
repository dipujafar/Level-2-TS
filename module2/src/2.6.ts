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

  type TStudent = {
    id: number;
    name: string;
    email: string;
  };

  //   ------------------------------ dynamic type for a function where add course  ------------------------------
  const addCourse = <T extends TStudent>(
    student: T
  ): T & { course: string } => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student = addCourse<TStudent & { hasBike: boolean }>({
    name: "John",
    id: 444,
    email: "student@gmail.com",
    hasBike: false,
  });

  const student2 = addCourse<TStudent & { hasWatch: boolean }>({
    name: "John",
    id: 444,
    email: "student@gmail.com",
    hasWatch: true,
  });
}
