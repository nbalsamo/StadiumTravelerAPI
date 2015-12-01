CREATE TABLE teams (
    team_id bigserial primary key,
    team_name text not null, 
    team_city text not null, 
    team_state text not null, 
    stadium_name text not null,
    position text not null, 
    sport_id bigint references sports (sport_id)
);

insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Boston Bruins','Boston','MA','TD Garden','42.366303°N 71.062228°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Buffalo Sabres','Buffalo','NY','First Niagara Center','42.875°N 78.876389°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Detroit Red Wings','Detroit','MI','Joe Louis Arena','42.325278°N 83.051389°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Florida Panthers','Sunrise','FL','BB&T Center','26.158333°N 80.325556°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Montreal Canadiens','Montreal','QC','Bell Centre','45.496111°N 73.569444°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Ottawa Senators','Ottawa','ON','Canadian Tire Centre','45.296944°N 75.927222°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Tampa Bay Lightning','Tampa','FL','Amalie Arena','27.942778°N 82.451944°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Toronto Maple Leafs','Toronto','ON','Air Canada Centre','43.643333°N 79.379167°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Carolina Hurricanes','Raleigh','NC','PNC Arena','35.803333°N 78.721944°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Columbus Blue Jackets','Columbus','OH','Nationwide Arena','39.969283°N 83.006111°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New Jersey Devils','Newark','NJ','Prudential Center','40.733611°N 74.171111°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Islanders','Brooklyn','NY','Barclays Center','40.68265°N 73.974689°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Rangers','Manhattan','NY','Madison Square Garden','40.750556°N 73.993611°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Philadelphia Flyers','Philadelphia','PA','Wells Fargo Center','39.901111°N 75.171944°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Pittsburgh Penguins','Pittsburgh','PA','Consol Energy Center','40.439444°N 79.989167°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Washington Capitals','Washington','D.C.','Verizon Center','38.898056°N 77.020833°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Anaheim Ducks','Anaheim','CA','Honda Center','33.807778°N 117.876667°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Arizona Coyotes','Glendale','AZ','Gila River Arena','33.531944°N 112.261111°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Calgary Flames','Calgary','AB','Scotiabank Saddledome','51.0375°N 114.051944°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Edmonton Oilers','Edmonton','AB','Rexall Place','53.571389°N 113.456111°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Los Angeles Kings','Los Angeles','CA','Staples Center','34.043056°N 118.267222°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('San Jose Sharks','San Jose','CA','SAP Center at San Jose','37.332778°N 121.901111°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Vancouver Canucks','Vancouver','BC','Rogers Arena','49.277778°N 123.108889°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Chicago Blackhawks','Chicago','IL','United Center','41.880556°N 87.674167°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Colorado Avalanche','Denver','CO','Pepsi Center','39.748611°N 105.0075°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Dallas Stars','Dallas','TX','American Airlines Center','32.790556°N 96.810278°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Minnesota Wild','St. Paul','MN','Xcel Energy Center','44.944722°N 93.101111°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Nashville Predators','Nashville','TN','Bridgestone Arena','36.159167°N 86.778611°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('St. Louis Blues','St. Louis','MO','Scottrade Center','38.626667°N 90.2025°W', 1);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Winnipeg Jets','Winnipeg','MB','MTS Centre','49.892778°N 97.143611°W', 1);
--NBA
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Boston Celtics','Boston','MA','TD Garden','42.366303°N 71.062228°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Brooklyn Nets','New York City','NY','Barclays Center','40.68265°N 73.974689°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Knicks','New York City','NY','Madison Square Garden','40.750556°N 73.993611°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Philadelphia 76ers','Philadelphia','PA','Wells Fargo Center','39.901111°N 75.171944°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Toronto Raptors','Toronto','ON','Air Canada Centre','43.643333°N 79.379167°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Chicago Bulls','Chicago','IL','United Center','41.880556°N 87.674167°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Cleveland Cavaliers','Cleveland','OH','Quicken Loans Arena','41.496389°N 81.688056°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Detroit Pistons','Auburn Hills','MI','The Palace of Auburn Hills','42.696944°N 83.245556°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Indiana Pacers','Indianapolis','IN','Bankers Life Fieldhouse','39.763889°N 86.155556°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Milwaukee Bucks','Milwaukee','WI','BMO Harris Bradley Center','43.043611°N 87.916944°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Atlanta Hawks','Atlanta','GA','Philips Arena','33.757222°N 84.396389°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Charlotte Hornets','Charlotte','NC','Time Warner Cable Arena','35.225°N 80.839167°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Miami Heat','Miami','FL','American Airlines Arena','25.781389°N 80.188056°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Orlando Magic','Orlando','FL','Amway Center','28.539167°N 81.383611°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Washington Wizards','Washington','D.C.','Verizon Center','38.898056°N 77.020833°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Denver Nuggets','Denver','CO','Pepsi Center','39.748611°N 105.0075°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Minnesota Timberwolves','Minneapolis','MN','Target Center','44.979444°N 93.276111°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Oklahoma City Thunder','Oklahoma City','OK','Chesapeake Energy Arena','35.463333°N 97.515°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Portland Trail Blazers','Portland','OR','Moda Center','45.531667°N 122.666667°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Utah Jazz','Salt Lake City','UT','EnergySolutions Arena','40.768333°N 111.901111°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Golden State Warriors','Oakland','CA','Oracle Arena','37.750278°N 122.203056°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Los Angeles Clippers','Los Angeles','CA','Staples Center','34.043056°N 118.267222°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Los Angeles Lakers','Los Angeles','CA','Staples Center','34.043056°N 118.267222°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Phoenix Suns','Phoenix','AZ','Talking Stick Resort Arena','33.445833°N 112.071389°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Sacramento Kings','Sacramento','CA','Sleep Train Arena','38.649167°N 121.518056°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Dallas Mavericks','Dallas','TX','American Airlines Center','32.790556°N 96.810278°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Houston Rockets','Houston','TX','Toyota Center','29.750833°N 95.362222°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Memphis Grizzlies','Memphis','TN','FedExForum','35.138333°N 90.050556°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New Orleans Pelicans','New Orleans','LA','Smoothie King Center','29.948889°N 90.081944°W',2);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('San Antonio Spurs','San Antonio','TX','AT&T Center','29.426944°N 98.4375°W',2);
--NFL
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Buffalo Bills','Orchard Park','NY','Ralph Wilson Stadium','42.774°N 78.787°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Miami Dolphins','Miami Gardens','FL','Sun Life Stadium','25.958056°N 80.238889°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New England Patriots','Foxborough','MA','Gillette Stadium','42.090944°N 71.264344°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Jets','East Rutherford','NJ','MetLife Stadium[B]','40.813611°N 74.074444°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Baltimore Ravens','Baltimore','MD','M&T Bank Stadium','39.277881°N 76.622639°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Cincinnati Bengals','Cincinnati','OH','Paul Brown Stadium','39.095444°N 84.516039°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Cleveland Browns','Cleveland','OH','FirstEnergy Stadium','41.506111°N 81.699444°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Pittsburgh Steelers','Pittsburgh','PA','Heinz Field','40.446667°N 80.015833°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Houston Texans','Houston','TX','NRG Stadium','29.684722°N 95.410833°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Indianapolis Colts','Indianapolis','IN','Lucas Oil Stadium','39.760056°N 86.163806°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Jacksonville Jaguars','Jacksonville','FL','EverBank Field[D]','30.323889°N 81.6375°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Tennessee Titans','Nashville','TN','Nissan Stadium','36.166389°N 86.771389°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Denver Broncos','Denver','CO','Sports Authority Field at Mile High','39.743889°N 105.02°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Kansas City Chiefs','Kansas City','MO','Arrowhead Stadium','39.048889°N 94.483889°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Oakland Raiders','Oakland','CA','O.co Coliseum','37.751667°N 122.200556°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('San Diego Chargers','San Diego','CA','Qualcomm Stadium','32.783056°N 117.119444°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Dallas Cowboys','Arlington','TX','AT&T Stadium','32.747778°N 97.092778°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Giants','East Rutherford','NJ','MetLife Stadium[B]','40.813611°N 74.074444°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Philadelphia Eagles','Philadelphia','PA','Lincoln Financial Field','39.900833°N 75.1675°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Washington Redskins','Landover','MD','FedExField','38.907778°N 76.864444°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Chicago Bears','Chicago','IL','Soldier Field','41.8625°N 87.616667°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Detroit Lions','Detroit','MI','Ford Field','42.34°N 83.045556°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Green Bay Packers','Green Bay','WI','Lambeau Field','44.501°N 88.062°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Minnesota Vikings','Minneapolis','MN','TCF Bank Stadium[E]','44.976°N 93.225°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Atlanta Falcons','Atlanta','GA','Georgia Dome','33.7575°N 84.400833°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Carolina Panthers','Charlotte','NC','Bank of America Stadium','35.225833°N 80.852778°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New Orleans Saints','New Orleans','LA','Mercedes-Benz Superdome','29.950833°N 90.081111°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Tampa Bay Buccaneers','Tampa','FL','Raymond James Stadium','27.975833°N 82.503333°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Arizona Cardinals','Glendale','AZ','University of Phoenix Stadium','33.5275°N 112.2625°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('St. Louis Rams','St. Louis','MO','Edward Jones Dome','38.632778°N 90.188611°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('San Francisco 49ers','Santa Clara','CA','Levi''s Stadium','37.403°N 121.97°W',3);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Seattle Seahawks','Seattle','WA','CenturyLink Field','47.5952°N 122.3316°W',3);
--MLB
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Baltimore Orioles','Baltimore','MD','Oriole Park at Camden Yards','39.28388889°N 76.62166667°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Boston Red Sox','Boston','MA','Fenway Park','42.34638889°N 71.0975°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Yankees','New York','NY','Yankee Stadium','40.82916667°N 73.92638889°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Tampa Bay Rays','St. Petersburg','FL','Tropicana Field','27.76833333°N 82.65333333°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Toronto Blue Jays','Toronto','ON','Rogers Centre','43.64138889°N 79.38916667°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Chicago White Sox','Chicago','IL','U.S. Cellular Field','41.83°N 87.63388889°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Cleveland Indians','Cleveland','OH','Progressive Field','41.49583333°N 81.68527778°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Detroit Tigers','Detroit','MI','Comerica Park','42.33916667°N 83.04861111°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Kansas City Royals','Kansas City','MO','Kauffman Stadium','39.05138889°N 94.48055556°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Minnesota Twins','Minneapolis','MN','Target Field','44.98166667°N 93.27833333°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Los Angeles Angels of Anaheim','Anaheim','CA','Angel Stadium of Anaheim','33.80027778°N 117.8827778°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Oakland Athletics','Oakland','CA','O.co Coliseum','37.75166667°N 122.2005556°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Seattle Mariners','Seattle','WA','Safeco Field','47.59138889°N 122.3325°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Texas Rangers','Arlington','TX','Globe Life Park in Arlington','32.75138889°N 97.08277778°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Atlanta Braves','Atlanta','GA','Turner Field','33.73527778°N 84.38944444°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Miami Marlins','Miami','FL','Marlins Park','25.77805556°N 80.21972222°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('New York Mets','New York','NY','Citi Field','40.75694444°N 73.84583333°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Philadelphia Phillies','Philadelphia','PA','Citizens Bank Park','39.90583333°N 75.16638889°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Washington Nationals','Washington','D.C.','Nationals Park','38.87277778°N 77.0075°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Chicago Cubs','Chicago','IL','Wrigley Field','41.94833333°N 87.65555556°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Cincinnati Reds','Cincinnati','OH','Great American Ball Park','39.0975°N 84.50666667°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Milwaukee Brewers','Milwaukee','WI','Miller Park','43.02833333°N 87.97111111°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Pittsburgh Pirates','Pittsburgh','PA','PNC Park','40.44694444°N 80.00583333°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('St. Louis Cardinals','St. Louis','MO','Busch Stadium','38.6225°N 90.19305556°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Arizona Diamondbacks','Phoenix','AZ','Chase Field','33.44527778°N 112.0669444°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Colorado Rockies','Denver','CO','Coors Field','39.75611111°N 104.9941667°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Los Angeles Dodgers','Los Angeles','CA','Dodger Stadium','34.07361111°N 118.24°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('San Diego Padres','San Diego','CA','Petco Park','32.70722222°N 117.1566667°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('San Francisco Giants','San Francisco','CA','AT&T Park','37.77861111°N 122.3891667°W',4);
insert into teams (team_name, team_city, team_state, stadium_name, position, sport_id) values ('Houston Astros','Houston','TX','Minute Maid Park','29.7569° N, 95.3556° W',4);