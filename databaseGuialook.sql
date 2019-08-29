-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: guialook
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `establecimiento`
--

DROP TABLE IF EXISTS `establecimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `establecimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perfilEstablecimientoID` int(11) DEFAULT NULL,
  `Nombre_establecimiento` varchar(100) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `Direccion` varchar(200) NOT NULL,
  `Precio` int(11) NOT NULL,
  `Telefono` varchar(40) NOT NULL,
  `mapa` varchar(400) NOT NULL,
  `Promociones` int(11) NOT NULL,
  `imagenPrincipal` varchar(100) NOT NULL,
  `prod` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `establecimiento`
--

LOCK TABLES `establecimiento` WRITE;
/*!40000 ALTER TABLE `establecimiento` DISABLE KEYS */;
INSERT INTO `establecimiento` VALUES (1,NULL,'Clínica Just Smile',NULL,'Punta Pacifica,misma ubicación Hospital punta pacifica',25,'5072648088','https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15763.690944418599!2d-79.52099919999999!3d8.979257299999999!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spa!4v1555431502358!5m2!1ses!2spa',0,'justsmile.jpg',1),(2,NULL,' RED GURU',NULL,'Panamá,Stripmall diagonal a Multipliza (misma plaza de Starbucks) ',20,'5070000000','https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63053.963039913295!2d-79.54853379227062!3d8.983860828684156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x8faca91d3a73cc47%3A0x384925f2baae1332!2zR3VydSBTYWxvbiB8IFNhbMOzbiBCZWxsZXphIFBhbmFtw6EsIFbDrWEgSXNyYWVsLCBQYW5hbcOh!3m2!1d8.9837777!2d-79.5135142!5e0!3m2!1ses!2spa!4v1555431389754!5m2!1ses!2spa',0,'53696634_561524627675856_3258428998408994816_o.jpg',1),(3,NULL,'Salvador Uomo',NULL,'Panamá,Albrook Mall',20,'5070000000','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.968968558538!2d-79.55621548517125!3d8.9750024923034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9eaf4409863%3A0xf7a26c1eb3127a52!2sSalvador+Uomo+Albrook+Mall!5e0!3m2!1ses!2spa!4v1555431647831!5m2!1ses!2spa',0,'salvador_5.jpg',1),(4,NULL,'Pink Buddha',NULL,'Via Argentina,Plaza El Cangrejo Calle Manuel Espinoza Batista y Via Argentina? ',20,'50700000','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.831298468126!2d-79.53414518517117!3d8.987666492109536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9f884e556a5%3A0xbac7888cc07d267f!2sPink+Buddha!5e0!3m2!1ses!2spa!4v1555431714630!5m2!1ses!2spa',1,'Budha_1.png',1),(5,NULL,'Animal X',NULL,'Bella Vista,Calle 48 Bella Vista',25,'507000000','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.945002110959!2d-79.52799728517125!3d8.97720839226971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e6304f0fa1%3A0xdae66bf56967d515!2sAnimalX+%E2%84%A2+LifeStyle!5e0!3m2!1ses!2spa!4v1555431771702!5m2!1ses!2spa',1,'animal_1.jpg',1),(7,NULL,' Idental clinic',NULL,'Panamá,Calle 34 oeste El cangrejo PH Setton Place',25,'5070000000','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8262767871115!2d-79.52966418517121!3d8.98812809210248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f08fa9fc7b%3A0x3778efec0adc5018!2siDental+Clinic!5e0!3m2!1ses!2spa!4v1555431863370!5m2!1ses!2spa',1,'Idental_4.jpg',1),(8,NULL,'Cesar Barber Shop',NULL,'San Francisco,Calle 71 y Porras San Francisco',10,'50700000000','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7366050248106!2d-79.51154178517119!3d8.9963668919762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9a9f426726b%3A0x80e9a40cbddd3d0a!2sCesar+Barber+Shop!5e0!3m2!1ses!2spa!4v1555431906647!5m2!1ses!2spa',1,'cesar_1.jpg',1),(9,NULL,'Spa Manos',NULL,'Sector Obarrio Calle 50, frente a Panafoto Panamá, Panamá',10,'5072035836','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9135127592212!2d-79.52626728517124!3d8.980105892225303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e5d1e484ff%3A0xaf14781a06375c54!2sSpaManos+Calle+50!5e0!3m2!1ses!2spa!4v1555431997578!5m2!1ses!2spa',1,'spa_manos_5.jpg',1),(10,NULL,'Velvet Nails',NULL,'Via Argentina,Calle 60 Barrio frente a Stone Port Cafe ',20,'50700000','https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15763.690944418599!2d-79.52099919999999!3d8.979257299999999!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spa!4v1555431502358!5m2!1ses!2spa',1,'velvet_4.jpg',1),(11,NULL,'Salon Bal Harbour',NULL,'Panamá, Av. Italia Plaza Mal Harbour Paitilla',10,'5072640668','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.94759245366!2d-79.51670168255612!3d8.976970000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca91e3063c5db%3A0x8ca831232b7e48d4!2sPlaza+Bal+Harbour!5e0!3m2!1ses!2spa!4v1555432118029!5m2!1ses!2spa',1,'Bal_3.jpg',1),(12,NULL,'Lupes Gold',NULL,'San Francisco, Calle 70 en San Francisco a 50 metros de calle 50.',20,'50762015925','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.799941411464!2d-79.51078178517115!3d8.990548492065386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca906bcc15b11%3A0x711bea89e848cff3!2sLupes+Gold+-+San+Francisco!5e0!3m2!1ses!2spa!4v1555432151353!5m2!1ses!2spa',1,'Lupes_1.jpg',1),(13,NULL,'Coco Spa',NULL,'San Francisco,Calle 78 San Francisco Ph Coco Mar Local 3',20,'507-6294-7936','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7842275811627!2d-79.5018050851712!3d8.991992392043263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9a7bbca11df%3A0xa3afa4ac3bce7967!2sCoco+spa!5e0!3m2!1ses!2spa!4v1555432193366!5m2!1ses!2spa\" width=\"600',1,'Coco_3.jpg',1),(14,NULL,'Human Care estethic center',NULL,'Panamá,Via porras calle 63 este casa nro 43',20,'507-000-000','https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15763.690944418599!2d-79.52099919999999!3d8.979257299999999!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spa!4v1555431502358!5m2!1ses!2spa',1,'human_1.png',1),(17,NULL,'Physis Clinica de Salud Integral ',NULL,'Panamá,Centro Médico Nacional',8,'50761211187','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0004520916605!2d-79.53579945041749!3d8.972103893528736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca97e0116e4a9%3A0x61c9ac3d5d89090!2sCentro+M%C3%A9dico+Nacional!5e0!3m2!1ses!2spa!4v1557594022242!5m2!1ses!2spa',1,'physis1.jpeg',0),(18,NULL,'Physis Clínica Salud Integral ',NULL,'Panamá,Centro Médico Nacional. Piso 3, local 303',8,'50761211187','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0004520916605!2d-79.53579945041749!3d8.972103893528736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca97e0116e4a9%3A0x61c9ac3d5d89090!2sCentro+M%C3%A9dico+Nacional!5e0!3m2!1ses!2spa!4v1557594022242!5m2!1ses!2spa',1,'physis1.jpeg',0),(24,NULL,'test2',NULL,'Alcalde Díaz,507',10,'50762569274','test',1,'plugdo-bg.jpg',0),(25,NULL,'test33',NULL,'Juan Díaz,test',10,'50762569274','test',1,'plugdo-bg.jpg',0),(36,NULL,'test',NULL,'24 de Diciembre,507',10,'50762569274','test',1,'plugdo-bg.jpg',0),(37,NULL,'Corpo Bello Aesthetic & Spa',NULL,'Via Argentina,Consultorios Medicos America, Consultorio 24. Panamá City, Panamá.',8,'507399-1606 / 6874-0084','https://www.google.com/maps/embed?pb=\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0',1,'corpobellologo.jpeg',1),(38,NULL,'Quality Dentcare ',NULL,'Betania,Calle 70 Oeste Camino Real Bethania',20,'5076683-4416','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6134104398297!2d-79.52531904975505!3d9.007673491771332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca84e375e7d3b%3A0xff7e1c79a8c079e9!2sQuality+Dentcare!5e0!3m2!1ses-419!2spa!4v1564847945255!5m2!1ses-419!2spa',1,'logo quality dentcare color-01 2.png',0),(39,NULL,'Quality Dental Care ',NULL,'Betania,Calle 70 oeste Camino Real Bethania ',20,'5076683-4416','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6134104398297!2d-79.52531904975505!3d9.007673491771332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca84e375e7d3b%3A0xff7e1c79a8c079e9!2sQuality+Dentcare!5e0!3m2!1ses-419!2spa!4v1564847945255!5m2!1ses-419!2spa',1,'logo quality dentcare color-01 2.png',0),(40,NULL,'Lotus Lash ',NULL,'Panamá,Av Principal Condado Del Rey Plaza Micondado 1er Piso Local 26',10,'5076033-5490','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.24937982351!2d-79.53030554975491!3d9.041001691258652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab575b0244276d%3A0x85f0647fa4488a8!2sLotus+lash+studio+panama!5e0!3m2!1ses-419!2spa!4v1564850107214!5m2!1ses-419!2spa',1,'7f623fea-3add-483a-92c6-dfac09bfe464.jpeg',1),(41,NULL,'Wapuras pty',NULL,'Ubicación del local,on line',8,'507214-0262','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.957278868216!2d-79.52267118617748!3d8.976078492289423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e0ce0ab649%3A0xb557069499142588!2sBalboa+Boutiques+-+Strip+Mall+-+Shopping+Mall!5e0!3m2!1sen!2spa!4v1564850207187!5m2!1sen!2spa',1,'LOGOWAPURAS.png',1),(42,NULL,'Cercim Centro de Rehabilitacion y cirujia maxilar.',NULL,'Bella Vista,Centro Medico Nacional Piso 4 consultorio 406 Calle Justo Arosemena y calle 38, Bella Vista.',20,'507227-2314','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9948656140373!2d-79.53572954975516!3d8.972618292308695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8c195a4055f%3A0xb93405285702d0d3!2sCERCIM!5e0!3m2!1ses-419!2spa!4v1564933180343!5m2!1ses-419!2spa',1,'33d1f761-0add-4aa5-81f4-add0cf12f20e.JPG',1),(43,NULL,'OCEAN GYM ',NULL,'Punta Pacifica,Oceania Business Center Piso 14 ',25,'507235-4500','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.908532226305!2d-79.51260414975512!3d8.980564092187084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca91c726d9a47%3A0xf257c571ccf456ac!2sOcean+Gym+Panam%C3%A1!5e0!3m2!1ses-419!2spa!4v1564937917062!5m2!1ses-419!2spa',1,'IMG_0393.jpg',0),(44,NULL,'Abdiel test',NULL,'Via España,Calle 50',10,'50762569274','Link',1,'15649423591688815334800209155739.jpg',0),(45,NULL,'Glow Nails & More ',NULL,'Panamá,Plaza Las America LA Chorrera local 3 1er. Piso.',10,'5076318-0029','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9649733554543!2d-79.77896184974776!3d8.882848593675654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fac982e2a28e0bd%3A0x113563bf62da4b84!2sKing+West+Sport+Bar+%26+Grill!5e0!3m2!1ses-419!2spa!4v1564967349564!5m2!1ses-419!2spa',1,'1e93cff3-ed42-47c5-8467-4cb228198999.JPG',0),(46,NULL,'Marco Aldany',NULL,'Costa del Este,Town Center Costa Del Este Edificio Bladex ',20,'507303-1003','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.544827900184!2d-79.46698054974729!3d9.013961791674753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8facaa218fa81e8d%3A0x8bb2294ac1e1119c!2sTown+Center+Costa+del+Este!5e0!3m2!1ses-419!2spa!4v1565536268069!5m2!1ses-419!2spa',1,'peinado.png',0),(47,NULL,'Beautiful Smile ',NULL,'Panamá,Av Ramon Arias, Via Brasil Plaza Caldelas. Local nro. 4 ',20,'5076671-9131','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.78104076095!2d-79.52446604973967!3d8.99228519200748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9dc3cfa2e17%3A0xdee07823ea87655!2sBeautiful+Smile+Dental+Clinic!5e0!3m2!1ses-419!2spa!4v1565538553275!5m2!1ses-419!2spa',1,'cdc6f5fc-6a5a-41b8-94bc-9d4576b66930.JPG',0),(48,NULL,'Testing ',NULL,'Ancón,Test abdiel ',10,'50762569274','Link ',1,'15656343777698687945402444493823.jpg',0),(49,NULL,'test abdiel VIP ',NULL,'Chame,test ',10,'50762569274','link',1,'avatar-dhg.png',0),(52,NULL,'Barberia VIP',NULL,'Multiplaza,local 30b',10,'50762569274','link',1,'d107ffcd-c84f-4851-b14c-ce224a7fc7c9.jfif',0),(53,NULL,'Barberia abdiel ',NULL,'Multiplaza,test abdiel',10,'50762569274','link',1,'cedeec05-1fe5-41db-96af-d2c3b1aa85e4.jfif',0),(54,6,'Flores VI','abdielantoni.af@gmail.com','Alcalde Díaz,via españa al de la ',10,'45521','link',1,'plugdo-bg.jpg',0);
/*!40000 ALTER TABLE `establecimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `establecimientohorario`
--

DROP TABLE IF EXISTS `establecimientohorario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `establecimientohorario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perfilEstablecimientoID` int(11) DEFAULT NULL,
  `dia` varchar(45) NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFinal` time NOT NULL,
  `rowCreate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=365 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `establecimientohorario`
--

LOCK TABLES `establecimientohorario` WRITE;
/*!40000 ALTER TABLE `establecimientohorario` DISABLE KEYS */;
INSERT INTO `establecimientohorario` VALUES (1,1,'Lunes','09:00:00','18:00:00',NULL),(2,1,'Martes','09:00:00','18:00:00',NULL),(3,1,'Miercoles','09:00:00','18:00:00',NULL),(4,1,'Jueves','09:00:00','18:00:00',NULL),(5,1,'Viernes','09:00:00','18:00:00',NULL),(6,1,'Sabado','00:00:00','00:00:00',NULL),(7,1,'Domingo','00:00:00','00:00:00',NULL),(8,2,'Lunes','09:00:00','19:00:00',NULL),(9,2,'Martes','09:00:00','19:00:00',NULL),(10,2,'Miercoles','09:00:00','19:00:00',NULL),(11,2,'Jueves','09:00:00','19:00:00',NULL),(12,2,'Viernes','09:00:00','19:00:00',NULL),(13,2,'Sabado','09:00:00','19:00:00',NULL),(14,2,'Domingo','00:00:00','00:00:00',NULL),(15,3,'Lunes','10:00:00','19:00:00',NULL),(16,3,'Martes','10:00:00','19:00:00',NULL),(17,3,'Miercoles','10:00:00','19:00:00',NULL),(18,3,'Jueves','10:00:00','19:00:00',NULL),(19,3,'Viernes','10:00:00','19:00:00',NULL),(20,3,'Sabado','10:00:00','19:00:00',NULL),(21,3,'Domingo','00:00:00','00:00:00',NULL),(22,4,'Lunes','10:00:00','20:00:00',NULL),(23,4,'Martes','10:00:00','20:00:00',NULL),(24,4,'Miercoles','10:00:00','20:00:00',NULL),(25,4,'Jueves','10:00:00','20:00:00',NULL),(26,4,'Viernes','10:00:00','20:00:00',NULL),(27,4,'Sabado','10:00:00','20:00:00',NULL),(28,4,'Domingo','00:00:00','00:00:00',NULL),(36,8,'Lunes','09:00:00','20:00:00',NULL),(37,8,'Martes','09:00:00','20:00:00',NULL),(38,8,'Miercoles','09:00:00','20:00:00',NULL),(39,8,'Jueves','09:00:00','20:00:00',NULL),(40,8,'Viernes','09:00:00','20:00:00',NULL),(41,8,'Sabado','00:00:00','00:00:00',NULL),(42,8,'Domingo','00:00:00','00:00:00',NULL),(43,12,'Lunes','10:00:00','19:00:00',NULL),(44,12,'Martes','10:00:00','19:00:00',NULL),(45,12,'Miercoles','10:00:00','19:00:00',NULL),(46,12,'Jueves','10:00:00','19:00:00',NULL),(47,12,'Viernes','10:00:00','19:00:00',NULL),(48,12,'Sabado','00:00:00','00:00:00',NULL),(49,12,'Domingo','00:00:00','00:00:00',NULL),(50,13,'Lunes','10:00:00','18:00:00',NULL),(51,13,'Martes','10:00:00','18:00:00',NULL),(52,13,'Miercoles','10:00:00','18:00:00',NULL),(53,13,'Jueves','10:00:00','18:00:00',NULL),(54,13,'Viernes','10:00:00','18:00:00',NULL),(55,13,'Sabado','00:00:00','00:00:00',NULL),(56,13,'Domingo','00:00:00','00:00:00',NULL),(57,14,'Lunes','08:30:00','18:00:00',NULL),(58,14,'Martes','08:30:00','18:00:00',NULL),(59,14,'Miercoles','08:30:00','18:00:00',NULL),(60,14,'Jueves','08:30:00','18:00:00',NULL),(61,14,'Viernes','08:30:00','18:00:00',NULL),(62,14,'Sabado','00:00:00','00:00:00',NULL),(63,14,'Domingo','00:00:00','00:00:00',NULL),(64,9,'Lunes','10:00:00','19:00:00',NULL),(65,9,'Martes','10:00:00','19:00:00',NULL),(66,9,'Miercoles','10:00:00','19:00:00',NULL),(67,9,'Jueves','10:00:00','19:00:00',NULL),(68,9,'Viernes','10:00:00','19:00:00',NULL),(69,9,'Sabado','10:00:00','19:00:00',NULL),(70,9,'Domingo','00:00:00','00:00:00',NULL),(71,5,'Lunes','07:35:00','15:45:00',NULL),(72,5,'Martes','07:35:00','15:45:00',NULL),(73,5,'Miercoles','07:35:00','15:45:00',NULL),(74,5,'Jueves','04:35:00','15:45:00',NULL),(75,5,'Viernes','04:35:00','15:45:00',NULL),(76,5,'Sabado','00:00:00','00:00:00',NULL),(77,5,'Domingo','00:00:00','00:00:00',NULL),(78,7,'Lunes','09:00:00','20:00:00',NULL),(79,7,'Martes','09:00:00','20:00:00',NULL),(80,7,'Miercoles','09:00:00','20:00:00',NULL),(81,7,'Jueves','09:00:00','20:00:00',NULL),(82,7,'Viernes','09:00:00','20:00:00',NULL),(83,7,'Sabado','09:00:00','20:00:00',NULL),(84,7,'Domingo','00:00:00','00:00:00',NULL),(85,10,'Lunes','09:00:00','20:00:00',NULL),(86,10,'Martes','09:00:00','20:00:00',NULL),(87,10,'Miercoles','09:00:00','20:00:00',NULL),(88,10,'Jueves','09:00:00','20:00:00',NULL),(89,10,'Viernes','09:00:00','20:00:00',NULL),(90,10,'Sabado','09:00:00','20:00:00',NULL),(91,10,'Domingo','00:00:00','00:00:00',NULL),(92,11,'Lunes','09:00:00','20:00:00',NULL),(93,11,'Martes','09:00:00','20:00:00',NULL),(94,11,'Miercoles','09:00:00','20:00:00',NULL),(95,11,'Jueves','09:00:00','20:00:00',NULL),(96,11,'Viernes','09:00:00','20:00:00',NULL),(97,11,'Sabado','09:00:00','20:00:00',NULL),(98,11,'Domingo','00:00:00','00:00:00',NULL),(113,17,'Lunes','08:00:00','05:00:00',NULL),(114,17,'Martes','08:00:00','05:00:00',NULL),(115,17,'Miercoles','08:00:00','05:00:00',NULL),(116,17,'Jueves','08:00:00','05:00:00',NULL),(117,17,'Viernes','08:00:00','05:00:00',NULL),(118,17,'Sabado','08:00:00','05:00:00',NULL),(119,17,'Domingo','00:00:00','00:00:00',NULL),(120,18,'Lunes','07:00:00','20:00:00',NULL),(121,18,'Martes','00:00:00','00:00:00',NULL),(122,18,'Miercoles','00:00:00','00:00:00',NULL),(123,18,'Jueves','00:00:00','00:00:00',NULL),(124,18,'Viernes','00:00:00','00:00:00',NULL),(125,18,'Sabado','00:00:00','00:00:00',NULL),(126,18,'Domingo','00:00:00','00:00:00',NULL),(162,0,'Lunes','10:00:00','18:00:00',NULL),(163,0,'Martes','10:00:00','18:00:00',NULL),(164,0,'Miercoles','10:00:00','18:00:00',NULL),(165,0,'Jueves','10:00:00','18:00:00',NULL),(166,0,'Viernes','10:00:00','18:00:00',NULL),(167,0,'Sabado','00:00:00','00:00:00',NULL),(168,0,'Domingo','00:00:00','00:00:00',NULL),(225,37,'Lunes','00:00:00','00:00:00',NULL),(226,37,'Martes','00:00:00','00:00:00',NULL),(227,37,'Miercoles','09:00:00','14:00:00',NULL),(228,37,'Jueves','09:00:00','18:00:00',NULL),(229,37,'Viernes','09:00:00','18:00:00',NULL),(230,37,'Sabado','09:00:00','18:00:00',NULL),(231,37,'Domingo','09:00:00','18:00:00',NULL),(232,40,'Lunes','10:00:00','07:00:00',NULL),(233,40,'Martes','10:00:00','07:00:00',NULL),(234,40,'Miercoles','10:00:00','07:00:00',NULL),(235,40,'Jueves','10:00:00','07:00:00',NULL),(236,40,'Viernes','10:00:00','07:00:00',NULL),(237,40,'Sabado','10:00:00','07:00:00',NULL),(238,40,'Domingo','00:00:00','00:00:00',NULL),(239,41,'Lunes','09:00:00','19:00:00',NULL),(240,41,'Martes','09:00:00','19:00:00',NULL),(241,41,'Miercoles','09:00:00','19:00:00',NULL),(242,41,'Jueves','09:00:00','19:00:00',NULL),(243,41,'Viernes','09:00:00','19:00:00',NULL),(244,41,'Sabado','09:00:00','19:00:00',NULL),(245,41,'Domingo','00:00:00','00:00:00',NULL),(246,42,'Lunes','08:00:00','06:00:00',NULL),(247,42,'Martes','00:00:00','06:00:00',NULL),(248,42,'Miercoles','08:00:00','06:00:00',NULL),(249,42,'Jueves','08:00:00','08:00:00',NULL),(250,42,'Viernes','08:00:00','06:00:00',NULL),(251,42,'Sabado','09:00:00','03:00:00',NULL),(252,42,'Domingo','09:00:00','03:00:00',NULL),(253,43,'Lunes','06:00:00','10:00:00',NULL),(254,43,'Martes','06:00:00','10:00:00',NULL),(255,43,'Miercoles','06:00:00','10:00:00',NULL),(256,43,'Jueves','06:00:00','10:00:00',NULL),(257,43,'Viernes','06:00:00','10:00:00',NULL),(258,43,'Sabado','06:00:00','05:00:00',NULL),(259,43,'Domingo','06:00:00','05:00:00',NULL),(260,0,'Lunes','06:00:00','05:00:00',NULL),(261,0,'Martes','06:00:00','10:00:00',NULL),(262,0,'Miercoles','06:00:00','10:00:00',NULL),(263,0,'Jueves','06:00:00','10:00:00',NULL),(264,0,'Viernes','06:00:00','10:00:00',NULL),(265,0,'Sabado','06:00:00','10:00:00',NULL),(266,0,'Domingo','06:00:00','10:00:00',NULL),(267,0,'Lunes','06:00:00','10:00:00',NULL),(268,0,'Martes','06:00:00','10:00:00',NULL),(269,0,'Miercoles','06:00:00','10:00:00',NULL),(270,0,'Jueves','06:00:00','10:00:00',NULL),(271,0,'Viernes','06:00:00','10:00:00',NULL),(272,0,'Sabado','06:00:00','10:00:00',NULL),(273,0,'Domingo','06:00:00','10:00:00',NULL),(274,273,'Lunes','06:00:00','10:00:00',NULL),(275,273,'Martes','06:00:00','10:00:00',NULL),(276,273,'Miercoles','06:00:00','10:00:00',NULL),(277,273,'Jueves','06:00:00','10:00:00',NULL),(278,273,'Viernes','06:00:00','10:00:00',NULL),(279,273,'Sabado','06:00:00','10:00:00',NULL),(280,273,'Domingo','06:00:00','10:00:00',NULL),(281,0,'Lunes','06:00:00','05:00:00',NULL),(282,0,'Martes','06:00:00','10:00:00',NULL),(283,0,'Miercoles','06:00:00','10:00:00',NULL),(284,0,'Jueves','06:00:00','10:00:00',NULL),(285,0,'Viernes','06:00:00','10:00:00',NULL),(286,0,'Sabado','06:00:00','10:00:00',NULL),(287,0,'Domingo','06:00:00','10:00:00',NULL),(288,0,'Lunes','06:00:00','05:00:00',NULL),(289,0,'Martes','06:00:00','10:00:00',NULL),(290,0,'Miercoles','06:00:00','10:00:00',NULL),(291,0,'Jueves','06:00:00','10:00:00',NULL),(292,0,'Viernes','06:00:00','10:00:00',NULL),(293,0,'Sabado','06:00:00','10:00:00',NULL),(294,0,'Domingo','06:00:00','10:00:00',NULL),(295,0,'Lunes','06:00:00','10:00:00',NULL),(296,0,'Martes','06:00:00','10:00:00',NULL),(297,0,'Miercoles','06:00:00','10:00:00',NULL),(298,0,'Jueves','06:00:00','10:00:00',NULL),(299,0,'Viernes','06:00:00','10:00:00',NULL),(300,0,'Sabado','00:00:00','00:00:00',NULL),(301,0,'Domingo','00:00:00','00:00:00',NULL),(302,44,'Lunes','17:13:00','12:14:00',NULL),(303,44,'Martes','17:13:00','12:14:00',NULL),(304,44,'Miercoles','17:13:00','12:14:00',NULL),(305,44,'Jueves','17:13:00','12:14:00',NULL),(306,44,'Viernes','17:13:00','12:14:00',NULL),(307,44,'Sabado','00:00:00','00:00:00',NULL),(308,44,'Domingo','00:00:00','00:00:00',NULL),(309,45,'Lunes','11:00:00','06:00:00',NULL),(310,45,'Martes','10:00:00','08:00:00',NULL),(311,45,'Miercoles','10:00:00','08:00:00',NULL),(312,45,'Jueves','10:00:00','08:00:00',NULL),(313,45,'Viernes','10:00:00','08:00:00',NULL),(314,45,'Sabado','10:00:00','08:00:00',NULL),(315,45,'Domingo','10:00:00','08:00:00',NULL),(316,46,'Lunes','09:00:00','03:00:00',NULL),(317,46,'Martes','08:00:00','08:00:00',NULL),(318,46,'Miercoles','07:00:00','08:00:00',NULL),(319,46,'Jueves','07:00:00','08:00:00',NULL),(320,46,'Viernes','07:00:00','08:00:00',NULL),(321,46,'Sabado','07:00:00','08:00:00',NULL),(322,46,'Domingo','07:00:00','08:00:00',NULL),(323,0,'Lunes','09:00:00','03:00:00',NULL),(324,0,'Martes','07:00:00','08:00:00',NULL),(325,0,'Miercoles','07:00:00','08:00:00',NULL),(326,0,'Jueves','07:00:00','08:00:00',NULL),(327,0,'Viernes','07:00:00','08:00:00',NULL),(328,0,'Sabado','07:00:00','08:00:00',NULL),(329,0,'Domingo','07:00:00','08:00:00',NULL),(330,47,'Lunes','00:00:00','00:00:00',NULL),(331,47,'Martes','00:00:00','00:00:00',NULL),(332,47,'Miercoles','00:00:00','00:00:00',NULL),(333,47,'Jueves','00:00:00','00:00:00',NULL),(334,47,'Viernes','00:00:00','00:00:00',NULL),(335,47,'Sabado','00:00:00','00:00:00',NULL),(336,47,'Domingo','00:00:00','00:00:00',NULL),(337,0,'Lunes','09:00:00','02:00:00',NULL),(338,0,'Martes','08:00:00','06:00:00',NULL),(339,0,'Miercoles','08:00:00','06:00:00',NULL),(340,0,'Jueves','08:00:00','06:00:00',NULL),(341,0,'Viernes','08:00:00','06:00:00',NULL),(342,0,'Sabado','08:00:00','06:00:00',NULL),(343,0,'Domingo','08:00:00','06:00:00',NULL),(344,0,'Lunes','06:00:00','05:00:00',NULL),(345,0,'Martes','06:00:00','10:00:00',NULL),(346,0,'Miercoles','06:00:00','10:00:00',NULL),(347,0,'Jueves','06:00:00','10:00:00',NULL),(348,0,'Viernes','06:00:00','10:00:00',NULL),(349,0,'Sabado','06:00:00','10:00:00',NULL),(350,0,'Domingo','06:00:00','10:00:00',NULL),(351,48,'Lunes','13:27:00','07:27:00',NULL),(352,48,'Martes','13:27:00','07:27:00',NULL),(353,48,'Miercoles','13:27:00','07:27:00',NULL),(354,48,'Jueves','13:27:00','07:27:00',NULL),(355,48,'Viernes','13:27:00','07:27:00',NULL),(356,48,'Sabado','00:00:00','00:00:00',NULL),(357,48,'Domingo','00:00:00','00:00:00',NULL),(358,49,'Lunes','07:00:00','20:00:00',NULL),(359,49,'Martes','07:00:00','20:00:00',NULL),(360,49,'Miercoles','07:00:00','20:00:00',NULL),(361,49,'Jueves','07:00:00','20:00:00',NULL),(362,49,'Viernes','07:00:00','20:00:00',NULL),(363,49,'Sabado','00:00:00','00:00:00',NULL),(364,49,'Domingo','00:00:00','00:00:00',NULL);
/*!40000 ALTER TABLE `establecimientohorario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `establecimientoservicio`
--

DROP TABLE IF EXISTS `establecimientoservicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `establecimientoservicio` (
  `servicioID` int(11) NOT NULL AUTO_INCREMENT,
  `establecimientID` int(11) NOT NULL,
  `servicios` varchar(200) NOT NULL,
  `servicioPrincipal` varchar(520) NOT NULL,
  `establecimientoserviciocol` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`servicioID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `establecimientoservicio`
--

LOCK TABLES `establecimientoservicio` WRITE;
/*!40000 ALTER TABLE `establecimientoservicio` DISABLE KEYS */;
INSERT INTO `establecimientoservicio` VALUES (1,1,'Limpieza,Diseño de sonrisa,Blanqueamiento,Tratamiento Odontológico,Ortodoncia,Odontología Cosmética,Cirugía Maxilofacial,Implantología','Clínicas Dentales',NULL),(2,2,'Masajes relajantes,Masajes reductores,Masajes Terapéuticos,Aromaterapia,Musicoterapia,Cromoterapia','Masajes y Spa',NULL),(3,3,'Corte de cabello,Lavado,Alizados,Barba,Tinte,Manicure','Barberias',NULL),(4,4,'Corte de cabello,Lavado,Planchado,Alizados,Peinados,Maquillaje,Uñas,Masajes','Salones',NULL),(5,5,'TRXs,Crossfit,Bootcamp,Entrenamiento ,Personalizad','Functional Training',NULL),(7,7,'Limpieza,Diseño de sonrisa,Blanqueamiento,Tratamiento Odontológico,Ortodoncia,Odontología Cosmética,Cirugía Maxilofacial,Implantología','Clínicas',NULL),(8,8,'Corte de cabello,Lavado,Alizados,Barba,Tinte,Manicure','Barberias',NULL),(9,9,'Manicure,Pedicure,Uñas Esculpidas,Shellac,Podología','Uñas',NULL),(10,10,'Manicure,Pedicure,Shellac,Uñas Esculpidas,Podología','Uñas',NULL),(11,11,'Corte de cabello,Lavado,Planchado,Alizados,Peinado','Salones',NULL),(12,12,'Corte de cabello,Lavado,Planchado,Alizados,Peinados,Maquillaje,Uñas,Masajes','Salones',NULL),(13,13,'Masajes relajantes,Masajes reductores,Masajes Tera','Masajes y Sp ',NULL),(14,14,'Reducción de medidas,Tratamientos corporales,Masajes,Reducción de medidas,Tratamientos corporales,Masajes,Faciales,Tratamientos de la piel','Estética',NULL),(20,18,'Consulta Médica, nutrición, ginecología, cirugía g','Clínicas',NULL),(26,0,'Corte de cabello,Alizados,Lavado,Barba','Barberias',NULL),(36,36,'Corte de cabello,Lavado,Planchado','Salones',NULL),(37,37,'Reducción de medidas,Masajes,Tratamientos corporales,Reducción de medidas,Tratamientos corporales,Masajes,Reducción de medidas,Tratamientos corporales,Masajes,Faciales,Tratamientos de la piel','Estética',NULL),(38,39,'Reducción de medidas','Estética',NULL),(39,40,'Diseño de cejas,Micropigmentación,Pestañas Postizas,Pestañas punto por punto,Microblanding','Cejas y Pestañas',NULL),(40,41,'Corte de cabello,Lavado,Planchado,Alizados,Peinados,Maquillaje,Uñas,Masajes,Masajes','Salones',NULL),(41,42,'Limpieza,Diseño de sonrisa,Blanqueamiento,Tratamiento Odontológico,Ortodoncia,Odontología Cosmética,Cirugía Maxilofacial,Implantología,Consulta Médica','Clínicas',NULL),(42,44,'Corte de cabello,Lavado','Salones',NULL),(43,45,'Manicure,Pedicure,Shellac,Uñas Esculpidas,Podología','Uñas',NULL),(44,47,'Limpieza,Diseño de sonrisa,Tratamiento Odontológico,Ortodoncia,Odontología Cosmética,Implantología','Clínicas',NULL),(45,48,'Corte de cabello,Lavado,Planchado','Salones',NULL),(46,49,'Corte de cabello,Lavado,Planchado','Salones',NULL),(49,52,'Corte de cabello,Lavado,Alizados,Barba,Tinte,Manicure','Barberias',NULL),(50,53,'Corte de cabello,Lavado,Alizados,Barba,Tinte','Barberias',NULL);
/*!40000 ALTER TABLE `establecimientoservicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `establecimirntoID` int(11) DEFAULT NULL,
  `imagenesEstablecimiento` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,1,'53018031_482519375616823_8266498587966308352_o.jpg'),(2,1,'45182239_420957365106358_6500111635863044096_o (1).jpg'),(3,2,'53113343_554563188372000_8674647410254807040_o.jpg'),(4,2,'53060062_557951868033132_6029482214922649600_n.jpg'),(5,3,'salvador_3.jpg'),(6,3,'2.jpg'),(7,4,'Budha_5.jpg'),(8,4,'Budha_3.jpg'),(9,5,'animal_2.jpg'),(10,5,'animal_4.jpg'),(13,7,'Idental_3.jpg'),(14,7,'Idental_2.jpg'),(15,8,'cesar_5.jpg'),(16,8,'cesar_6.jpg'),(17,9,'spa_manos_3.jpg'),(18,9,'spa_manos_2.jpg'),(19,10,'velvet_2.jpg'),(20,10,'velvet_3.jpg'),(21,11,'Bal_2.jpg'),(22,11,'Bal_1.jpg'),(23,12,'human_1.png'),(24,12,'Lupes_4.jpg'),(25,13,'Coco_5.jpg'),(26,13,'Coco_2.jpg'),(27,14,'human_1.png'),(28,14,'human_2.jpg'),(33,17,'physis2.jpeg'),(34,17,'physis3.jpeg'),(35,18,'physis2.jpeg'),(43,18,'physis2.jpeg'),(50,0,'plusUltra.jpg'),(51,0,'Samsung-S10-5G-Crown-Silver.png'),(70,37,'corpobello6.jpeg'),(71,37,'32853371_424254321379371_7502254533972590592_n.jpg'),(72,40,'7f623fea-3add-483a-92c6-dfac09bfe464.jpeg'),(73,40,'30a81324-d4f0-484b-8732-67b3f6eb1112.jpg'),(74,41,'49356878_128144678224830_2083517922688009212_n.jpg'),(75,41,'Captura de pantalla 2019-08-03 a la(s) 11.38.20 a.m..png'),(76,42,'de37216d-bfc1-4840-b6c2-5b56a3c9dd44.JPG'),(77,42,'33d1f761-0add-4aa5-81f4-add0cf12f20e.JPG'),(78,43,'IMG_4538.JPG'),(79,43,'IMG_4143.JPG'),(80,44,'15649423911371462572325810928830.jpg'),(81,44,'15649424102102307832004148924332.jpg'),(82,45,'55477af8-7844-4aa6-94fb-0152cfe7efb2.JPG'),(83,45,'bb07ab3c-c720-4c74-9d19-c7775ae722eb.JPG'),(84,47,'58cdb17f-9152-41da-8b14-95da1e7caeb2.JPG'),(85,47,'088cef60-ef93-41b9-b26f-77bdddca190a.JPG'),(86,48,'IMG_20190811_050143_163.jpg'),(87,48,'magazine-unlock-05-2.3.1532-_42df4f1c3cb2479da1bb0a5192066fc1.jpg'),(88,49,'atom.png'),(89,49,'36217412-0-favicom.png'),(94,52,'cedeec05-1fe5-41db-96af-d2c3b1aa85e4.jfif'),(95,52,'4c1ee24f-e8c4-4b00-98dd-5a87dfd399e3.jfif'),(96,53,'d107ffcd-c84f-4851-b14c-ce224a7fc7c9.jfif'),(97,53,'4c1ee24f-e8c4-4b00-98dd-5a87dfd399e3.jfif');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginactive`
--

DROP TABLE IF EXISTS `loginactive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `loginactive` (
  `idloginActive` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `ip` varchar(20) DEFAULT NULL,
  `token` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`idloginActive`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginactive`
--

LOCK TABLES `loginactive` WRITE;
/*!40000 ALTER TABLE `loginactive` DISABLE KEYS */;
INSERT INTO `loginactive` VALUES (61,4,'www.guialook.com','d4gho8pstninuy5wi7d5lj'),(68,3,'www.guialook.com','iy9rm5jvc8ov77okgxwljp'),(74,1,'localhost:4000','tzycrlkqzgl56aw8q26eq');
/*!40000 ALTER TABLE `loginactive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `methodpay`
--

DROP TABLE IF EXISTS `methodpay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `methodpay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idestablecimiento` int(11) NOT NULL,
  `methodpay` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `methodpay`
--

LOCK TABLES `methodpay` WRITE;
/*!40000 ALTER TABLE `methodpay` DISABLE KEYS */;
INSERT INTO `methodpay` VALUES (1,1,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(2,2,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(3,3,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(4,4,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(5,5,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(7,7,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(8,8,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(9,10,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(10,11,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(11,12,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(12,13,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard'),(13,14,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(14,9,'Efectivo,Tarjeta Débito,Tarjeta Crédito,Visa,Mastercard '),(17,17,'Efectivo,Tarjeta Debiro,Tarjeta creadito,Visa,mastercard '),(18,18,'Efectivo,Tarjeta Debiro,Tarjeta creadito,Visa,mastercard '),(25,0,'Efectivo,Tarjeta Debiro,Tarjeta creadito,Visa'),(35,37,'Efectivo,Tarjeta Debito,Tarjeta credito'),(36,40,'Efectivo,Tarjeta Debito,Tarjeta credito'),(37,41,'Efectivo,Tarjeta Debito,Tarjeta credito'),(38,42,'Efectivo,Tarjeta credito,Tarjeta Debito,Visa'),(39,43,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(40,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(41,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(42,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(43,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(44,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(45,45,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(46,46,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(47,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(48,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(49,0,'Efectivo,Tarjeta Debito,Tarjeta credito,Visa,mastercard '),(52,100,'Tarjeta debito'),(53,56,'Tarjeta debito'),(54,100,'TEST'),(55,54,'TEST');
/*!40000 ALTER TABLE `methodpay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `rol` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Abdiel','Flores','abdielantonio@gmail.com','1997',1),(2,'Gilmar','Bastardo','gilmar@plugdo.com','gilmar1313',1),(3,'User','Caio','caiomena@live.com.ar','@admin1313',1),(4,'Mariale','Alejandra','marialegarcia86@gmail.com','@admin1313',1),(6,'abd','flores','abdielantonio.flores@gmail.com','2cfe534aa66900e81f6f20b02826b6132d2df8de',1),(7,'pedro','cortez','abdielantonio.flo@gmail.com','2cfe534aa66900e81f6f20b02826b6132d2df8de',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'guialook'
--

--
-- Dumping routines for database 'guialook'
--
/*!50003 DROP PROCEDURE IF EXISTS `spCloseSesion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spCloseSesion`(in _id int
(11))
BEGIN
    DELETE FROM  loginactive WHERE userId = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spDeleteEstablishment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteEstablishment`(in _id int(11))
BEGIN
DELETE FROM  establecimiento WHERE id= _id ;
DELETE FROM establecimientohorario 
WHERE
    perfilEstablecimientoID = _id;
DELETE FROM establecimientoservicio 
WHERE
    establecimientID = _id;
DELETE FROM imagenes 
WHERE
    establecimirntoID = _id;
DELETE FROM methodpay 
WHERE
    idestablecimiento = _id;

SELECT LAST_INSERT_ID() AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spHorarioestablecimiento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spHorarioestablecimiento`(in id int)
BEGIN
select *
    from establecimientohorario
    WHERE perfilEstablecimientoID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertEstablecimiento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertEstablecimiento`(in direction VARCHAR(200),
 in image VARCHAR(200), in nombre VARCHAR (50), in _email VARCHAR (50), in _id VARCHAR (50),in price int(11), in tel varchar(40), in _mapa varchar(400) )
BEGIN

IF NOT EXISTS ( SELECT * FROM guialook.establecimiento WHERE perfilEstablecimientoID = _id) THEN 
INSERT 
	INTO 
		guialook.establecimiento

		(perfilEstablecimientoID,Nombre_establecimiento,Direccion,Precio,Telefono,mapa,Promociones,imagenPrincipal) 
	VALUES 
(_id,nombre,direction,price,tel,_mapa,1,image);

SELECT LAST_INSERT_ID() AS id;

ELSE
	UPDATE establecimiento SET Nombre_establecimiento = nombre , Direccion = direction , Precio = price , Telefono = tel , mapa = _mapa , Promociones = 1 , imagenPrincipal = image
,prod=0   where perfilEstablecimientoID = _id;
SELECT LAST_INSERT_ID() AS id;
END IF ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertHour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertHour`(
in  _lunes varchar
(45),
in _Lapertura time,
in  _Lcierre time,

in  _martes varchar
(45),
in _Mapertura time,
in  _Mcierre time,

in  _miercoles varchar
(45),
in _Miapertura time,
in  _Micierre time,

in  _jueves varchar
(45),
in _Japertura time,
in  _Jcierre time,

in  _viernes varchar
(45),
in _Vapertura time,
in  _Vcierre time,

in  _sabado varchar
(45),
in _Sapertura time,
in  _Scierre time,

in  _domingo varchar
(45),
in _Dapertura time,
in  _Dcierre time,
in _id int
(11)

)
BEGIN



    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Lunes", _Lapertura, _Lcierre);



    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Martes", _Mapertura, _Mcierre);



    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Miercoles", _Miapertura, _Micierre);




    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Jueves", _Japertura, _Jcierre);



    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Viernes", _Vapertura, _Vcierre);



    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Sabado", _Sapertura, _Scierre);


    INSERT 
	INTO 
		establecimientohorario

        (perfilEstablecimientoID,dia,horaInicio,horaFinal)
    VALUES
        (_id, "Domingo", _Dapertura, _Dcierre);




    SELECT LAST_INSERT_ID() AS id
;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertImages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertImages`(in _imagesOne VARCHAR
(100), in _imagesTwo VARCHAR
(100), in _id int
(11) )
BEGIN

    IF NOT EXISTS ( SELECT *
    FROM imagenes
    WHERE establecimirntoID =_id ) THEN

    INSERT 
	INTO 
		imagenes

        (establecimirntoID,imagenesEstablecimiento)
    VALUES
        (_id , _imagesOne);

    INSERT 
	INTO 
		imagenes

        (establecimirntoID,imagenesEstablecimiento)
    VALUES
        (_id , _imagesTwo);

    SELECT LAST_INSERT_ID() AS establecimirntoID;

    ELSE
    SELECT 0 AS establecimirntoID;
END
IF ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertMethodPay` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertMethodPay`(
in _methodPay VARCHAR(100),
in _idPay int(11))
BEGIN

    IF NOT EXISTS ( SELECT *
    FROM methodpay
    WHERE idestablecimiento = _idPay) THEN
    INSERT 
	INTO      
    methodpay

        (idestablecimiento,methodpay)
    VALUES
        (_idPay, _methodPay);


    SELECT LAST_INSERT_ID() AS _idPay;

    ELSE
    SELECT 0 AS _idPay;
END
IF ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spInsertNewservice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertNewservice`(in _subService VARCHAR
(200),in _servicePrincipal VARCHAR
(50), in _idService int
(11))
BEGIN

    IF NOT EXISTS ( SELECT *
    FROM establecimientoservicio
    WHERE establecimientID = _idService) THEN

    INSERT 
	INTO 
	establecimientoservicio

        (establecimientID,servicios,servicioPrincipal)
    VALUES
        (_idService, _subService, _servicePrincipal);


    SELECT LAST_INSERT_ID() AS _idService;

    ELSE
    SELECT 0 AS _idService;
END
IF ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spOpenNow` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spOpenNow`( in days varchar
(45) ,in  hours TIME )
BEGIN

 
SELECT DISTINCT 
    *
FROM
    guialook.establecimiento
     INNER JOIN
    guialook.establecimientoservicio ON establecimiento.id = establecimientoservicio.establecimientID 
    
        INNER JOIN
    guialook.establecimientohorario ON establecimiento.id = establecimientohorario.perfilestablecimientoID 
    
    WHERE 
    dia = days
    
    AND   
    hours <=  horaFinal  AND prod = 1;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spRecomedate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spRecomedate`()
BEGIN
    SELECT
        *
    FROM
        establecimiento
        INNER JOIN
        establecimientoservicio ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE Promociones = 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchAdvanced` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSearchAdvanced`(in _search VARCHAR(100))
BEGIN
SELECT 
    *
FROM
  establecimiento
        INNER JOIN
    establecimientoservicio ON establecimiento.id = establecimientoservicio.establecimientID
WHERE
		servicios LIKE _search
        OR  Direccion LIKE _search
        OR servicioPrincipal LIKE _search
        OR Nombre_establecimiento LIKE _search
          OR imagenPrincipal LIKE _search; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelecServices` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelecServices`()
BEGIN
  SELECT 
    *
FROM
    guialook.establecimiento
        INNER JOIN
    guialook.establecimientoservicio ON establecimiento.id = establecimientoservicio.establecimientID WHERE prod =1 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelecServicesUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelecServicesUpdate`()
BEGIN
SELECT 
    *
FROM
    guialook.establecimiento
        INNER JOIN
         guialook.methodpay ON establecimiento.id = methodpay.idestablecimiento
           INNER JOIN
    guialook.establecimientoservicio ON establecimiento.id = establecimientoservicio.establecimientID ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelectEstablecimiento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectEstablecimiento`(in _Id int
(11))
BEGIN
    SELECT 
*
FROM
   establecimiento
        INNER JOIN
   establecimientoservicio ON establecimiento.id = establecimientoservicio.establecimientID
      INNER JOIN
   methodpay ON establecimiento.id = methodpay.idestablecimiento
        INNER JOIN
   imagenes ON establecimiento.id = imagenes.establecimirntoID WHERE  establecimiento.id = _Id  AND prod =1  ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelectMprice` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectMprice`()
BEGIN
    SELECT *
    FROM establecimiento
    ORDER BY Precio ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelectPrecio` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectPrecio`(in _precio int, _serv VARCHAR
(50))
BEGIN

    IF ( _serv != " " )THEN

    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE Precio <= _precio AND servicioPrincipal = _serv AND prod =1 

    ;
    ELSE
    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE Precio <= _precio AND prod =1 

;

END
IF ;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelectPromotion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectPromotion`()
BEGIN

    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    where Promociones = 1
;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSelectServicio` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spSelectServicio`(in Serv VARCHAR
(50), in _subServ VARCHAR
(100),in _ubication VARCHAR
(100) )
BEGIN
    IF ( _subServ != " " ) THEN

    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE    servicioPrincipal = Serv AND FIND_IN_SET(_subServ, servicios) AND prod =1  
    ;

    ELSE

    IF (_ubication != "" ) THEN
    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE   FIND_IN_SET(_ubication, Direccion) AND prod =1  
    ;

    ELSE

    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE  servicioPrincipal = Serv AND prod =1  
;

END
IF ; 
END
IF ; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spselectZonas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spselectZonas`(in _zonas VARCHAR
(100))
BEGIN

    SELECT
        *
    FROM
        establecimientoservicio
        INNER JOIN
        establecimiento ON establecimiento.id = establecimientoservicio.establecimientID
    WHERE   FIND_IN_SET(_zonas, Direccion) AND prod =1  
;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateEstablishment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateEstablishment`(in _id int (11) ,in direction VARCHAR(200),
 in image VARCHAR(200), nombre VARCHAR (50),in price int(11), in tel varchar(40), in _mapa varchar(400) , in _promociones int(11))
BEGIN
UPDATE establecimiento SET Nombre_establecimiento = nombre , Direccion = direction , Precio = price , Telefono = tel , mapa = _mapa , Promociones = _promociones , imagenPrincipal = image
,prod=0   where id = _id;
SELECT LAST_INSERT_ID() AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateHour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateHour`(
in _Lapertura VARCHAR(20),
in  _Lcierre  VARCHAR(20),

in _Mapertura  VARCHAR(20),
in  _Mcierre  VARCHAR(20),

in _Miapertura  VARCHAR(20),
in  _Micierre  VARCHAR(20),

in _Japertura  VARCHAR(20),
in  _Jcierre  VARCHAR(20),

in _Vapertura  VARCHAR(20),
in  _Vcierre  VARCHAR(20),

in _Sapertura  VARCHAR(20),
in  _Scierre  VARCHAR(20),

in _Dapertura  VARCHAR(20),
in  _Dcierre  VARCHAR(20),

in _id int(11)

)
BEGIN
	
 -- LUNES   
UPDATE establecimientohorario  
SET
 horaInicio= _Lapertura,
 horaFinal=_Lcierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Lunes";

-- MARTES
UPDATE establecimientohorario  
SET
 horaInicio= _Mapertura,
 horaFinal=_Mcierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Martes";
 
 -- MIERCOLES
UPDATE establecimientohorario  
SET
 horaInicio= _Mapertura,
 horaFinal=_Micierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Miercoles";
 
  -- JUEVES
UPDATE establecimientohorario  
SET
 horaInicio= _Japertura,
 horaFinal=_Jcierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Jueves";
 
   -- VIERNES
UPDATE establecimientohorario  
SET
 horaInicio= _Vapertura,
 horaFinal=_Vcierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Viernes";
 
 
    -- SABADO
UPDATE establecimientohorario  
SET
 horaInicio= _Sapertura,
 horaFinal=_Scierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Sabado";
 
 
 
     -- DOMINGO
UPDATE establecimientohorario  
SET
 horaInicio= _Dapertura,
 horaFinal=_Dcierre
 WHERE 
 perfilEstablecimientoID = _id 
 AND dia = "Domingo";
 
SELECT LAST_INSERT_ID() AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateImages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateImages`(in _id int(11))
BEGIN
SELECT 
    *
FROM
guialook.imagenes WHERE establecimirntoID = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateMethodPay` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateMethodPay`(in _methodPay varchar(100), in _id int(11))
BEGIN
UPDATE methodpay  SET methodpay = _methodPay WHERE  idestablecimiento = _id;

SELECT LAST_INSERT_ID() AS idestablecimiento;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateProduction` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateProduction`(in _prod tinyint(4),in _id int(11))
BEGIN
UPDATE establecimiento  SET prod = _prod WHERE id = _id;
SELECT LAST_INSERT_ID() AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateQuitProduction` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateQuitProduction`(in _prod tinyint(4),in _id int(11))
BEGIN
UPDATE establecimiento  SET prod = _prod WHERE id = _id;
SELECT LAST_INSERT_ID() AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUpdateServices` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateServices`( in _servicioPrincipal varchar(200), in _servicios varchar(50), in _id int(11))
BEGIN
UPDATE establecimientoservicio  SET servicios = _servicios,  servicioPrincipal = _servicioPrincipal  WHERE establecimientID = _id ;
SELECT LAST_INSERT_ID() AS establecimientID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spUserExist` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spUserExist`(in _id int
(11))
BEGIN

    IF  (SELECT 1
    FROM usuarios
    WHERE  id = _id AND rol = 1 ) THEN

    SET @_message =1;

    SELECT @_message AS message;

    ELSE

    SET @_message =0;

    SELECT @_message AS message;

END
IF ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_selectDataUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_selectDataUpdate`(in _Id int
(11))
BEGIN
    SELECT 
*
FROM
   establecimiento
   WHERE  perfilEstablecimientoID = _Id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateImagesEstablishment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateImagesEstablishment`(in _imagesOne varchar(100),in _imagesTwo varchar(100),in _idOne int(11),in _idTwo int(11))
BEGIN
UPDATE imagenes  SET imagenesEstablecimiento = _imagesOne WHERE id = _idOne;
UPDATE imagenes  SET imagenesEstablecimiento = _imagesTwo WHERE id = _idTwo;
SELECT LAST_INSERT_ID() AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `validateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `validateUser`(
in _name varchar (50),
in _lastName Varchar(50),
in _email VARCHAR(40) ,
in  _password VARCHAR(10),
in _option varchar(50),
in _token VARCHAR(50),
in _ip VARCHAR(20))
BEGIN
   DECLARE _userId int  (10);
IF (_option = "register") THEN 
	IF NOT EXISTS ( SELECT *
	FROM usuarios
	WHERE email = _email ) THEN

	INSERT INTO usuarios
		( nombre, apellido,email,password,rol)
	VALUES
		(_name, _lastName,_email, SHA(_password), 1);
        
	SELECT 
    *
FROM
    usuarios
WHERE
    email = _email;
SELECT LAST_INSERT_ID() AS id;
	END IF ;

ELSE 
SET @_message='User not exists';

IF (SELECT 1
FROM usuarios
WHERE email = _email AND password = SHA(_password) ) THEN

SET _userId = (SELECT id
FROM usuarios
WHERE email = _email AND password = SHA(_password));
   
     SET @_message = 'Successfull';

SELECT 
    id, nombre, apellido, email, @_message AS message
FROM
    usuarios
WHERE
    email = _email
        AND password = SHA(_password)
;
ELSE
SELECT NULL as id, NULL as nombre, NULL AS apellido, NULL AS email, @_message as message;
END
IF;
END IF ; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-29 18:46:07
