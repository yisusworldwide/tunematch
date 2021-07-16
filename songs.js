const matches = [
    { song: 'Enter Sandman', options: { 1: 'Judas Priest', 2: 'Madonna', 3: 'Metallica' }, correct: 3 },
    { song: 'Thunderstruck', options: { 1: 'ACDC', 2: 'Chayanne', 3: 'Motorhead' }, correct: 1 },
    { song: 'We Are The Champions', options: { 1: 'The Beatles', 2: 'Queen', 3: 'Rolling Stones' }, correct: 2 },
    { song: 'Hablame De Ti', options: { 1: 'Pimpinela', 2: 'Serrat', 3: 'Pecos' }, correct: 3 },
    { song: 'Llorando Por Granada', options: { 1: 'Los Puntos', 2: 'Zapato Veloz', 3: 'Mecano' }, correct: 1 },
    { song: 'Tu Me Camelas', options: { 1: 'Julio Iglesias', 2: 'Nina Pastori', 3: 'Bose' }, correct: 2 },
    { song: 'Tanto La Queria', options: { 1: 'Rocio Durcal', 2: 'Bebe', 3: 'Andy & Lucas' }, correct: 3 },
    { song: 'Bamboleo', options: { 1: 'Gipsy Kings', 2: 'Janette', 3: 'Raphael' }, correct: 1 },
    { song: 'Toma Vitamina', options: { 1: 'Alex & Cristina', 2: 'La Fiesta', 3: 'Parchis' }, correct: 2 },
    { song: 'Barbie Girl', options: { 1: 'Aquarius', 2: 'Fuego', 3: 'Aqua' }, correct: 3 },
    { song: 'A Tout Le Monde', options: { 1: 'Megadeth', 2: 'UFO', 3: 'Pantera' }, correct: 1 },
    { song: 'Avalancha', options: { 1: 'Rosendo', 2: 'Heroes Del Silencio', 3: 'Los Suaves' }, correct: 2 }

];

function getMatch() {
    const match = Math.floor(Math.random() * matches.length - 1) + 1
    matches[match].num = match;
    return matches[match];
};

function getMatchById(num) {
    matches[num].num = num;
    return matches[num];
};