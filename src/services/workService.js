import { utilService } from './utilService'

export const workService = {
    query,
}

function query() {
    const cloudinaryBaseUrl =
        process.env.REACT_APP_CLOUDINARY_PROJS_BASE_URL

    return [
        {
            _id: utilService.makeId(),
            title: 'Arter',
            imgUrl: `${cloudinaryBaseUrl}/arter_iwutra.jpg`,
            desc: 'A marketplace for artists',
            category: 'recent',
            linkUrl: 'https://arter-app.herokuapp.com/',
            framework: 'react',
            inDevelopment: false,
            tags: ['react', 'redux', 'mongoDB', 'node.js', 'socket.io', 'material-ui', 'cloudinary', 'PWA', 'SPA', 'scss', 'MERN'],
            repoUrl: 'https://github.com/tomleb3/Arter',
        },
        {
            _id: utilService.makeId(),
            title: 'Instapound',
            imgUrl: `${cloudinaryBaseUrl}/instapound_yxz5ox.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/bookie_wkeude.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/btc-wallet_pgkc3y.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/Louder_akv6l7.png`,
            desc: 'A music player',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/louder/',
            framework: 'react',
            inDevelopment: false,
            tags: ['react', 'scss', 'hooks', 'soundcloud', 'API', 'PWA'],
            repoUrl: 'https://github.com/tomleb3/louder',
        },
        {
            _id: utilService.makeId(),
            title: 'BEAT IT',
            imgUrl: `${cloudinaryBaseUrl}/beatit_gx7pwx.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/keep_i83yl6.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/minesweeper_avy8ob.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/iMeme_l8hwia.jpg`,
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
            imgUrl: `${cloudinaryBaseUrl}/numberwang_la17pi.jpg`,
            desc: 'A number\'s game',
            category: 'early',
            inDevelopment: false,
            linkUrl: 'https://tomleb3.github.io/numberwang/',
            tags: ['html5', 'vanilla-js', 'es6', 'css3'],
            repoUrl: 'https://github.com/tomleb3/numberwang',
        },
    ]
}