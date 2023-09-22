import homePage from './Modules/home.js';
import menuPage from './Modules/menu.js';
import contactPage from './Modules/contact.js';
import './styles.css';

homePage();

const content = document.querySelector('#content');

content.addEventListener('click', function(event) {
    if (event.target.id === 'home') {
        clearPage();
        homePage();
    } else if (event.target.id === 'menu') {
        menuPage();
    } else if (event.target.id === 'contact') {
        contactPage();
    }
});

function clearPage() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}