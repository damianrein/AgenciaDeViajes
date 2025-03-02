export interface TouristAttraction {
    id:number,
    name:string,
    price:number | null,
    address:Address,
    schedule: Open24Hours | SpecificHours;
}
export interface Travel {
    id:number,
    price:number,
    places:number,
    clients:Client[],
    attractions:TouristAttraction[],
    departure:Date,
    arrival:Date,
    enable:boolean;
}
export interface TouristPack {
    id:number,
    name:string,
    price:number,
    attractions: TouristAttraction[];
}
export interface Address{
    city:string,
    street:string,
    number:number
}
export enum StarRating {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5
}
export interface Hotel{
    id:number,
    name:string,
    pricePerNight:number,
    address:Address,
    starts:StarRating;
}
// Opción 1: Si está abierto 24 horas
export interface Open24Hours {
    open24Hours: true;
    daysOpen: Days[]; // Días en los que está abierto 24hs
}

// Opción 2: Si tiene horarios específicos
export interface SpecificHours {
    open24Hours: false;
    daysOpen: Days[]; // Días en los que abre
    hours: Hours[]; // Lista de horarios de apertura/cierre por día
}

export type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface Hours {
    day: Days;
    open: string; // Formato "HH:MM"
    close: string; // Formato "HH:MM"
}
export interface Client{
    id:number,
    name:string,
    lastname:string,
    dni:number,
    email:string,
    birthdate:Date;
}