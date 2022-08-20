import { utilService } from './utilService';

export interface Work {
    _id: string;
    title: string;
    imgUrl: string;
    desc: string;
    category: 'recent' | 'early';
    linkUrl: string;
    framework?: 'react' | 'angular' | 'vue';
    inDevelopment: boolean;
    tags: string[];
    repoUrl: string;
}

export const workService = {
    query,
};

function query(): Work[] {
    const cloudinaryProjsBaseUrl = process.env.REACT_APP_CLOUDINARY_PROJS_BASE_URL;

    return [
        {
            _id: utilService.makeId(),
            title: 'Arter',
            imgUrl: `${cloudinaryProjsBaseUrl}/arter_w88rbh.webp`,
            desc: 'A marketplace for artists',
            category: 'recent',
            linkUrl: 'https://arter-app.herokuapp.com/',
            framework: 'react',
            inDevelopment: false,
            tags: [
                'react',
                'redux',
                'mongoDB',
                'node.js',
                'socket.io',
                'material-ui',
                'cloudinary',
                'PWA',
                'SPA',
                'scss',
                'MERN',
            ],
            repoUrl: 'https://github.com/tomleb3/Arter',
        },
        {
            _id: utilService.makeId(),
            title: 'Instapound',
            imgUrl: `${cloudinaryProjsBaseUrl}/instapound_lamg6b.webp`,
            desc: 'An Instagram clone',
            category: 'recent',
            linkUrl: 'https://instapound-app.herokuapp.com/',
            framework: 'react',
            inDevelopment: true,
            tags: ['react', 'redux', 'mongoDB', 'node.js', 'socket.io', 'cloudinary', 'PWA', 'SPA', 'scss', 'MERN'],
            repoUrl: 'https://github.com/tomleb3/instapound',
        },
        {
            _id: utilService.makeId(),
            title: 'Bookie',
            imgUrl: `${cloudinaryProjsBaseUrl}/bookie_huy0sm.webp`,
            desc: 'An online book shop',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/bookie/',
            framework: 'vue',
            inDevelopment: false,
            tags: ['vue', 'vuex', 'scss'],
            repoUrl: 'https://github.com/tomleb3/bookie',
        },
        {
            _id: utilService.makeId(),
            title: 'BTC Wallet',
            imgUrl: `${cloudinaryProjsBaseUrl}/btcwallet_oeh8lc.webp`,
            desc: 'A personal Bitcoin wallet',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/BTC-Wallet/',
            framework: 'angular',
            inDevelopment: false,
            tags: ['angular', 'axios', 'API', 'scss'],
            repoUrl: 'https://github.com/tomleb3/BTC-Wallet',
        },
        {
            _id: utilService.makeId(),
            title: 'Louder',
            imgUrl: `${cloudinaryProjsBaseUrl}/louder_mqu3qu.webp`,
            desc: 'A music player',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/louder/',
            framework: 'react',
            inDevelopment: false,
            tags: ['react', 'scss', 'hooks', 'soundcloud', 'context-api', 'API', 'PWA'],
            repoUrl: 'https://github.com/tomleb3/louder',
        },
        {
            _id: utilService.makeId(),
            title: 'BEAT IT',
            imgUrl: `${cloudinaryProjsBaseUrl}/beatit_favhpn.webp`,
            desc: 'A pad looper',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/beatit/',
            framework: 'react',
            inDevelopment: false,
            tags: ['react', 'scss', 'hooks', 'PWA'],
            repoUrl: 'https://github.com/tomleb3/beatit',
        },
        {
            _id: utilService.makeId(),
            title: 'Keep',
            imgUrl: `${cloudinaryProjsBaseUrl}/keep_rmzosr.webp`,
            desc: 'A personal notes app',
            category: 'early',
            linkUrl: 'https://tomleb3.github.io/keep/',
            framework: 'react',
            inDevelopment: false,
            tags: ['html5', 'react', 'es6', 'css3'],
            repoUrl: 'https://github.com/tomleb3/keep',
        },
        {
            _id: utilService.makeId(),
            title: 'Minesweeper',
            imgUrl: `${cloudinaryProjsBaseUrl}/minesweeper_bqbxiu.webp`,
            desc: 'A minesweeper game',
            category: 'early',
            linkUrl: 'https://tomleb3.github.io/Minesweeper/',
            inDevelopment: false,
            tags: ['html5', 'vanilla-js', 'es6', 'css3'],
            repoUrl: 'https://github.com/tomleb3/Minesweeper',
        },
        {
            _id: utilService.makeId(),
            title: 'iMeme',
            imgUrl: `${cloudinaryProjsBaseUrl}/imeme_yyfusj.webp`,
            desc: 'A meme generator',
            category: 'early',
            inDevelopment: false,
            linkUrl: 'https://tomleb3.github.io/iMeme/',
            tags: ['html5', 'vanilla-js', 'es6', 'css3', 'canvas'],
            repoUrl: 'https://github.com/tomleb3/iMeme',
        },
        {
            _id: utilService.makeId(),
            title: 'Numberwang!',
            imgUrl: `${cloudinaryProjsBaseUrl}/numberwang_dbk3v8.webp`,
            desc: 'A number game',
            category: 'early',
            inDevelopment: false,
            linkUrl: 'https://tomleb3.github.io/numberwang/',
            tags: ['html5', 'vanilla-js', 'es6', 'css3'],
            repoUrl: 'https://github.com/tomleb3/numberwang',
        },
    ];
}
