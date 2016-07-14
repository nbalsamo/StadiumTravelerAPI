CREATE TABLE schedules (
    schedule_id bigserial primary key,
    home_team_id bigint references teams (team_id),
    away_team_id bigint references teams (team_id),
    sport_id bigint references sports (sport_id),
    date date  not null,
    time time not null
);

CREATE INDEX IF NOT EXISTS ix_schedules_date_home_team_id ON schedules (date, home_team_id);

