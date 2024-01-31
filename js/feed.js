import { amigos, exibirAmigos } from "./friends.js";


export const feed = [
    {name: 'Lívia', 
    img: './assets/images/m1.jpeg',
    imgprofile: './assets/images/m1.jpeg',
    curtidas: 10,

    },
    {name: 'Julia', 
    img: './assets/images/m2.jpeg',
    imgprofile: './assets/images/m2.jpeg',
    curtidas: 0,
    },
    {name: 'Isabela', 
    img: './assets/images/m3.jpeg',
    imgprofile: './assets/images/m3.jpeg',
    curtidas: 0,
    }
]
export const exibirFeed =()=>{
    //Usamos o iterador forEach para percorrer o array. Para cada pessoa do array: vamos criar um card
    feed.forEach(feedItem=>{
        //criamps cada elemento necessario
        const cardItem = document.createElement('div');
        const userInfo = document.createElement('div');
        const acoes = document.createElement('div');
        const imgFeed = document.createElement('img');
        const imgUser = document.createElement('img');
        const curtir = document.createElement('img');
        const nome = document.createElement('h2');
        const textoCurtir = document.createElement('p');
        //configurar os atributos e classes
        cardItem.classList.add('cardItem');
        userInfo.classList .add('userInfo');
        imgFeed.classList.add('imgFeed');
        imgFeed.src = feedItem.img;
        curtir.src = './assets/icons/heart-solid.svg';
        curtir.classList.add('btn_curtir');
        
        curtir.onclick = () => addCurtidas(feedItem, textoCurtir)
        
        textoCurtir.innerHTML = `${feedItem.curtidas} curtidas`;
        imgUser.src = feedItem.imgprofile;
        imgUser.classList.add('img_user');
        acoes.classList.add('acoes');
        nome.innerHTML = feedItem.name;
        //add o btn do curtir e o texto curtir na div acoes
        acoes.appendChild(curtir);
        acoes.appendChild(textoCurtir);
        //anexar os elementos
        userInfo.appendChild(imgUser);
        userInfo.appendChild(nome);
        cardItem.appendChild(userInfo);
        cardItem.appendChild(imgFeed);
        cardItem.appendChild(acoes);
        //anexa tudo ao card principal
        card.appendChild(cardItem);

    })
}
const addCurtidas = (pessoaQueSeraCurtida, texto) => {
    pessoaQueSeraCurtida.curtidas ++;
    texto.innerHTML = `${pessoaQueSeraCurtida.curtidas} curtidas`
    
    amigos.push(pessoaQueSeraCurtida);
    exibirAmigos();
}