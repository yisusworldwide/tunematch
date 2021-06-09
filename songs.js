const matches = [
    {song: 'Enter Sandman', options: {1:'Judas Priest', 2:'Madonna', 3:'Metallica'}, correct: 3},
    {song: 'Thunderstuck', options: {1:'ACDC', 2:'Chayanne', 3:'Motorhead'}, correct: 1},
    {song: 'We are the champions', options: {1:'The Beatles', 2:'Queen', 3:'Rolling Stones'}, correct: 2}

];

function getMatch() {
    const match = Math.floor(Math.random() * matches.length-1) + 1
    matches[match].num = match;
    return matches[match];
};

function getMatchById(num) {
    matches[num].num = num;
    return matches[num];
};
