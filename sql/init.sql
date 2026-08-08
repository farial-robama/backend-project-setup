-- USERS TABLE

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE
);

INSERT INTO users (id, name, email)
VALUES
(1234, 'Farial', 'farialrobama@gmail.com'),
(1235, 'Rahim', 'rahim@gmail.com'),
(1236, 'Karim', 'karim@gmail.com');

SELECT * FROM users;



-- ONE TO ONE RELATIONSHIP
-- One user has one profile

DROP TABLE IF EXISTS user_profiles CASCADE;

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    bio TEXT,
    user_id INT UNIQUE REFERENCES users(id)
);

INSERT INTO user_profiles (bio, user_id)
VALUES
('I am Farial', 1234),
('I love PostgreSQL', 1235),
('Backend Developer', 1236);

SELECT users.name, user_profiles.bio
FROM users
INNER JOIN user_profiles
ON users.id = user_profiles.user_id;



-- ONE TO MANY RELATIONSHIP
-- One department has many students

DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS departments CASCADE;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    department_id INT REFERENCES departments(id),
    name TEXT
);

INSERT INTO departments(name)
VALUES
('EEE'),
('BME'),
('CSE'),
('NSE'),
('NAME'),
('CE');

INSERT INTO students(department_id, name)
VALUES
(4, 'Rahim'),
(1, 'Karim'),
(3, 'Jashim'),
(6, 'Dalim'),
(6, 'Halim');

SELECT * FROM departments;
SELECT * FROM students;



-- INNER JOIN

SELECT students.id, students.name, departments.name AS department_name
FROM students
INNER JOIN departments
ON students.department_id = departments.id;


-- LEFT JOIN

SELECT students.name, departments.name AS department_name
FROM students
LEFT JOIN departments
ON students.department_id = departments.id;


-- RIGHT JOIN

SELECT students.name, departments.name AS department_name
FROM students
RIGHT JOIN departments
ON students.department_id = departments.id;


-- FULL JOIN

SELECT students.name, departments.name AS department_name
FROM students
FULL JOIN departments
ON students.department_id = departments.id;


-- FILTER 

SELECT name, department_id, id
FROM students
ORDER BY department_id DESC;

SELECT name, department_id, id
FROM students
WHERE id BETWEEN 1 AND 10;

SELECT name, department_id, id
FROM students
WHERE name LIKE 'r%';

SELECT name, department_id, id
FROM students
WHERE name ILIKE '%hi%';


-- GROUP BY / AGGREGATION

SELECT department_id, COUNT(*) AS total_students
FROM students
GROUP BY department_id;

SELECT departments.name, COUNT(*) AS total_students
FROM students
INNER JOIN departments
ON students.department_id = departments.id
GROUP BY departments.name;