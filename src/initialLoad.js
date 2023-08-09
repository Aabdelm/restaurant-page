import arrow from '../src/menuarrow.svg'
import "./style.scss"
export default function (){
    const heroText = document.querySelector('.hero-text');
    heroText.removeChild(heroText.children[1]);

    const heroBg = document.querySelector('.hero-bg');
    heroBg.classList.add('menu-mode');
    
    const menu = document.createElement('div');
    menu.className = 'menu';
    
    
    
    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');
    menu.appendChild(menuInfo);
    
    const rightArrow= document.createElement('img');
    rightArrow.src = arrow;
    rightArrow.id = 'arrow-right;'
    menuInfo.appendChild(rightArrow);
    
    const leftArrow = document.createElement('img');
    leftArrow.src = arrow;
    leftArrow.id = 'arrow-left';
    menuInfo.appendChild(leftArrow);
    
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    
    const courseText = document.createElement('h1');
    courseText.className = 'course';
    courseText.textContent = 'Breakfast';
    placeholder.appendChild(courseText);
    
    const bottomArrow = document.createElement('img');
    bottomArrow.src = arrow;
    bottomArrow.id = 'arrow-bottom';
    placeholder.appendChild(bottomArrow);
    
    menuInfo.appendChild(placeholder);
    menuInfo.appendChild(rightArrow);
    
    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';
    
    menu.appendChild(menuItems);
    
    const menuHeader = document.createElement('div');
    menuHeader.textContent = 'Menu';
    menuHeader.classList.add('menu-header');
    
    menuItems.appendChild(menuHeader);
    
    const initialBreakfast = [
        {
            item: 'Truffle Eggs Benedict',
            price: '$22',
            description: 'Poached eggs on toasted artisanal brioche, topped with hollandaise infused with black truffle essence.',
    
        },
        {
            item: 'Croissant Croque-Monsieur',
            price: '$16',
            description: ' A flaky butter croissant layered with thinly sliced prosciutto, Gruyère cheese, and béchamel sauce, toasted to golden perfection.',
    
        },
        {
            item: 'Champagne-infused Fruit Parfait',
            price: '$18',
            description: 'A delicate combination of seasonal fruits, organic Greek yogurt, and toasted almond granola, drizzled with champagne reduction.',
    
        },
        {
            item: 'Smoked Salmon Lox Platter',
            price: '$24',
            description: 'House-cured and smoked salmon served with an array of accompaniments, including capers, red onion, dill cream cheese, and fresh bagels.',
    
        },{
            item: 'French press coffee',
            price: '$7',
            description: 'Robust, full-bodied brew bursting with rich, flavorful notes.'
        }
    ];
    
    initialBreakfast.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
    
        menuItems.appendChild(menuItem);
    
        const header = document.createElement('header');
        menuItem.appendChild(header);
    
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.textContent = item.item;
        header.appendChild(itemDiv);
        
    
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = item.price;
        header.appendChild(price);
    
        const description = document.createElement('div');
        description.textContent = item.description;
        menuItem.appendChild(description);
    
    });
    heroText.appendChild(menu);
    
    
}