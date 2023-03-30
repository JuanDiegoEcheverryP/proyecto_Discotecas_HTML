CREATE TABLE Usuario (
  IdUsuario     int(10) NOT NULL AUTO_INCREMENT, 
  NombreUsuario varchar(20) NOT NULL UNIQUE, 
  Contrasena    varchar(20) NOT NULL, 
  Nombre        varchar(20) NOT NULL, 
  Apellido      varchar(20) NOT NULL, 
  TipoDocumento varchar(20) NOT NULL, 
  EstadoUsuario int(10) NOT NULL, 
  PRIMARY KEY (IdUsuario));
CREATE TABLE Discoteca (
  IdDiscoteca     int(10) NOT NULL AUTO_INCREMENT, 
  Nombre          varchar(20) NOT NULL, 
  Ubicacion       varchar(20) NOT NULL, 
  PermiteReservas char(20) NOT NULL, 
  Descripcion     varchar(20), 
  UsuarioIdDueno  int(10), 
  PRIMARY KEY (IdDiscoteca));
CREATE TABLE Servicios (
  IdServicio          int(10) NOT NULL AUTO_INCREMENT, 
  NombreSerivicio     varchar(20) NOT NULL, 
  PrecioServicio      varchar(20) NOT NULL, 
  DiscoteaIdDiscoteca int(10) NOT NULL, 
  PRIMARY KEY (IdServicio));
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
  PRIMARY KEY (IdReserva));
CREATE TABLE ServiciosXReserva (
  ServiciosIdServicio int(10) NOT NULL, 
  ReservaIdReserva    int(10) NOT NULL, 
  PRIMARY KEY (ServiciosIdServicio, 
  ReservaIdReserva));
CREATE TABLE Historial_Busqueda (
  UsuarioIdUsuario    int(10) NOT NULL, 
  DiscoteaIdDiscoteca int(10) NOT NULL, 
  PRIMARY KEY (UsuarioIdUsuario, 
  DiscoteaIdDiscoteca));
ALTER TABLE Reserva ADD CONSTRAINT FKReserva448552 FOREIGN KEY (UsuarioIdUsuario) REFERENCES Usuario (IdUsuario);
ALTER TABLE Servicios ADD CONSTRAINT FKServicios856913 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE Publicidad ADD CONSTRAINT FKPublicidad926560 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE Reserva ADD CONSTRAINT FKReserva914238 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
ALTER TABLE ServiciosXReserva ADD CONSTRAINT FKServiciosX177170 FOREIGN KEY (ServiciosIdServicio) REFERENCES Servicios (IdServicio);
ALTER TABLE ServiciosXReserva ADD CONSTRAINT FKServiciosX825999 FOREIGN KEY (ReservaIdReserva) REFERENCES Reserva (IdReserva);
ALTER TABLE Discoteca ADD CONSTRAINT Dueño FOREIGN KEY (UsuarioIdDueno) REFERENCES Usuario (IdUsuario);
ALTER TABLE Historial_Busqueda ADD CONSTRAINT Usuario FOREIGN KEY (UsuarioIdUsuario) REFERENCES Usuario (IdUsuario);
ALTER TABLE Historial_Busqueda ADD CONSTRAINT FKHistorial_481693 FOREIGN KEY (DiscoteaIdDiscoteca) REFERENCES Discoteca (IdDiscoteca);
