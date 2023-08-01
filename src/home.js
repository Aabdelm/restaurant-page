export default function(){
    const content = document.getElementById('content');

    const heroBg = document.createElement('div');
    heroBg.className = 'hero-bg';
    
    const heroText = document.createElement('div');
    heroText.className = 'hero-text';
    
    const head = document.createElement('div');
    head.className = 'head';
    
    const logo = document.createElement('a');
    logo.setAttribute('href','');
    logo.className = 'logo';
    logo.textContent = 'enchanté';
    
    head.appendChild(logo);
    
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    
    const ul = document.createElement('ul');
    
    const aboutLi = document.createElement('li');
    const contactLi = document.createElement('li');
    const menuLi = document.createElement('li');
    
    const aboutHref = document.createElement('a');
    const menuHref = document.createElement('a');
    const contactHref = document.createElement('a');
    
    aboutHref.href = '#about';
    menuHref.href = '#menu';
    contactHref.href = '#contact';
    
    aboutHref.textContent = 'About';
    menuHref.textContent = 'Menu';
    contactHref.textContent = 'Contact';
    
    aboutLi.appendChild(aboutHref);
    menuLi.appendChild(menuHref);
    contactLi.appendChild(contactHref);
    
    ul.appendChild(aboutLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);
    
    navbar.appendChild(ul);
    
    head.appendChild(navbar);
    
    const footer = document.createElement('div');
    footer.className = 'footer';
    
    const greet = document.createElement('greet');
    greet.className = 'greet';
    
    const date = new Date();
    const hours = date.getHours();
    
    if(hours >= 5 && hours < 12){
        greet.textContent = 'Good Morning.';
    }else if(hours >= 12 && hours < 17){
        greet.textContent = 'Good Afternoon.';
    }else{
        greet.textContent = 'Good Evening.';
    }
    
    footer.appendChild(greet);
    
    const reservationButton = document.createElement('button');
    reservationButton.type = 'button';
    reservationButton.id = 'reservation-button';
    
    const reservationText = document.createElement('h1');
    reservationText.textContent = 'Reservations';
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width','25');
    svg.setAttribute('height','18');
    svg.setAttribute('viewBox','0 0 25 18');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill','none');
    svg.setAttribute('preserveAspectRatio', 'xMaxYMax meet');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d','M25 9L10 0.339746V17.6603L25 9ZM0 10.5H11.5V7.5H0V10.5Z');
    svg.appendChild(path);
    
    reservationButton.appendChild(reservationText);
    reservationButton.appendChild(svg);
    
    footer.appendChild(reservationButton);
    
    
    heroText.appendChild(head);
    heroText.appendChild(footer);
    
    heroBg.appendChild(heroText);
    content.appendChild(heroBg);
}