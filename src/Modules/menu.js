import { createImage, createPassage, createheading } from "./Submodules/text.js";
import deleteMainContent from "./Submodules/delete.js";
import masalaDosa from "./Submodules/masala-dosa.jpg"

function menuPage() {
    deleteMainContent();
    const main = document.querySelector('main')
    
    const imageOne = createImage('image-1', masalaDosa, 'Traditional Dosa')
    main.appendChild(imageOne)
}

export default menuPage;