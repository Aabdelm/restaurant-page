import generateHome from "./home.js";
import generateAbout from "./about.js"
import initialMenuLoad from "./initialLoad.js"
import menucontroller from "./menucontroller.js";

const resetClicks = () =>{
    const active = document.querySelector('.active');
    if(active !== null ) active.classList.remove('active');
}
export default function(){
    const content = document.getElementById('content');

    const heroBg = document.createElement('div');
    heroBg.classList.add('hero-bg');

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');
    // Code for header
    //Note that this will be merged into the main content later
    const head = document.createElement('div');
    head.classList.add('head');
    
    const logo = document.createElement('a');
    logo.href = '#home';
    logo.classList.add('logo');
    logo.textContent = 'enchanté';
    head.appendChild(logo);
    logo.addEventListener('click', ()=> {
        resetClicks();
        generateHome();
    });
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    
    const ul = document.createElement('ul');
    
    // Create li contents
    const aboutLi = document.createElement('li');
    const menuLi = document.createElement('li');
    const contactLi = document.createElement('li');
    
    const aboutHref = document.createElement('a');
    const menuHref = document.createElement('a');
    const contactHref = document.createElement('a');
    
    // Links
    aboutHref.href = '#about';
    menuHref.href = '#menu';
    contactHref.href = '#contact';
    
    // Text Content
    aboutHref.textContent = 'About';
    menuHref.textContent = 'Menu';
    contactHref.textContent = 'Contact';
    
    aboutHref.addEventListener('click', ()=>{
        resetClicks();
        aboutHref.classList.add('active');
        generateAbout();
    });
    menuHref.addEventListener('click', ()=>{
        resetClicks();
        menuHref.classList.add('active');
        initialMenuLoad();
        menucontroller();
    });
    contactHref.addEventListener('click', ()=>{
        resetClicks();
        contactHref.classList.add('active');
    });

    // Append content to li
    aboutLi.appendChild(aboutHref);
    menuLi.appendChild(menuHref);
    contactLi.appendChild(contactHref);
    
    // Append individual li to ul
    ul.appendChild(aboutLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);
    
    // append ul to nav
    navbar.appendChild(ul);
    
    //append navigation bar
    head.appendChild(navbar);
    
    heroText.appendChild(head);
    heroBg.appendChild(heroText);
    content.appendChild(heroBg);
        
}