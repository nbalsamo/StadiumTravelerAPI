SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Nicholas Balsamo
-- Create date: 6-23-2015
-- Description:	Select surronding teams within a specified distance and on a specific date 
-- =============================================
CREATE PROCEDURE usp_SelectSurroundingTeamsByTeamIDAndDate
	@TeamID bigint, 
	@Date date,
	@MaximumDistance bigint
AS
BEGIN
	SET NOCOUNT ON;

	--get all of the distances under the maximum distance
	;WITH CTE AS
	(
		SELECT *
		FROM Distance 
		WHERE TeamID = @TeamID 
		AND Distance <= @MaximumDistance
	),
	
	--join that with the teams and games that are surrounding them on the provided date
	CTE2 AS
	(
		SELECT c.Distance as Distance, t.*, s.HomeTeamID, s.AwayTeamID, s.Time, s.Date
		FROM CTE c 
		JOIN Team t ON c.DestinationTeamID = t.TeamID
		JOIN Schedule s on c.DestinationTeamID = s.HomeTeamID
		WHERE s.Date = @Date
	)
	
	--join this all on the team table to get more information on the opponents 
	SELECT c2.TeamID as HomeTeamID, 
		   c2.AwayTeamID,
		   c2.Date,
		   c2.Time, 
		   RTRIM(c2.TeamCity) as City,
		   RTRIM(c2.TeamState) as State,
		   RTRIM(c2.TeamName) as HomeTeamName,
		   RTRIM(t.TeamName) as AwayTeamName,
		   s.SportID, 
		   s.SportName
	from CTE2 c2
	JOIN Team t on c2.AwayTeamID = t.TeamID 
	JOIN Sport s on s.SportID = c2.SportID

END
GO
