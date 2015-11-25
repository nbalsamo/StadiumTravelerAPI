SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Nicholas Balsamo
-- Create date: 6-23-2015
-- Description:	Select surronding teams within a specified distance 
-- =============================================
CREATE PROCEDURE usp_SelectSurroundingTeamsByTeamID
	@TeamID bigint, 
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
	)
	
	SELECT c.Distance, t.*
	FROM CTE c join Team t on c.DestinationTeamID = t.TeamID

END
GO
