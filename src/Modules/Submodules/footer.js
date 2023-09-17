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

export default footer;