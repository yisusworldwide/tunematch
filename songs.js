const matches = [{
        song: 'Enter Sandman',
        options: { 1: 'Judas Priest', 2: 'Madonna', 3: 'Metallica' },
        images: { 1: 'https://static.dw.com/image/45116117_303.jpg', 2: 'https://alfaenlinea.com/wp-content/uploads/cache_img/Central_20210715_DocumentalMadonna-600x400-pa65eahjdaxsui93wnempcdtlcohfg07atelcorq8w.jpg', 3: 'https://www.latercera.com/resizer/jfiOqRyjM7rCirripDCQJcznbJo=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/D3G47L7XVZDEXCZSCLTDVHZRCU.jpg' },
        correct: 3,
        video: 'https://www.youtube.com/embed/CD-E-LDc384'

    },

    {
        song: 'Thunderstruck',
        options: { 1: 'ACDC', 2: 'Chayanne', 3: 'Motorhead' },
        images: { 1: 'https://rockfm-cdnmed.agilecontent.com/resources/jpg/8/1/1563527713918.jpg', 2: 'https://imagenes.milenio.com/KOmeluHnLIcjsZGshz_GmJ-8xj8=/958x596/smart/https://www.milenio.com/uploads/media/2020/06/28/cantante-celebro-redes-sociales-instagram_100_18_874_544.jpg', 3: 'https://estaticos-cdn.prensaiberica.es/clip/0146cc8a-df28-4adc-88bb-a5fb05a25443_16-9-aspect-ratio_default_0.jpg' },
        correct: 1,
        video: 'https://www.youtube.com/embed/v2AC41dglnM'
    },

    {
        song: 'Hablame De Ti',
        options: { 1: 'Pimpinela', 2: 'Serrat', 3: 'Pecos' },
        images: { 1: 'https://www.cmtv.com.ar/imagenes_artistas/240.jpg', 2: 'https://cdn.smehost.net/sonymusices-45pressprod/wp-content/uploads/2018/10/foto_de_joan-manuel-serrat-1.jpg', 3: 'https://www.javierdepecos.com/wp-content/uploads/2020/02/pecos-1-427x427.jpg' },
        correct: 3,
        video: 'https://www.youtube.com/embed/tJBrK2KAPfc'
    },

    {
        song: 'We Are The Champions',
        options: { 1: 'The Beatles', 2: 'Queen', 3: 'Rolling Stones' },
        images: { 1: 'https://www.show.news/__export/1593053470003/sites/debate/img/2020/06/24/the-beatles_1_crop1593051718114.jpg_423682103.jpg', 2: 'https://img2.rtve.es/a/5687219?w=400&preview=1603093247963.jpg', 3: 'https://www.plasticosydecibelios.com/wp-content/uploads/2021/07/Rolling-Stones.jpg' },
        correct: 2,
        video: 'https://www.youtube.com/embed/KXw8CRapg7k'
    }


    // { song: 'Llorando Por Granada', options: { 1: 'Los Puntos', 2: 'Zapato Veloz', 3: 'Mecano' }, correct: 1 },
    // { song: 'Tu Me Camelas', options: { 1: 'Julio Iglesias', 2: 'Nina Pastori', 3: 'Bose' }, correct: 2 },
    // { song: 'Tanto La Queria', options: { 1: 'Rocio Durcal', 2: 'Bebe', 3: 'Andy & Lucas' }, correct: 3 },
    // { song: 'Bamboleo', options: { 1: 'Gipsy Kings', 2: 'Janette', 3: 'Raphael' }, correct: 1 },
    // { song: 'Toma Vitamina', options: { 1: 'Alex & Cristina', 2: 'La Fiesta', 3: 'Parchis' }, correct: 2 },
    // { song: 'Barbie Girl', options: { 1: 'Aquarius', 2: 'Fuego', 3: 'Aqua' }, correct: 3 },
    // { song: 'A Tout Le Monde', options: { 1: 'Megadeth', 2: 'UFO', 3: 'Pantera' }, correct: 1 },
    // { song: 'Avalancha', options: { 1: 'Rosendo', 2: 'Heroes Del Silencio', 3: 'Los Suaves' }, correct: 2 }

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