DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burgers_db--
USE burgers_db;
-- Create the table burgers.
CREATE TABLE burgers (
id INT(11) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);