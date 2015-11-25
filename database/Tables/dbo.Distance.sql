USE [StadiumTraveler]
GO

/****** Object:  Table [dbo].[Distance]    Script Date: 6/23/2015 2:05:49 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Distance](
	[DistanceID] [bigint] IDENTITY(1,1) NOT NULL,
	[TeamID] [bigint] NOT NULL,
	[DestinationTeamID] [bigint] NOT NULL,
	[Distance] [bigint] NOT NULL,
 CONSTRAINT [PK_Distance] PRIMARY KEY CLUSTERED 
(
	[DistanceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[Distance]  WITH CHECK ADD  CONSTRAINT [FK_Distance_Team] FOREIGN KEY([TeamID])
REFERENCES [dbo].[Team] ([TeamID])
GO

ALTER TABLE [dbo].[Distance] CHECK CONSTRAINT [FK_Distance_Team]
GO


