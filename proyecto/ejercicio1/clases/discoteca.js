class Discoteca {
  constructor(idDiscoteca, idUsuarioDueno, nombre, ubicacion, permiteReservas, descripcion) {

    this.idDiscoteca = idDiscoteca;
    this.idUsuarioDueno = idUsuarioDueno;
    this.Nombre = nombre;
    this.Ubicacion = ubicacion;
    this.PermiteReservas = permiteReservas;
    this.Descripcion = descripcion;
  }
  getIdDiscoteca() {
    return this.idDiscoteca;
  }
  setIdDiscoteca(idDiscoteca) {
    this.idDiscoteca = this.idDiscoteca;
  }
  getIdUsuarioDueno() {
    return this.idUsuarioDueno;
  }
  setIdUsuarioDueno(idUsuarioDueno) {
    this.idUsuarioDueno = this.idUsuarioDueno;
  }
  getNombre() {
    return this.Nombre;
  }
  setNombre(nombre) {
    this.Nombre = nombre;
  }
  getUbicacion() {
    return this.Ubicacion;
  }
  setUbicacion(ubicacion) {
    this.Ubicacion = ubicacion;
  }
  getPermiteReservas() {
    return this.PermiteReservas;
  }
  setPermiteReservas(permiteReservas) {
    this.PermiteReservas = permiteReservas;
  }
  getDescripcion() {
    return this.Descripcion;
  }
  setDescripcion(descripcion) {
    this.Descripcion = descripcion;
  }
  getListaPublicidad() {
    return this.listaPublicidad;
  }
  setListaPublicidad(listaPublicidad) {
    this.listaPublicidad = this.listaPublicidad;
  }
  getListaReservas() {
    return this.listaReservas;
  }
  setListaReservas(listaReservas) {
    this.listaReservas = this.listaReservas;
  }
  getHistorialVisitas() {
    return this.historialVisitas;
  }
  setHistorialVisitas(historialVisitas) {
    this.historialVisitas = this.historialVisitas;
  }
}

console.log("clase discotecas: Conectado");