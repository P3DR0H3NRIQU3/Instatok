export const amigos = [];

export const exibirAmigos = ()=>{
    //Usamos o iterador forEach para percorrer o array. Para cada pessoa do array: vamos criar um card
    amigos.forEach(feedItem =>{
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