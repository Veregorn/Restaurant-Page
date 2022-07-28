import Logo from './super-mario-logo.svg';
//import Logo2 from './Super-Mario-Logo-500x313.jpg';

export default function homeLoad() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const headline = document.createElement('div');
    const hdTop = document.createElement('div');
    const hdDown = document.createElement('div');
    const title = document.createElement('h1');
    const caption = document.createElement('p');
    const myLogo = new Image();
    myLogo.src = Logo;

    header.setAttribute('id','header');
    headline.setAttribute('id','headline');
    hdTop.setAttribute('id','hd-top');
    hdDown.setAttribute('id','hd-down');
    caption.setAttribute('class','caption');

    hdTop.appendChild(myLogo);
    
    title.innerHTML = "Restaurant";
    hdDown.appendChild(title);

    caption.innerHTML = "Come on and test our Mushroom Kingdom incredible pizzas. We cook all of them with half love and half magic. Once you taste one of them, you fall in love with it. Peach Princess at the recipes, Mario and Luigi Brothers at the management and Toad Co. at the tools. What are you waiting for? I'm watching your stomach roars!!! :-)";
    headline.appendChild(caption);

    header.appendChild(hdTop);
    header.appendChild(hdDown);
    content.appendChild(header);
    content.appendChild(headline);
}