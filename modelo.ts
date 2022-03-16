class Equipo {
    private _id: number;
    private _nombre: string;
    private _fechaFundacion: number;

    constructor(id : number, nombre : string, fechaFundacion : number) {
        this._id = id;
        this._nombre = nombre;
        this._fechaFundacion = fechaFundacion;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get fechaFundacion(): number {
        return this._fechaFundacion;
    }

    public set fechaFundacion(value: number) {
        this._fechaFundacion = value;
    }
}

class Jugador {
    private _id : number;
    private _nombre : string;
    private _edad : number;
    private _pais : string;

    constructor(id : number, nombre : string, edad : number, pais : string) {
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this._pais = pais;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id : number) {
        this._id = id;
    }

    public get nombre(): string {
        return this._nombre;
    }
    
    public set nombre(nombre : string) {
        this._nombre = nombre;
    }

    public get edad() : number {
        return this._edad;
    }

    public set edad(edad : number) {
        this._edad = edad;
    }

    public get pais() : string {
        return this._pais;
    }

    public set pais(pais : string) {
        this._pais = pais;
    }
}

class Historial {
    private _id: number;
    private _numGoles: number;
    private _tarjetasAmarillas: number;
    private _tarjetasRojas: number;

    constructor(id : number, numGoles : number, tarjetasAmarillas : number, tarjetasRojas : number) {
        this._id = id;
        this._numGoles = numGoles;
        this._tarjetasAmarillas = tarjetasAmarillas;
        this._tarjetasRojas = tarjetasRojas;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get numGoles(): number {
        return this._numGoles;
    }

    public set numGoles(value: number) {
        this._numGoles = value;
    }

    public get tarjetasAmarillas(): number {
        return this._tarjetasAmarillas;
    }

    public set tarjetasAmarillas(value: number) {
        this._tarjetasAmarillas = value;
    }

    public get tarjetasRojas(): number {
        return this._tarjetasRojas;
    }

    public set tarjetasRojas(value: number) {
        this._tarjetasRojas = value;
    }
}

let equipoFantasy = new Equipo(1, "Fantasy", 2022);

const jugador1 = new Jugador(10, "Leo Messi", 33, "Argentina");
const jugador2 = new Jugador(7, "Cristiano Ronaldo", 35, "Portugal");
const jugador3 = new Jugador(8, "Andrés Iniesta", 36, "España");

let jugadores : Array<Jugador> = new Array<Jugador>();
jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);

let historialMessi = new Historial(10, 91, 23, 2);
let historialRonaldo = new Historial(7, 63, 44, 5);
let historialIniesta = new Historial(8, 12, 7, 0);

console.log("El equipo '" + equipoFantasy.nombre +"', fundado en " + equipoFantasy.fechaFundacion + " y que va en el puesto "+ equipoFantasy.id + " en la SuperLiga tiene en sus filas a estos jugadores: ");
console.log(jugadores);
console.log("")

console.log("El jugador llamado " + jugador1.nombre + " con el numero " + historialMessi.id + " ha marcado " + historialMessi.numGoles + " goles, ha recibido " + historialMessi.tarjetasAmarillas + " tarjetas amarillas y " + historialMessi.tarjetasRojas + " tarjetas rojas.")
console.log("")

console.log("El jugador llamado " + jugador2.nombre + " con el numero "+ historialRonaldo.id + " ha marcado " + historialRonaldo.numGoles + " goles, ha recibido " + historialRonaldo.tarjetasAmarillas + " tarjetas amarillas y " + historialRonaldo.tarjetasRojas + " tarjetas rojas.")
console.log("")

console.log("El jugador llamado " + jugador3.nombre + " con el numero " + historialIniesta.id + "ha marcado " + historialIniesta.numGoles + " goles, ha recibido " + historialIniesta.tarjetasAmarillas + " tarjetas amarillas y " + historialIniesta.tarjetasRojas + " tarjetas rojas.")
