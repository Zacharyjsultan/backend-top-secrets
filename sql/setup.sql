-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
drop table if Exists users CASCADE;
DROP TABLE if exists secrets ; 

create table users (
    id bigint generated always as identity primary key, 
    email varchar, 
    password_hash varchar
);

CREATE table secrets (
    id bigINT generated always as identity, 
    title varchar not null, 
    description varchar, 
    created_at timestamp not null default CURRENT_TIMESTAMP
);

insert into secrets (title, description) values
('The Stranger', 'french man recognizing the absurdity of it all'),
('Go Dog, Go', 'children learning from dogs driving cars');