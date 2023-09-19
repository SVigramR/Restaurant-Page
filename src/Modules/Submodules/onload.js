import homePage from "../home";

function createTitleAndNav(id, text) {
    const title = document.createElement('header');
    title.setAttribute('id', id);
    const logoText = document.createElement('h1')
    logoText.textContent = text;
    title.appendChild(logoText);

    const nav = document.createElement('nav')
    nav.setAttribute('id', "nav");
    const homeBtn = createBtn('home', 'Home')
    const menuBtn = createBtn('menu', 'Menu')
    const contactBtn = createBtn('contact', 'Contact')
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    title.appendChild(nav)

    return title
}

function createBtn(id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = text;
    return button
}


function header() {
    const content = document.querySelector('#content')

    const titleContent = createTitleAndNav('header', "Spicy Dosa");
    content.appendChild(titleContent)
}

function createfooter(id, text) {
    const footerContent = document.createElement('footer')
    footerContent.setAttribute('id',id)
    const footerText = document.createElement('h3')
    footerText.textContent = text
    footerContent.appendChild(footerText)
    return footerContent
}

function footer() {
    const content = document.querySelector('#content')

    const newFooter = createfooter('footer', 'Made by @SVigramR')
    content.appendChild(newFooter)
}

export {header, footer}