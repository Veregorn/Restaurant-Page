import homeLoad from './home.js';
import './style.css';
import Logo from './super-mario-logo.svg';
import GitHub from './github-icon.png'

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
    const headlineLeft = document.createElement('div');
    const headlineRight = document.createElement('div');
    const hdTop = document.createElement('div');
    const hdDown = document.createElement('div');
    const title = document.createElement('h1');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    const footerTxt = document.createElement('p');
    const gitHubLink = document.createElement('a');

    const myLogo = new Image();
    myLogo.src = Logo;

    header.setAttribute('id','header');
    menu.setAttribute('id','menu');
    headline.setAttribute('id','headline');
    headlineLeft.setAttribute('id','headline-l');
    headlineRight.setAttribute('id','headline-r');
    hdTop.setAttribute('id','hd-top');
    hdDown.setAttribute('id','hd-down');
    main.setAttribute('id','main');
    footer.setAttribute('id','footer');

    headline.appendChild(headlineLeft);
    headline.appendChild(headlineRight);

    homeOption.setAttribute('class','menu-btn');
    homeOption.setAttribute('id','home-op');
    menuOption.setAttribute('class','menu-btn');
    menuOption.setAttribute('id','menu-op');
    contactOption.setAttribute('class','menu-btn');
    contactOption.setAttribute('id','contact-op');

    homeOptionText.innerHTML = 'Home';
    menuOptionText.innerHTML = 'Menu';
    contactOptionText.innerHTML = 'Contact';

    footerTxt.innerHTML = 'Copyright &copy; Veregorn';
    footer.appendChild(footerTxt);

    gitHubLink.setAttribute('href','https://github.com/Veregorn');
    const myGithubIcon = new Image();
    myGithubIcon.src = GitHub;
    gitHubLink.appendChild(myGithubIcon);
    footer.appendChild(gitHubLink);

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
    content.appendChild(main);
    content.appendChild(footer);
}

fixedContentLoad();
homeLoad();