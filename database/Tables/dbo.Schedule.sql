CREATE TABLE [dbo].[Schedule]
(
[ScheduleID] [bigint] NOT NULL IDENTITY(1, 1),
[HomeTeamID] [bigint] NULL,
[AwayTeamID] [bigint] NULL,
[SportID] [bigint] NULL,
[Date] [date] NULL,
[Time] [time] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Schedule] ADD CONSTRAINT [PK_Schedule] PRIMARY KEY CLUSTERED  ([ScheduleID]) ON [PRIMARY]
GO
