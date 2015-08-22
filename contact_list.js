var friends = {

bill: {
    firstName: "Bill",
    lastName: "Gates",
    number: "555 1234 5877",
    address: ['One Microsoft Way','Redmond','WA','98052']
},

steve: {
    firstName: "Steve",
    lastName: "Jobs",
    number: "555 6543 1785",
    address: ['1 Infinite Loop','Silicon Valley','UH','87796']
}

};

var list = function(friends) {

for (var key in friends) {
    console.log(key);
}
}

var search = function(name) {
    for (var key in friends) {
        if(friends[key].firstName == name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

