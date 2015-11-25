CREATE TABLE [dbo].[Team]
(
[TeamID] [bigint] NOT NULL IDENTITY(1, 1),
[TeamName] [nchar] (64) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[TeamCity] [nchar] (64) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[TeamState] [nchar] (64) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[StadiumName] [nchar] (64) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[Position] [nchar] (64) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[SportID] [bigint] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Team] ADD CONSTRAINT [PK_Team] PRIMARY KEY CLUSTERED  ([TeamID]) ON [PRIMARY]
GO
