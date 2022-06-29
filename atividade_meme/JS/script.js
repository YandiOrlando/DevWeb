const main = document.querySelector(`main`)
let arraydememes = [];

const fetchMemes = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes')
    const data = await res.json();

    arraydememes = await data.data.memes.map((meme, i) => {

        return {
            index: i,
            id: meme.id,
            nome: meme.name,
            img: meme.url
        }
    });

    return arraydememes
}
const impressaodosmemes = async () => {

    memes = await fetchMemes()

    memes.forEach(e => {
        caixinhadomeme = document.createElement(`div`)
        caixinhadomeme.setAttribute(`class`, 'caixinhadomeme')

        main.appendChild(caixinhadomeme)

        caixinhadomeme.innerHTML = `
            <img src="${e.img}" class="imgMeme"/>
            <h2>${e.nome}</h2>
            <a id="legenda" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Não clique aqui</a>
        `
    });


}

impressaodosmemes()