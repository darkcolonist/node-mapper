/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.5.4-MariaDB : Database - db_node_mapper
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_node_mapper` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_node_mapper`;

/*Table structure for table `tbl_pending_messages` */

DROP TABLE IF EXISTS `tbl_pending_messages`;

CREATE TABLE `tbl_pending_messages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `assigned_to` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_pending_messages` */

insert  into `tbl_pending_messages`(`id`,`name`,`status`,`assigned_to`) values 
(1,'John Doe','assigned','0_2rr6OlcmjsFDpyjvfhShPHAvv7gkeZ2t'),
(2,'Jane Smith','assigned','1_5Ijh0CJpLCDEGAkZXY'),
(3,'Bob Johnson','assigned','2_KSK9z2guJPHw2sGktsJs2pG'),
(4,'Amy Williams','assigned','3_gcyq3hRoaF8yzs7v'),
(5,'Michael Brown','assigned','4_5pH2d5RBkMOLQdqkpslAZ2s4'),
(6,'Emily Davis','assigned','5_4wC3gRsZMtPCiOIUkQ'),
(7,'Matthew Miller','assigned','6_NdnpFOQYEmaENH'),
(8,'Lauren Garcia','assigned','7_BfBk2i0swsXA1qPH256OdrrOKJ'),
(9,'Jacob Rodriguez','assigned','8_saG6BBiF97Js2'),
(10,'Isabella Wilson','assigned','9_PqgtRYB2lwK4vFPqB1fuPlDaNN2'),
(11,'Ethan Moore','assigned','10_7UXEf9MzQx9uXcs1HAmvJ'),
(12,'Sofia Martin','assigned','11_I2fhTh8Ysuyyr3dNRlavRhnd'),
(13,'Michael Thompson','assigned','12_nbuTrDVv84UDunUXLi1sUwpnYxLuAJS'),
(14,'Madison Hernandez','assigned','13_oLKpBNlDRPKuzv4Wo'),
(15,'Joshua Moore','assigned','14_rxZsPEs4dRWC'),
(16,'Avery Martin','assigned','15_oYTWdiUm2if1HM5eyNWd'),
(17,'Jacob Martinez','assigned','16_k43lddkjCi7XWZklO'),
(18,'Isabella Anderson','assigned','17_cna2CWmHislKjDwfh8279gTf'),
(19,'Michael Jackson','assigned','18_BKxVT6l56pYjW71'),
(20,'Emily Perez','assigned','19_DqbUkiZqlmLCCu'),
(21,'Matthew Taylor','assigned','20_7nChYo5Ubh9YNs4NhmPhEhuPX'),
(22,'Madison Lee','assigned','21_SWRV0teolbxq'),
(23,'Joshua Anderson','assigned','22_3nfTaCw0KzNx0Tv4RMJYT2ij1dxOVBR'),
(24,'Avery Thomas','assigned','23_icAnIuHJETEIfqj');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
