export const utilService = {
    makeId,
    makeLorem,
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeLorem(size = 80) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    txt += '.';
    return txt;
}


// REACT GET WINDOW SIZE FUNCTION (w/ HOOKS) :

// const GetWindowsSize = () => {
//     const [windowSize, setWindowSize] = useState({
//         width: null,
//         height: null,
//     })

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowSize({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             })
//         }
//         window.addEventListener("resize", handleResize)
//         handleResize()
//         return () => window.removeEventListener("resize", handleResize)
//     }, [])

//     return windowSize
// }