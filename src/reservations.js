export default function(){
    const heroBg = document.querySelector('.hero-bg');
    heroBg.removeAttribute('style');
    heroBg.style.background = '#000';
    
    const heroText = document.querySelector('.hero-text');
    heroText.removeChild(heroText.children[1]);
    
    const reservations = document.createElement('div');
    reservations.classList.add('reservations');
    
    const entrance = document.createElement('div');
    entrance.className = 'entrance';
    entrance.textContent  = 'Reception';
    reservations.appendChild(entrance);
    
    const text = document.createElement('div');
    text.textContent = 'Hover over each table for more.';
    text.classList.add('text');
    reservations.appendChild(text);
    
    Array.from(new Array(5)).forEach((dummyElement, index) =>{
        const table = document.createElement('div');
        table.className = 'table';
        table.setAttribute('tableId',index+1);
        table.setAttribute('status','reserved');
        reservations.appendChild(table);
    });
    
    heroText.appendChild(reservations);
    
    
}