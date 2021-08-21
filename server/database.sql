 -- creates database
 CREATE DATABASE signup;
 
 -- creates UUID extension (so you can generate random ID numbers)
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
 
 -- creates table in database
CREATE TABLE users(
     user_id uuid PRIMARY KEY DEFAULT
     uuid_generate_V4(),
     user_name varchar(255) NOT NULL,
     user_email varchar(255) NOT NULL,
     user_password varchar(255) NOT NULL
);


INSERT INTO users (user_name, user_email, user_password) VALUES ('tomas', 'tomas@nistal.net', 'Tomas123');