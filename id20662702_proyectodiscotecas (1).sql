-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 28-04-2023 a las 02:57:10
-- Versión del servidor: 10.5.16-MariaDB
-- Versión de PHP: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id20662702_proyectodiscotecas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Discoteca`
--

CREATE TABLE `Discoteca` (
  `IdDiscoteca` int(10) NOT NULL,
  `UsuarioIdDueno` int(10) NOT NULL,
  `localidadidLocalidad` int(11) NOT NULL,
  `Nombre` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `Ubicacion` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `PermiteReservas` char(20) COLLATE utf8_unicode_ci NOT NULL,
  `Descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `valoracion` float DEFAULT NULL,
  `nivelCosto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `Discoteca`
--

INSERT INTO `Discoteca` (`IdDiscoteca`, `UsuarioIdDueno`, `localidadidLocalidad`, `Nombre`, `Ubicacion`, `PermiteReservas`, `Descripcion`, `valoracion`, `nivelCosto`) VALUES
(46, 1, 2, 'Latino Gang', 'Cra. 13 #82-43', '1', 'Latin Beat, Global Internacional', 4.7, 2),
(47, 1, 2, 'Cangri Bar', 'Cr13 #82-39', '1', 'La casa de la rumba urbana de la zona T', 3.9, 2),
(48, 1, 2, 'Palenque Rooftop', 'Cra 13 #82-37', '1', 'Urban & Tropical Beats', 4.3, 3),
(49, 1, 2, 'Eden Rooftop', 'Cra 14 #82-71', '1', 'el jardin den Eden', 4.1, 2),
(50, 1, 2, 'Victoria Bar', 'Cra 13 #25', '1', 'Victoria Bar', 3.5, 2),
(51, 1, 1, 'El Errante', 'Calle 120 #7-40', '1', 'Cervecería el Errante', 4.7, 3),
(52, 1, 17, 'El Candelario', 'Carrera 5 #12B-14', '1', 'El Candelario', 4, 3),
(53, 1, 18, 'Terraza Boulevar', 'Cr 17 Sur #16-77', '1', 'Terraza Boulevar', 4.2, 2),
(54, 1, 14, 'Los Cuates Disco Bar', '14', '1', 'Los Cuates', 4.7, 3),
(55, 1, 14, 'Lima Restobar VIP CLub', 'Cll 19 #7-44', '1', 'VIP CLUB', 4.8, 3),
(56, 1, 3, 'Fiebre Night Club', 'Cra 16a #23 50', '1', 'Fiebre Night Club', 4.4, 2),
(57, 1, 11, 'Shaz Disco Bar', 'Cll 129 #46a-06', '1', 'Suba Shaz', 4.5, 1),
(58, 1, 11, 'MANAOS Club VIP', 'Cll 172a #22a-39', '1', 'Club VIP Granada Norte', 3.9, 2),
(59, 1, 10, 'Bongo Club', 'Cll 72 #96a-45', '1', 'Sin decripcion', 2.2, 1),
(60, 1, 10, 'Jamrock afrosound club', 'Ac 72 #96a-30 piso 2', '1', 'Sin descripcion', 4.5, 2),
(61, 1, 8, 'Ascanio Disco Bar', 'Carrera 71 Cll 9a', '1', 'Sin descripcion', 2.5, 1),
(62, 1, 13, 'Sonora Club', 'Cra 27 # 52 - 61', '1', 'Sin descripcion', 3.5, 2),
(63, 1, 13, 'Petra Bar Galerias', 'Cra 27 #52-46', '1', 'Universidad Nacional', 4, 2),
(64, 1, 9, 'Tokio Urbano Bar', 'Cll 24c #75-24', '1', 'Sin descripcion', 3.9, 2),
(65, 1, 8, 'Keops Vip', 'Cll 6 sur #71d-20', '1', 'Sin descripcion', 4.1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta`
--

CREATE TABLE `etiqueta` (
  `idEtiqueta` int(11) NOT NULL,
  `nombreEtiqueta` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `etiqueta`
--

INSERT INTO `etiqueta` (`idEtiqueta`, `nombreEtiqueta`) VALUES
(1, 'Reggaeton'),
(2, 'Electronica'),
(3, 'Hip-Hop'),
(4, 'Karaoke'),
(5, 'Colombiano'),
(6, 'Latino'),
(7, 'Europeo'),
(8, 'Africano'),
(9, 'Asiático'),
(10, 'Oceania'),
(11, 'Pong'),
(26, 'Arcade'),
(27, 'Arte'),
(28, 'Deportes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta_Discoteca`
--

CREATE TABLE `etiqueta_Discoteca` (
  `etiquetasidEtiqueta` int(11) NOT NULL,
  `DiscotecaIdDiscoteca` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `etiqueta_Discoteca`
--

INSERT INTO `etiqueta_Discoteca` (`etiquetasidEtiqueta`, `DiscotecaIdDiscoteca`) VALUES
(8, 61),
(8, 59),
(26, 47),
(26, 63),
(27, 49),
(27, 51),
(27, 64),
(9, 64),
(5, 52),
(5, 51),
(5, 46),
(5, 48),
(28, 55),
(2, 65),
(2, 64),
(2, 56),
(7, 58),
(7, 49),
(3, 57),
(4, 63),
(3, 54),
(3, 61),
(6, 61),
(6, 52),
(6, 51),
(6, 56),
(6, 55),
(6, 54),
(6, 48),
(10, 50),
(11, 55),
(1, 61),
(1, 59),
(1, 47),
(1, 49),
(1, 52),
(1, 51),
(1, 56),
(1, 60),
(1, 65),
(1, 46),
(1, 48),
(1, 58),
(1, 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Historial_Busqueda`
--

CREATE TABLE `Historial_Busqueda` (
  `UsuarioIdUsuario` int(10) NOT NULL,
  `DiscoteaIdDiscoteca` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `idLocalidad` int(11) NOT NULL,
  `nombreLocalidad` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `localidad`
--

INSERT INTO `localidad` (`idLocalidad`, `nombreLocalidad`) VALUES
(1, 'Usaquen'),
(2, 'Chapinero'),
(3, 'Santa Fe'),
(4, 'San Cristobal'),
(5, 'Usme'),
(6, 'Tunjuelito'),
(7, 'Bosa'),
(8, 'Kennedy'),
(9, 'Fontibon'),
(10, 'Engativa'),
(11, 'Suba'),
(12, 'Barrios Unidos'),
(13, 'Teusaquillo'),
(14, 'Los Martires'),
(15, 'Antonio Nariño'),
(16, 'Puente Aranda'),
(17, 'La Candelaria'),
(18, 'Rafael Uribe Uribe'),
(19, 'Ciudad Bolívar'),
(20, 'Usaquen'),
(21, 'Chapinero'),
(22, 'Santa Fe'),
(23, 'San Cristobal'),
(24, 'Usme'),
(25, 'Tunjuelito'),
(26, 'Bosa'),
(27, 'Kennedy'),
(28, 'Fontibon'),
(29, 'Engativa'),
(30, 'Suba'),
(31, 'Barrios Unidos'),
(32, 'Teusaquillo'),
(33, 'Los Martires'),
(34, 'Antonio Nariño'),
(35, 'Puente Aranda'),
(36, 'La Candelaria'),
(37, 'Rafael Uribe Uribe'),
(38, 'Ciudad Bolívar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Publicidad`
--

CREATE TABLE `Publicidad` (
  `IdPublicidad` int(10) NOT NULL,
  `FechaInicio` date NOT NULL,
  `FechaFinal` date NOT NULL,
  `Estado` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `ImagenPublicitaria` int(10) DEFAULT NULL,
  `DiscoteaIdDiscoteca` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Reserva`
--

CREATE TABLE `Reserva` (
  `IdReserva` int(10) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `CantidadPersonas` int(10) NOT NULL,
  `EstadoDeReserva` int(10) NOT NULL,
  `UsuarioIdUsuario` int(10) NOT NULL,
  `DiscoteaIdDiscoteca` int(10) NOT NULL,
  `valoracion` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `Reserva`
--

INSERT INTO `Reserva` (`IdReserva`, `Fecha`, `Hora`, `CantidadPersonas`, `EstadoDeReserva`, `UsuarioIdUsuario`, `DiscoteaIdDiscoteca`, `valoracion`) VALUES
(4, '2023-04-28', '22:05', 6, 1, 1, 46, NULL),
(5, '2023-04-28', '22:05', 6, 1, 1, 46, NULL),
(6, '2023-04-28', '23:22', 15, 1, 1, 47, NULL),
(7, '2023-05-31', '23:25', 55, 1, 1, 47, NULL),
(8, '2023-04-30', '15:22', 66, 1, 9, 46, NULL),
(9, '2023-04-29', '23:31', 123, 1, 1, 46, NULL),
(10, '2023-04-30', '17:25', 159, 1, 9, 46, NULL),
(11, '2023-04-29', '17:28', 99, 1, 9, 46, NULL),
(12, '2023-04-29', '11:32', 333, 1, 9, 46, NULL),
(13, '2023-04-28', '11:34', 1, 1, 1, 47, NULL),
(14, '2023-04-29', '23:36', 1, 1, 1, 47, NULL),
(15, '2023-04-29', '23:34', 1, 1, 1, 47, NULL),
(16, '2023-04-09', '02:25', 3, 1, 11, 47, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Servicios`
--

CREATE TABLE `Servicios` (
  `IdServicio` int(10) NOT NULL,
  `NombreSerivicio` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `PrecioServicio` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `DiscoteaIdDiscoteca` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ServiciosXReserva`
--

CREATE TABLE `ServiciosXReserva` (
  `ServiciosIdServicio` int(10) NOT NULL,
  `ReservaIdReserva` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `IdUsuario` int(10) NOT NULL,
  `NombreUsuario` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Contrasena` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Nombre` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Apellido` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `TipoDocumento` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `EstadoUsuario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `Usuario`
--

INSERT INTO `Usuario` (`IdUsuario`, `NombreUsuario`, `Contrasena`, `Nombre`, `Apellido`, `TipoDocumento`, `EstadoUsuario`) VALUES
(1, 'admin', 'root', 'root', 'root', 'CC', 2),
(6, 'cucuta', 'a', 'santiago', 'cucuta', 'CC', 1),
(7, 'D', 'D', 'D', 'D', 'CC', 1),
(8, 'Acra', '1234', 'A', 'R', 'CC', 1),
(9, 'y', 'y', 'y', 'y', 'CC', 1),
(10, 'NicoElmejpor777', '12345678', 'Nicolas', 'Rincon', 'CC', 1),
(11, 'hola1', '1234567', 'adaaa', 'infiltrado', 'CC', 1),
(12, 'cucutalinda', '123', 'venezuela', 'cucuta', 'CC', 1),
(13, 'Sofiafea', 'a', 'Sofia', 'Echeverry', 'CC', 1),
(14, 'freud', 'freud', 'ipsum', 'lorem', 'CC', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Discoteca`
--
ALTER TABLE `Discoteca`
  ADD PRIMARY KEY (`IdDiscoteca`),
  ADD KEY `FKDiscoteca229497` (`localidadidLocalidad`),
  ADD KEY `Dueño` (`UsuarioIdDueno`);

--
-- Indices de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  ADD PRIMARY KEY (`idEtiqueta`);

--
-- Indices de la tabla `etiqueta_Discoteca`
--
ALTER TABLE `etiqueta_Discoteca`
  ADD KEY `FKetiqueta_D583481` (`DiscotecaIdDiscoteca`),
  ADD KEY `FKetiqueta_D434993` (`etiquetasidEtiqueta`);

--
-- Indices de la tabla `Historial_Busqueda`
--
ALTER TABLE `Historial_Busqueda`
  ADD PRIMARY KEY (`UsuarioIdUsuario`,`DiscoteaIdDiscoteca`),
  ADD KEY `FKHistorial_481693` (`DiscoteaIdDiscoteca`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`idLocalidad`);

--
-- Indices de la tabla `Publicidad`
--
ALTER TABLE `Publicidad`
  ADD PRIMARY KEY (`IdPublicidad`),
  ADD KEY `FKPublicidad926560` (`DiscoteaIdDiscoteca`);

--
-- Indices de la tabla `Reserva`
--
ALTER TABLE `Reserva`
  ADD PRIMARY KEY (`IdReserva`),
  ADD KEY `FKReserva914238` (`DiscoteaIdDiscoteca`),
  ADD KEY `FKReserva448552` (`UsuarioIdUsuario`);

--
-- Indices de la tabla `Servicios`
--
ALTER TABLE `Servicios`
  ADD PRIMARY KEY (`IdServicio`),
  ADD KEY `FKServicios856913` (`DiscoteaIdDiscoteca`);

--
-- Indices de la tabla `ServiciosXReserva`
--
ALTER TABLE `ServiciosXReserva`
  ADD PRIMARY KEY (`ServiciosIdServicio`,`ReservaIdReserva`),
  ADD KEY `FKServiciosX825999` (`ReservaIdReserva`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD UNIQUE KEY `NombreUsuario` (`NombreUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Discoteca`
--
ALTER TABLE `Discoteca`
  MODIFY `IdDiscoteca` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  MODIFY `idEtiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `idLocalidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `Publicidad`
--
ALTER TABLE `Publicidad`
  MODIFY `IdPublicidad` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Reserva`
--
ALTER TABLE `Reserva`
  MODIFY `IdReserva` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `Servicios`
--
ALTER TABLE `Servicios`
  MODIFY `IdServicio` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `IdUsuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Discoteca`
--
ALTER TABLE `Discoteca`
  ADD CONSTRAINT `Dueño` FOREIGN KEY (`UsuarioIdDueno`) REFERENCES `Usuario` (`IdUsuario`),
  ADD CONSTRAINT `FKDiscoteca229497` FOREIGN KEY (`localidadidLocalidad`) REFERENCES `localidad` (`idLocalidad`);

--
-- Filtros para la tabla `etiqueta_Discoteca`
--
ALTER TABLE `etiqueta_Discoteca`
  ADD CONSTRAINT `FKetiqueta_D434993` FOREIGN KEY (`etiquetasidEtiqueta`) REFERENCES `etiqueta` (`idEtiqueta`),
  ADD CONSTRAINT `FKetiqueta_D583481` FOREIGN KEY (`DiscotecaIdDiscoteca`) REFERENCES `Discoteca` (`IdDiscoteca`);

--
-- Filtros para la tabla `Historial_Busqueda`
--
ALTER TABLE `Historial_Busqueda`
  ADD CONSTRAINT `FKHistorial_481693` FOREIGN KEY (`DiscoteaIdDiscoteca`) REFERENCES `Discoteca` (`IdDiscoteca`),
  ADD CONSTRAINT `Usuario` FOREIGN KEY (`UsuarioIdUsuario`) REFERENCES `Usuario` (`IdUsuario`);

--
-- Filtros para la tabla `Publicidad`
--
ALTER TABLE `Publicidad`
  ADD CONSTRAINT `FKPublicidad926560` FOREIGN KEY (`DiscoteaIdDiscoteca`) REFERENCES `Discoteca` (`IdDiscoteca`);

--
-- Filtros para la tabla `Reserva`
--
ALTER TABLE `Reserva`
  ADD CONSTRAINT `FKReserva448552` FOREIGN KEY (`UsuarioIdUsuario`) REFERENCES `Usuario` (`IdUsuario`),
  ADD CONSTRAINT `FKReserva914238` FOREIGN KEY (`DiscoteaIdDiscoteca`) REFERENCES `Discoteca` (`IdDiscoteca`);

--
-- Filtros para la tabla `Servicios`
--
ALTER TABLE `Servicios`
  ADD CONSTRAINT `FKServicios856913` FOREIGN KEY (`DiscoteaIdDiscoteca`) REFERENCES `Discoteca` (`IdDiscoteca`);

--
-- Filtros para la tabla `ServiciosXReserva`
--
ALTER TABLE `ServiciosXReserva`
  ADD CONSTRAINT `FKServiciosX177170` FOREIGN KEY (`ServiciosIdServicio`) REFERENCES `Servicios` (`IdServicio`),
  ADD CONSTRAINT `FKServiciosX825999` FOREIGN KEY (`ReservaIdReserva`) REFERENCES `Reserva` (`IdReserva`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
