CREATE TABLE sports (
    sport_id bigserial primary key,
    sport_name text not null
);

insert into sports (sport_name) values ('NHL');
insert into sports (sport_name) values ('NBA');
insert into sports (sport_name) values ('NFL');
insert into sports (sport_name) values ('MLB');