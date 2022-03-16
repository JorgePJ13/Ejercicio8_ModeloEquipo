class Equipo {
    constructor(id, nombre, fechaFundacion) {
        this._id = id;
        this._nombre = nombre;
        this._fechaFundacion = fechaFundacion;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get fechaFundacion() {
        return this._fechaFundacion;
    }
    set fechaFundacion(value) {
        this._fechaFundacion = value;
    }
}
class Jugador {
    constructor(id, nombre, edad, pais) {
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this._pais = pais;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get pais() {
        return this._pais;
    }
    set pais(pais) {
        this._pais = pais;
    }
}
class Historial {
    constructor(id, numGoles, tarjetasAmarillas, tarjetasRojas) {
        this._id = id;
        this._numGoles = numGoles;
        this._tarjetasAmarillas = tarjetasAmarillas;
        this._tarjetasRojas = tarjetasRojas;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get numGoles() {
        return this._numGoles;
    }
    set numGoles(value) {
        this._numGoles = value;
    }
    get tarjetasAmarillas() {
        return this._tarjetasAmarillas;
    }
    set tarjetasAmarillas(value) {
        this._tarjetasAmarillas = value;
    }
    get tarjetasRojas() {
        return this._tarjetasRojas;
    }
    set tarjetasRojas(value) {
        this._tarjetasRojas = value;
    }
}
let equipoFantasy = new Equipo(1, "Fantasy", 2022);
const jugador1 = new Jugador(10, "Leo Messi", 33, "Argentina");
const jugador2 = new Jugador(7, "Cristiano Ronaldo", 35, "Portugal");
const jugador3 = new Jugador(8, "Andrés Iniesta", 36, "España");
let jugadores = new Array();
jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
let historialMessi = new Historial(10, 91, 23, 2);
let historialRonaldo = new Historial(7, 63, 44, 5);
let historialIniesta = new Historial(8, 12, 7, 0);
console.log("El equipo '" + equipoFantasy.nombre + "', fundado en " + equipoFantasy.fechaFundacion + " y que va en el puesto " + equipoFantasy.id + " en la SuperLiga tiene en sus filas a estos jugadores: ");
console.log(jugadores);
console.log("");
console.log("El jugador llamado " + jugador1.nombre + " con el numero " + historialMessi.id + " ha marcado " + historialMessi.numGoles + " goles, ha recibido " + historialMessi.tarjetasAmarillas + " tarjetas amarillas y " + historialMessi.tarjetasRojas + " tarjetas rojas.");
console.log("");
console.log("El jugador llamado " + jugador2.nombre + " con el numero " + historialRonaldo.id + " ha marcado " + historialRonaldo.numGoles + " goles, ha recibido " + historialRonaldo.tarjetasAmarillas + " tarjetas amarillas y " + historialRonaldo.tarjetasRojas + " tarjetas rojas.");
console.log("");
console.log("El jugador llamado " + jugador3.nombre + " con el numero " + historialIniesta.id + "ha marcado " + historialIniesta.numGoles + " goles, ha recibido " + historialIniesta.tarjetasAmarillas + " tarjetas amarillas y " + historialIniesta.tarjetasRojas + " tarjetas rojas.");
