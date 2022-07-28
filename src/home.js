export default function homeLoad() {
    const headline = document.getElementById('headline');
    const caption = document.createElement('p');

    caption.setAttribute('class','caption');
    caption.innerHTML = "Come on and test our Mushroom Kingdom incredible pizzas. We cook all of them with half love and half magic. Once you taste one of them, you fall in love with it. Peach Princess at the recipes, Mario and Luigi Brothers at the management and Toad Co. at the tools. What are you waiting for? I'm watching your stomach roars!!! :-)";
    headline.appendChild(caption);
}