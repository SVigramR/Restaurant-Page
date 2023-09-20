function createPassage(id, text) {
    const passage = document.createElement('p');
    passage.setAttribute('id', id);
    passage.textContent = text;
    return passage;
}

function createheading(id, text) {
    const heading = document.createElement('h2');
    heading.setAttribute('id', id);
    heading.textContent = text;
    return heading;
}

function createImage(id, source, alt) {
    const image = document.createElement('img');
    image.setAttribute('id', id);
    image.setAttribute('src', source);
    image.setAttribute('alt', alt);
    return image;
}

export {createPassage, createheading, createImage};