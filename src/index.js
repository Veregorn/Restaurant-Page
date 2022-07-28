import homeLoad from './home.js';
import './style.css';
import Logo from './super-mario-logo.svg';

function fixedContentLoad() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const menu = document.createElement('div');
    const homeOption = document.createElement('div');
    const menuOption = document.createElement('div');
    const contactOption = document.createElement('div');
    const homeOptionText = document.createElement('p');
    const menuOptionText = document.createElement('p');
    const contactOptionText = document.createElement('p');
    const headline = document.createElement('div');
    const hdTop = document.createElement('div');
    const hdDown = document.createElement('div');
    const title = document.createElement('h1');
    const main = document.createElement('div');

    const myLogo = new Image();
    myLogo.src = Logo;

    header.setAttribute('id','header');
    menu.setAttribute('id','menu');
    headline.setAttribute('id','headline');
    hdTop.setAttribute('id','hd-top');
    hdDown.setAttribute('id','hd-down');
    main.setAttribute('id','main');

    homeOption.setAttribute('class','menu-btn');
    menuOption.setAttribute('class','menu-btn');
    contactOption.setAttribute('class','menu-btn');

    homeOptionText.innerHTML = 'Home';
    menuOptionText.innerHTML = 'Menu';
    contactOptionText.innerHTML = 'Contact';

    homeOption.appendChild(homeOptionText);
    menuOption.appendChild(menuOptionText);
    contactOption.appendChild(contactOptionText);
    
    menu.appendChild(homeOption);
    menu.appendChild(menuOption);
    menu.appendChild(contactOption);

    hdTop.appendChild(myLogo);
    
    title.innerHTML = "Restaurant";
    hdDown.appendChild(title);

    header.appendChild(hdTop);
    header.appendChild(hdDown);
    content.appendChild(header);
    content.appendChild(menu);
    content.appendChild(headline);
}

fixedContentLoad();
homeLoad();