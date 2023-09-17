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

export {createPassage, createheading};