import Image1 from './restaurant-1.jpg';
import Image2 from './restaurant-2.jpg';
import Image3 from './restaurant-3.jpg';
import Image4 from './restaurant-4.jpg';
import Peach from './peach-chef.png';

export default function homeLoad() {
    const menuItem = document.getElementById('home-op');
    menuItem.classList.add('selected');
    const menuItemOther1 = document.getElementById('menu-op');
    menuItemOther1.classList.remove('selected');
    const menuItemOther2 = document.getElementById('contact-op');
    menuItemOther2.classList.remove('selected');

    const headlineLeft = document.getElementById('headline-l');
    const headlineRight = document.getElementById('headline-r');
    const main = document.getElementById('main');

    const caption = document.createElement('p');
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const peachImg = new Image();

    img1.src = Image1;
    img2.src = Image2;
    img3.src = Image3;
    img4.src = Image4;
    peachImg.src = Peach;

    headlineLeft.appendChild(peachImg);

    caption.setAttribute('class','caption');
    caption.innerHTML = "&quot;Come on and test our Mushroom Kingdom incredible pizzas. We cook all of them with half love and half magic. Once you taste one of them, you fall in love with it. Mario and Luigi Brothers at the management, Toad Co. at the tools and Me at the recipes. What are you waiting for? I can hear your stomach roars!!! :-)&quot;";
    headlineRight.appendChild(caption);

    main.appendChild(img1);
    main.appendChild(img2);
    main.appendChild(img3);
    main.appendChild(img4);
}