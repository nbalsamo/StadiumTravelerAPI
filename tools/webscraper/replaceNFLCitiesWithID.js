//Simple node script that replaces team names with the ids I have set up in the system. This shouldn't be a seperate script from the nhl version. 

var fs = require('fs');

var nflTeams = {
    "Buffalo Bills": { "name": "Buffalo Bills", "teamID": 61 },
    "Miami Dolphins": { "name": "Miami Dolphins", "teamID": 62 },
    "New England Patriots": { "name": "New England Patriots", "teamID": 63 },
    "New York Jets": { "name": "New York Jets", "teamID": 64 },
    "Baltimore Ravens": { "name": "Baltimore Ravens", "teamID": 65 },
    "Cincinnati Bengals": { "name": "Cincinnati Bengals", "teamID": 66 },
    "Cleveland Browns": { "name": "Cleveland Browns", "teamID": 67 },
    "Pittsburgh Steelers": { "name": "Pittsburgh Steelers", "teamID": 68 },
    "Houston Texans": { "name": "Houston Texans", "teamID": 69 },
    "Indianapolis Colts": { "name": "Indianapolis Colts", "teamID": 70 },
    "Jacksonville Jaguars": { "name": "Jacksonville Jaguars", "teamID": 71 },
    "Tennessee Titans": { "name": "Tennessee Titans", "teamID": 72 },
    "Denver Broncos": { "name": "Denver Broncos", "teamID": 73 },
    "Kansas City Chiefs": { "name": "Kansas City Chiefs", "teamID": 74 },
    "Oakland Raiders": { "name": "Oakland Raiders", "teamID": 75 },
    "San Diego Chargers": { "name": "San Diego Chargers", "teamID": 76 },
    "Dallas Cowboys": { "name": "Dallas Cowboys", "teamID": 77 },
    "New York Giants": { "name": "New York Giants", "teamID": 78 },
    "Philadelphia Eagles": { "name": "Philadelphia Eagles", "teamID": 79 },
    "Washington Redskins": { "name": "Washington Redskins", "teamID": 80 },
    "Chicago Bears": { "name": "Chicago Bears", "teamID": 81 },
    "Detroit Lions": { "name": "Detroit Lions", "teamID": 82 },
    "Green Bay Packers": { "name": "Green Bay Packers", "teamID": 83 },
    "Minnesota Vikings": { "name": "Minnesota Vikings", "teamID": 84 },
    "Atlanta Falcons": { "name": "Atlanta Falcons", "teamID": 85 },
    "Carolina Panthers": { "name": "Carolina Panthers", "teamID": 86 },
    "New Orleans Saints": { "name": "New Orleans Saints", "teamID": 87 },
    "Tampa Bay Buccaneers": { "name": "Tampa Bay Buccaneers", "teamID": 88 },
    "Arizona Cardinals": { "name": "Arizona Cardinals", "teamID": 89 },
    "Los Angeles Rams": { "name": "Los Angeles Rams", "teamID": 90 },
    "San Francisco 49ers": { "name": "San Francisco 49ers", "teamID": 91 },
    "Seattle Seahawks": { "name": "Seattle Seahawks", "teamID": 92 }

}


fs.readFile('F:\\Users\\nbalsamo\\Desktop\\nfl-2016.csv', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    result = data;

    Object.keys(nflTeams).forEach(function(key) {
        var re = new RegExp(nflTeams[key].name, 'g');
        result = result.replace(re, nflTeams[key].teamID);
    });

    fs.writeFile('F:\\Users\\nbalsamo\\Desktop\\nfl-2016-scheduleEdited.csv', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});
