import homePage from "../home";

function createTitle(id, text) {
    const title = document.createElement('header');
    title.setAttribute('id', id);
    const logoText = document.createElement('h1')
    logoText.textContent = text;
    title.appendChild(logoText);
    return title
}

function createBtn(id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = text;
    return button
}

function createNav(id) {
    const nav = document.createElement('nav')
    nav.setAttribute('id', id);

    const homeBtn = createBtn('home', 'Home')
    const menuBtn = createBtn('menu', 'Menu')
    const contactBtn = createBtn('contact', 'Contact')

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function header() {
    const content = document.querySelector('#content')

    const titleContent = createTitle('header', "Spicy Dosa");
    content.appendChild(titleContent)

    const navContent = createNav('nav')
    content.appendChild(navContent);
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