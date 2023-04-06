CREATE TABLE Discoteca (
  IdDiscoteca          int(10) NOT NULL AUTO_INCREMENT, 
  UsuarioIdDueno       int(10) NOT NULL, 
  localidadidLocalidad int(11) NOT NULL, 
  Nombre               varchar(20) NOT NULL, 
  Ubicacion            varchar(20) NOT NULL, 
  PermiteReservas      char(20) NOT NULL, 
  Descripcion          varchar(20), 
  valoracion           float, 
  nivelCosto           int(11), 
  PRIMARY KEY (IdDiscoteca));
CREATE TABLE etiqueta (
  idEtiqueta     int(11) NOT NULL AUTO_INCREMENT, 
  nombreEtiqueta varchar(255), 
  PRIMARY KEY (idEtiqueta));
CREATE TABLE etiqueta_Discoteca (
  etiquetasidEtiqueta  int(11) NOT NULL, 
  DiscotecaIdDiscoteca int(10) NOT NULL);
CREATE TABLE Historial_Busqueda (
  UsuarioIdUsuario    int(10) NOT NULL, 
  DiscoteaIdDiscoteca int(10) NOT NULL, 
  PRIMARY KEY (UsuarioIdUsuario, 
  DiscoteaIdDiscoteca));
CREATE TABLE localidad (
  idLocalidad     int(11) NOT NULL AUTO_INCREMENT, 
  nombreLocalidad varchar(255) NOT NULL, 
  PRIMARY KEY (idLocalidad));
CREATE TABLE Publicidad (
  IdPublicidad        int(10) NOT NULL AUTO_INCREMENT, 
  FechaInicio         date NOT NULL, 
  FechaFinal          date NOT NULL, 
  Estado              char(255) NOT NULL, 
  ImagenPublicitaria  int(10), 
  DiscoteaIdDiscoteca int(10) NOT NULL, 
  PRIMARY KEY (IdPublicidad));
CREATE TABLE Reserva (
  IdReserva           int(10) NOT NULL AUTO_INCREMENT, 
  Fecha               date NOT NULL, 
  Hora                varchar(20) NOT NULL, 
  CantidadPersonas    int(10) NOT NULL, 
  EstadoDeReserva     int(10) NOT NULL, 
  UsuarioIdUsuario    int(10) NOT NULL, 
  DiscoteaIdDiscoteca int(10) NOT NULL, 
  valoracion          float, 
  PRIMARY KEY (IdReserva));
CREATE TABLE Servicios (
  IdServicio          int(10) NOT NULL AUTO_INCREMENT, 
  NombreSerivicio     varchar(20) NOT NULL, 
  PrecioServicio      varchar(20) NOT NULL, 
  DiscoteaIdDiscoteca int(10) NOT NULL, 
  PRIMARY KEY (IdServicio));
CREATE TABLE ServiciosXReserva (
  ServiciosIdServicio int(10) NOT NULL, 
  ReservaIdReserva    int(10) NOT NULL, 
  PRIMARY KEY (ServiciosIdServicio, 
  ReservaIdReserva));
CREATE TABLE Usuario (
  IdUsuario     int(10) NOT NULL AUTO_INCREMENT, 
  NombreUsuario varchar(20) NOT NULL UNIQUE, 
  Contrasena    varchar(20) NOT NULL, 
  Nombre        varchar(20) NOT NULL, 
  Apellido      varchar(20) NOT NULL, 
  TipoDocumento varchar(20) NOT NULL, 
  EstadoUsuario int(10) NOT NULL, 
  PRIMARY KEY (IdUsuario));
ALTER TABLE Discoteca ADD CONSTRAINT FKDiscoteca229497 FOREIGN KEY (localidadidLocalidad) REFERENCES localidad (idLocalidad);
ALTER TABLE etiqueta_Discoteca ADD CONSTRAINT FKetiqueta_D583481 FOREIGN KEY (DiscotecaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE etiqueta_Discoteca ADD CONSTRAINT FKetiqueta_D434993 FOREIGN KEY (etiquetasidEtiqueta) REFERENCES etiqueta (idEtiqueta);
ALTER TABLE Historial_Busqueda ADD CONSTRAINT FKHistorial_481693 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE ServiciosXReserva ADD CONSTRAINT FKServiciosX825999 FOREIGN KEY (ReservaIdReserva) REFERENCES Reserva (IdReserva);
ALTER TABLE ServiciosXReserva ADD CONSTRAINT FKServiciosX177170 FOREIGN KEY (ServiciosIdServicio) REFERENCES Servicios (IdServicio);
ALTER TABLE Reserva ADD CONSTRAINT FKReserva914238 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE Publicidad ADD CONSTRAINT FKPublicidad926560 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE Servicios ADD CONSTRAINT FKServicios856913 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE Reserva ADD CONSTRAINT FKReserva448552 FOREIGN KEY (UsuarioIdUsuario) REFERENCES Usuario (IdUsuario);
ALTER TABLE Discoteca ADD CONSTRAINT Dueño FOREIGN KEY (UsuarioIdDueno) REFERENCES Usuario (IdUsuario);
ALTER TABLE Historial_Busqueda ADD CONSTRAINT Usuario FOREIGN KEY (UsuarioIdUsuario) REFERENCES Usuario (IdUsuario);
