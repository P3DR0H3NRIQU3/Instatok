export const showIcons = () => {
    //armazenamos na varíavel nosso menu inferior
    const bottomNavigation = document.getElementById('bottom_navigation');
    //Vamos criar imagens contendo os ícones
    const imgIconHouse = document.createElement('img');
    const imgIconFriends = document.createElement('img');
    const imgIconUser = document.createElement('img');

    //colocar os icones e atribuir o id
    imgIconHouse.src = '../assets/icons/home.svg';
    imgIconHouse.id = 'iconHouse';
    imgIconFriends.src = '../assets/icons/amigos.svg';
    imgIconFriends.id = 'iconFriends';
    imgIconUser.src = '../assets/icons/profile.svg';
    imgIconUser.id = 'iconUser';
    //Adicionamos tudo ao bottom
    bottomNavigation.appendChild(imgIconHouse);
    bottomNavigation.appendChild(imgIconFriends);
    bottomNavigation.appendChild(imgIconUser);
}
export const clickIcon = () =>{
    //Pegamos os ids dos icones criados anteriormente
    const iconHouseId = document.getElementById('iconHouse');
    const iconFriendsId = document.getElementById('iconFriends');
    const iconUserId = document.getElementById('iconUser');

    //Pegamos os ids do nosso html
    const home = document.getElementById('home');
    const friends = document.getElementById('friends');
    const user = document.getElementById('user');

    //Vamos ouvir os eventos de click nos icones
    iconHouseId.addEventListener('click', ()=>{
        //Removemos a classe dos outros
        iconFriendsId.classList.remove('icon');
        iconUserId.classList.remove('icon');
        //Add a classe no atual
        iconHouseId.classList.add('icon');
        //Escondemos os elementos
        friends.style.display = 'none';
        user.style.display = 'none';
        
        home.style.display = 'block';

        iconUserId.addEventListener('click', ()=>{

            iconHouseId.classList.remove('icon');
            iconFriendsId.classList.remove('icon');

            iconUserId.classList.add('icon');

            home.style.display = 'none';
            friends.style.display = 'none';
            user.style.display = 'block';
        })
        iconFriendsId.addEventListener('click', ()=>{

            iconHouseId.classList.remove('icon');
            iconUserId.classList.remove('icon');

            iconFriendsId.classList.add('icon');

            home.style.display = 'none';
            user.style.display = 'none';
            friends.style.display = 'block';
        })
        iconHouseId.addEventListener('click', ()=>{

            iconFriendsId.classList.remove('icon');
            iconUserId.classList.remove('icon');
            
            iconHouseId.classList.add('icon');

            friends.style.display = 'none';
            user.style.display = 'none';
            home.style.display = 'block';
        })
            
    
    })
}