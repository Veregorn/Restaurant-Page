import Toad from './toad-chef.png';
import Map from './europe-map.png';

export default function contactLoad() {
    const menuItem = document.getElementById('contact-op');
    menuItem.classList.add('selected');
    const menuItemOther1 = document.getElementById('menu-op');
    menuItemOther1.classList.remove('selected');
    const menuItemOther2 = document.getElementById('home-op');
    menuItemOther2.classList.remove('selected');

    const headlineLeft = document.getElementById('headline-l');
    const headlineRight = document.getElementById('headline-r');
    const main = document.getElementById('main');

    const toadImg = new Image();
    const caption = document.createElement('p');

    toadImg.src = Toad;
    toadImg.style = 'margin-top: 10px';

    headlineLeft.appendChild(toadImg);
    
    caption.setAttribute('class','caption');
    caption.innerHTML = "&quot;All our team is at your order. Here you have our contact data. Of course you can visit us here in the restaurant. That'll make us glad!&quot;";
    headlineRight.appendChild(caption);

    // Let's create a dark div for clean visualization against the pizza background
    const darkCanvas = document.createElement('div');
    darkCanvas.style = 'background-color: #000000DD; width: 600px; padding: 50px 0;';
    
    const phone = document.createElement('p');
    phone.innerHTML = 'Call to the restaurant: 333-6666-999';
    phone.style = 'margin-bottom: 50px; font-size: 24px; color: #FFFFFF';

    const mail = document.createElement('p');
    mail.innerHTML = 'Email us at: customers@fakemail.com';
    mail.style = 'margin-bottom: 50px; font-size: 24px; color: #FFFFFF';

    const mapText = document.createElement('p');
    mapText.innerHTML = 'Visit us here (best option!):';
    mapText.style = 'margin-bottom: 20px; font-size: 24px; color: #FFFFFF';

    const mapImg = new Image();
    mapImg.src = Map;
    mapImg.style = 'border: none';

    darkCanvas.appendChild(phone);
    darkCanvas.appendChild(mail);
    darkCanvas.appendChild(mapText);
    darkCanvas.appendChild(mapImg);

    main.appendChild(darkCanvas);
    main.style = 'text-align: center; display: flex; justify-content: center';
}