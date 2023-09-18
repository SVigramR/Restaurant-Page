function deleteMainContent() {
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.firstChild);
} 
}

export default deleteMainContent;