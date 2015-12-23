var fs = require('fs')

var nflTeams = {
    "Bills": {
        id: 61,
        name: "Bills"
    },
    "Dolphins": {
        id: 62,
        name: "Dolphins"
    },
    "Patriots": {
        id: 63,
        name: "Patriots"
    },
    "Jets": {
        id: 64,
        name: "Jets"
    },
    "Ravens": {
        id: 65,
        name: "Ravens"
    },
    "Bengals": {
        id: 66,
        name: "Bengals"
    },
    "Browns": {
        id: 67,
        name: "Browns"
    },
    "Steelers": {
        id: 68,
        name: "Steelers"
    },
    "Texans": {
        id: 69,
        name: "Texans"
    },
    "Colts": {
        id: 70,
        name: "Colts"
    },
    "Jaguars": {
        id: 71,
        name: "Jaguars"
    },
    "Titans": {
        id: 72,
        name: "Titans"
    },
    "Broncos": {
        id: 73,
        name: "Broncos"
    },
    "Chiefs": {
        id: 74,
        name: "Chiefs"
    },
    "Raiders": {
        id: 75,
        name: "Raiders"
    },
    "Chargers": {
        id: 76,
        name: "Chargers"
    },
    "Cowboys": {
        id: 77,
        name: "Cowboys"
    },
    "Giants": {
        id: 78,
        name: "Giants"
    },
    "Eagles": {
        id: 79,
        name: "Eagles"
    },
    "Redskins": {
        id: 80,
        name: "Redskins"
    },
    "Bears": {
        id: 81,
        name: "Bears"
    },
    "Lions": {
        id: 82,
        name: "Lions"
    },
    "Packers": {
        id: 83,
        name: "Packers"
    },
    "Vikings": {
        id: 84,
        name: "Vikings"
    },
    "Falcons": {
        id: 85,
        name: "Falcons"
    },
    "Panthers": {
        id: 86,
        name: "Panthers"
    },
    "Saints": {
        id: 87,
        name: "Saints"
    },
    "Buccaneers": {
        id: 88,
        name: "Buccaneers"
    },
    "Cardinals": {
        id: 89,
        name: "Cardinals"
    },
    "Rams": {
        id: 90,
        name: "Rams"
    },
    "49ers": {
        id: 91,
        name: "49ers"
    },
    "Seahawks": {
        id: 92,
        name: "Seahawks"
    },
}


fs.readFile('C:\\Users\\nbalsamo\\Desktop\\nfl-2015-schedule.csv', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    result = data;

    Object.keys(nflTeams).forEach(function(key) {
        var val = nflTeams[key];
        var re = new RegExp(nflTeams[key].name, "g");
        result = result.replace(re, nflTeams[key].id);
    });

    fs.writeFile('C:\\Users\\nbalsamo\\Desktop\\nfl-2015-scheduleEdited.csv', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});
