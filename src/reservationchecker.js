export default function(){
    const tables = document.querySelectorAll('.table');
    const text = document.querySelector('.text');
    tables.forEach(table => {
        const status = table.getAttribute('status');
        const tableId = parseInt(table.getAttribute('tableId'));
        table.addEventListener(`mouseenter`, ()=>{
            if(status === 'reserved') text.textContent = `Table ${tableId} is reserved`
        })
        table.addEventListener(`mouseleave`, ()=>{
            text.textContent = 'Hover over each table for more.';
        })
    });
}