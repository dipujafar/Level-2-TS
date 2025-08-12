{

    // utility types
    type Persone = {
        name: string;
        age: number;
        email?: string;
        contactNo : string
    }


    // Pick
    type NameAge = Pick<Persone, "name" | "age">

    // omit 
    type ContactInfo = Omit<Persone, "name"| "age">

    // required
    type PersoneRequired = Required<Persone>

    // partial
    type PersonPertial = Partial<Persone>

    // readonly
    type PersoneReadonly = Readonly<Persone>;


    // record
    type TObj = Record<string, string | number>;

    const MYObj : TObj = {
        name: "Jafar",
        age: 23,

    }





}