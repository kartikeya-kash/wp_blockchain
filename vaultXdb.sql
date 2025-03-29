create database vaultX;
use vaultX;

create table userinfo(
username varchar(20) not null,
email varchar(200) primary key,
password varchar(200) not null 
);

select * from userinfo;