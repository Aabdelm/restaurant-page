export default function(){
    const heroText = document.querySelector('.hero-text');
    if(heroText.children[1] === 'contact') return ;
    heroText.removeChild(heroText.children[1]);
    
    
    // Reset the background
    const heroBg = document.querySelector('.hero-bg');
    heroBg.className = 'hero-bg';
    heroBg.removeAttribute('style');
    heroBg.style.background = 'black';
    
    const contact = document.createElement('div');
    contact.className = 'contact';
    
    Array.from(new Array(5)).forEach(() => contact.appendChild(document.createElement('p')));
    
    const contactChildren = [...contact.children];
    
    contactChildren[0].textContent = `We value your inquiries, feedback, and the opportunity to connect. Whether you're seeking to make a reservation, share your dining experience, or simply wish to learn more about enchanté, we're here to assist you. Please feel free to reach out to us through the channels below:`;
    contactChildren[1].textContent = 'Address: 233 Buttonwood St.';
    contactChildren[2].textContent = 'New York, NY 10033';
    contactChildren[3].textContent =  'Email: hello@enchante.com';
    contactChildren[4].textContent = 'Phone: (193)368-2125'
    
    heroText.appendChild(contact);
    
    
    
    
}