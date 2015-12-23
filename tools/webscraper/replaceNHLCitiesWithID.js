var fs = require('fs')

var nhlTeams = {
    "Boston": {
        id: 1,
        name: "Boston"
    },
    "Buffalo": {
        id: 2,
        name: "Buffalo"
    },
    "Detroit": {
        id: 3,
        name: "Detroit"
    },
    "Florida": {
        id: 4,
        name: "Florida"
    },
    "Montreal": {
        id: 5,
        name: "Montr�al" //weirdness with the scrapper results 
    },
    "Ottawa": {
        id: 6,
        name: "Ottawa"
    },
    "Tampa Bay": {
        id: 7,
        name: "Tampa Bay"
    },
    "Toronto": {
        id: 8,
        name: "Toronto"
    },
    "Carolina": {
        id: 9,
        name: "Carolina"
    },
    "Columbus": {
        id: 10,
        name: "Columbus"
    },
    "New Jersey": {
        id: 11,
        name: "New Jersey"
    },
    "NY Islanders": {
        id: 12,
        name: "NY Islanders"
    },
    "NY Rangers": {
        id: 13,
        name: "NY Rangers"
    },
    "Philadelphia": {
        id: 14,
        name: "Philadelphia"
    },
    "Pittsburgh": {
        id: 15,
        name: "Pittsburgh"
    },
    "Washington": {
        id: 16,
        name: "Washington"
    },
    "Anaheim": {
        id: 17,
        name: "Anaheim"
    },
    "Arizona": {
        id: 18,
        name: "Arizona"
    },
    "Calgary": {
        id: 19,
        name: "Calgary"
    },
    "Edmonton": {
        id: 20,
        name: "Edmonton"
    },
    "Los Angeles": {
        id: 21,
        name: "Los Angeles"
    },
    "San Jose": {
        id: 22,
        name: "San Jose"
    },
    "Vancouver": {
        id: 23,
        name: "Vancouver"
    },
    "Chicago": {
        id: 24,
        name: "Chicago"
    },
    "Colorado": {
        id: 25,
        name: "Colorado"
    },
    "Dallas": {
        id: 26,
        name: "Dallas"
    },
    "Minnesota": {
        id: 27,
        name: "Minnesota"
    },
    "Nashville": {
        id: 28,
        name: "Nashville"
    },
    "St. Louis": {
        id: 29,
        name: "St. Louis"
    },
    "Winnipeg": {
        id: 30,
        name: "Winnipeg"
    }
}


fs.readFile('C:\\Users\\nbalsamo\\Desktop\\nhl.csv', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    result = data;

    Object.keys(nhlTeams).forEach(function(key) {
        var val = nhlTeams[key];
        var re = new RegExp(nhlTeams[key].name, "g");
        result = result.replace(re, nhlTeams[key].id);
    });

    fs.writeFile('C:\\Users\\nbalsamo\\Desktop\\nhlEdited.csv', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});
