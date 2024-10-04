document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('Hai selezionato: ' + item.querySelector('h3').innerText);
        });
    });
});
