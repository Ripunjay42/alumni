CREATE TABLE USER (
	id int auto_increment,
    user_id VARCHAR(50) unique not null,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) unique NOT NULL,
    password VARCHAR(255) NOT NULL,
    primary key(id, user_id)
);

select * from user;

CREATE TABLE ADMIN (
	id int auto_increment,
    Admin_id VARCHAR(50)unique NOT NULL,
    Name varchar(400) not null,
    Email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id, Admin_id)
);

select * from admin;

CREATE TABLE ALUMNI (
	id int auto_increment,
    user_id VARCHAR(50) not null,
    name varchar(400) not null,
	dob varchar(40) NOT NULL,
    motherName VARCHAR(255) NOT NULL,
    fatherName VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    graduation_date varchar(40) NOT NULL,
    admission_date varchar(40) NOT NULL,
    course varchar(400) not null,
    FOREIGN KEY (user_id) REFERENCES USER(user_id) on delete cascade,
    primary key(id,user_id)
);

select * from alumni;

CREATE TABLE CAREER (
	id int auto_increment,
    user_id VARCHAR(50) NOT NULL,
    admin_id VARCHAR(50) NOT NULL,
    experiences VARCHAR(255),
    current_job VARCHAR(100),
    company_name VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES USER(user_id) on delete cascade,
    primary key( id, user_id , admin_id)
);

select * from career;

CREATE TABLE event (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  Location varchar(400) NOT NULL,
  date date NOT NULL,
  description TEXT,
  image longtext
);

select * from event;