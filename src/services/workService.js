export const workService = {
    query,
}

function query() {
    return [
        {
            _id: 'w101',
            title: 'Arter',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614445923/portfolio/arter_iwutra.jpg',
            desc: 'A marketplace for artists',
            category: 'recent',
            linkUrl: 'https://arter-app.herokuapp.com/#/',
            framework: 'react',
            tags: ['react', 'redux', 'mongoDB', 'node.js', 'socket.io', 'cloudinary', 'PWA', 'scss'],
            hostedOn: {
                hostName: 'Heroku',
                hostUrl: 'https://www.heroku.com/',
            },
        },
        {
            _id: 'w102',
            title: 'Bookie',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614445196/portfolio/bookie_wkeude.jpg',
            desc: 'An online book shop',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/bookie/#/',
            framework: 'vue',
            tags: ['vue', 'vuex', 'scss'],
            hostedOn: {
                hostName: 'Github',
                hostUrl: 'https://github.com/',
            },
        },
        {
            _id: 'w103',
            title: 'BTC Wallet',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614445641/portfolio/btc-wallet_pgkc3y.jpg',
            desc: 'A personal Bitcoin wallet',
            category: 'recent',
            linkUrl: 'https://tomleb3.github.io/BTC-Wallet/#/',
            framework: 'angular',
            tags: ['angular', 'axios', 'API', 'scss'],
            hostedOn: {
                hostName: 'Github',
                hostUrl: 'https://github.com/',
            },
        },
        {
            _id: 'w104',
            title: 'Minesweeper',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614695008/portfolio/minesweeper_avy8ob.jpg',
            desc: 'A minesweeper game',
            category: 'early',
            linkUrl: 'https://tomleb3.github.io/Minesweeper/',
            tags: ['html5', 'vanilla-js', 'es6', 'css3'],
            hostedOn: {
                hostName: 'Github',
                hostUrl: 'https://github.com/',
            },
        },
        {
            _id: 'w105',
            title: 'iMeme',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614695156/portfolio/iMeme_l8hwia.jpg',
            desc: 'A meme generator',
            category: 'early',
            linkUrl: 'https://tomleb3.github.io/iMeme/',
            tags: ['html5', 'vanilla-js', 'es6', 'css3'],
            hostedOn: {
                hostName: 'Github',
                hostUrl: 'https://github.com/',
            },
        },
        {
            _id: 'w106',
            title: 'Numberwang!',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614695482/portfolio/numberwang_la17pi.jpg',
            desc: 'A number\'s game',
            category: 'early',
            linkUrl: 'https://tomleb3.github.io/numberwang/',
            tags: ['html5', 'vanilla-js', 'es6', 'css3'],
            hostedOn: {
                hostName: 'Github',
                hostUrl: 'https://github.com/',
            },
        },
        {
            _id: 'w107',
            title: 'Keep',
            imgUrl: 'https://res.cloudinary.com/tomleb3/image/upload/v1614707108/portfolio/keep_i83yl6.jpg',
            desc: 'A personal notes app',
            category: 'early',
            framework: 'react',
            linkUrl: 'https://tomleb3.github.io/keep/',
            tags: ['html5', 'react', 'es6', 'css3'],
            hostedOn: {
                hostName: 'Github',
                hostUrl: 'https://github.com/',
            },
        },
    ]
}