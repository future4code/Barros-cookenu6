-- Active: 1676323408280@@35.226.146.116@3306@jbl-4416472-mauricio-toledo
CREATE TABLE IF NOT EXISTS cookenu_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS cookenu_recipe(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_author VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_author) REFERENCES cookenu_users (id)
);




DROP TABLE cookenu_recipe