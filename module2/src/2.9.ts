type t1 = null;
type t2 = undefined;
type t3 =  t1 extends null ? null : t2 extends undefined ? undefined : any


type TRichMan = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof TRichMan ? true : false

type hasCar  = CheckVehicle<"car">