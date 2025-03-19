begin;

create type user_gender as enum ('male', 'female');

create table users (
    id uuid primary key,
    name text not null,
    surname text not null,
    gender user_gender not null
);

create table user_credentials (
    user_id uuid primary key references users(id),
    email text unique not null,
    password text not null
);

create table user_accounts (
    id uuid primary key,
    user_id uuid not null references users(id),
    name text unique not null
);

commit;
