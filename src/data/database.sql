CREATE DATABASE databasename

CREATE TABLE IF NOT EXISTS rooms (
    id INT  AUTO_INCREMENT PRIMARY KEY;
    photo varchar(255);
      numberRoom int  ;
  roomType varchar(255);
  amenities varchar (255);
  price int;
  offerPercent int;
  status CHAR NOT NULL;
)

CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY;
  name varchar(255)
  orderDate varchar(255)
  checkIn varchar(255)
  checkOut varchar(255)
  status BOOLEAN
)


CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY
  name varchar(30)
  email varchar(30)
  startDate varchar(30)
  description varchar(30)
  phone INT
  status BOOLEAN
  password varchar(30)
)

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY
  name  varchar(30)
  email varchar(30)
  phone INT
  date varchar(30)
  subject varchar(30)
)