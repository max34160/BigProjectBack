CREATE DATABASE BigProject2
    DEFAULT CHARACTER SET = 'utf8mb4';
-- Table User
use BigProject2;
CREATE TABLE User (
    id_user INT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    email VARCHAR(150),
    mdp VARCHAR(255)
);

-- Table Pro (spécialisation de User)
CREATE TABLE Pro (
    id_pro INT PRIMARY KEY,
    id_user INT ,
    nom_cabinet VARCHAR(150),
    description TEXT,
    horaire_cabinet VARCHAR(100),
    pdp VARCHAR(255),
    FOREIGN KEY (id_user) REFERENCES User(id_user)
);



-- Table Methodologie
CREATE TABLE Methodologie (
    id_methodo INT PRIMARY KEY,
    titre VARCHAR(150),
    descriptif TEXT,
    img_presentation VARCHAR(255)
);


-- Table OpenData
CREATE TABLE OpenData (
    id INT PRIMARY KEY,
    siret VARCHAR(20),
    nom VARCHAR(100),
    prenom VARCHAR(100)
);


-- Relation Verification (1-1 Pro - OpenData)
CREATE TABLE Verification (
    id_pro INT PRIMARY KEY,
    id_opendata INT UNIQUE,
    FOREIGN KEY (id_pro) REFERENCES Pro(id_user),
    FOREIGN KEY (id_opendata) REFERENCES OpenData(id)
);

-- Relation Exercer (Pro - Methodologie)
CREATE TABLE Exercer (
    id_pro INT,
    id_methodo INT,
    PRIMARY KEY (id_pro, id_methodo),
    FOREIGN KEY (id_pro) REFERENCES Pro(id_pro),
    FOREIGN KEY (id_methodo) REFERENCES Methodologie(id_methodo)
);