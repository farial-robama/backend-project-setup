CREATE TABLE users (
    id INT,
    name TEXT,
    email TEXT UNIQUE
);

INSERT INTO users (id, name, email)
VALUES (1234, 'Farial', 'farialrobama@gmail.com');

SELECT * FROM users;