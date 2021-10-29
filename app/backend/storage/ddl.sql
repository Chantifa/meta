CREATE TABLE IF NOT EXISTS users
(
    id BIGSERIAL NOT NULL, 
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL, 
    password VARCHAR(200) NOT NULL, 
    PRIMARY KEY (id),
    UNIQUE (email)
);

SET client_encoding = 'UTF8';

INSERT INTO users VALUES (1, 'user1', 'user1@ffhs.ch', '1234');
INSERT INTO users VALUES (2, 'user2', 'user2@ffhs.ch', '1234');
INSERT INTO users VALUES (3, 'user3', 'user3@ffhs.ch', '1234');
INSERT INTO users VALUES (4, 'user4', 'user4@ffhs.ch', '1234');

