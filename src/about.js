export default function(){
    const heroText = document.querySelector('.hero-text');
    const heroBg = document.querySelector('.hero-bg');
    
    // If the second child (that isn't the navbar) is the about body, then we dont
    // remove anything
    if(heroText.children[1].className === 'body') return ;
    heroBg.style.background = '#000';
    heroBg.removeAttribute('style');
    
    heroText.removeChild(heroText.children[1]);
    const body = document.createElement('div');
    body.classList.add('body');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'enchanté';
    body.appendChild(h1);
    
    const h2 = document.createElement('h2');
    h2.textContent = 'ahn-shahn-TAY/ Delighted';
    body.appendChild(h2);
    
    const p1 = document.createElement('p');
    p1.textContent = 'At enchanté, we invite you to embark on a journey that transcends the ordinary and embraces the extraordinary.';
    body.appendChild(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = 'Since our inception in 2015, we have taken pride in crafting a dining sanctuary that unites the artistry of award-winning gastronomy with the comfort of casual indulgence.';
    body.appendChild(p2);
    
    heroText.appendChild(body);
    heroBg.classList.add('about');
    
}