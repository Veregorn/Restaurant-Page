import Mario from './mario-chef.png';
import Burger from './mario-bacon-cheeseburger.jpg';
import Meat from './meat-rice.jpg';
import Caprese from './pirahna-plant-caprese.jpg';
import Tiramisu from './question-block-tiramisu.jpg';
import Coffee from './coffee-latte.jpg';
import Yoshi from './yoshis-snack-island.jpg';

export default function menuLoad() {
    const menuItem = document.getElementById('menu-op');
    menuItem.classList.add('selected');
    const menuItemOther1 = document.getElementById('contact-op');
    menuItemOther1.classList.remove('selected');
    const menuItemOther2 = document.getElementById('home-op');
    menuItemOther2.classList.remove('selected');

    const headlineLeft = document.getElementById('headline-l');
    const headlineRight = document.getElementById('headline-r');
    const main = document.getElementById('main');
    main.style = 'display: flex; flex-direction: column; align-items: center;';

    const marioImg = new Image();
    const caption = document.createElement('p');

    marioImg.src = Mario;

    headlineLeft.appendChild(marioImg);

    caption.setAttribute('class','caption');
    caption.innerHTML = "&quot;Here you can find our best dishes. All cooked by our best Toad chefs. Mushroom Kingdom neighbours have voted this selection to offer to our friends in Planet Earth. I hope you enjoy the meals. Best regards!&quot;";
    headlineRight.appendChild(caption);

    main.appendChild(dishLoad('Coffee Latte',Coffee,'3,20 €'));
    main.appendChild(dishLoad('Mario Bacon Cheese Burger',Burger,'8,50 €'));
    main.appendChild(dishLoad('Bowser Meat with Star Rice',Meat,'10,90 €'));
    main.appendChild(dishLoad('Piranha Plant Caprese Salad',Caprese,'5,50 €'));
    main.appendChild(dishLoad('Question Block Tiramisu',Tiramisu,'4,90 €'));
    main.appendChild(dishLoad('Yoshis Snack Island',Yoshi,'6,20 €'));
}

function dishLoad(title,src,price) {
    const darkCanvas = document.createElement('div');
    darkCanvas.style = 'background-color: #000000DD; width: 600px; padding: 50px 0; margin-bottom: 50px;';

    const dishTitleDiv = document.createElement('div');
    const dishImgDiv = document.createElement('div');
    dishImgDiv.style = 'display: flex; justify-content: center;';
    const dishPriceDiv = document.createElement('div');

    const dishTitle = document.createElement('h2');
    dishTitle.innerHTML = title;
    dishTitle.style = 'color: #FFFFFF; font-size: 24px; text-align: center;';
    const dishImg = new Image();
    dishImg.src = src;
    dishImg.style = 'margin: 20px auto;';
    const dishPrice = document.createElement('p');
    dishPrice.innerHTML = price;
    dishPrice.style = 'text-align: center; color: #FFFFFF; font-size: 24px;';

    dishTitleDiv.appendChild(dishTitle);
    dishImgDiv.appendChild(dishImg);
    dishPriceDiv.appendChild(dishPrice);

    darkCanvas.appendChild(dishTitleDiv);
    darkCanvas.appendChild(dishImgDiv);
    darkCanvas.appendChild(dishPriceDiv);

    return darkCanvas;
}