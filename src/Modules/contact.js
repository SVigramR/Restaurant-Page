import { createPassage, createheading } from "./Submodules/text.js";
import deleteMainContent from "./Submodules/delete.js";

function contactPage() {
    deleteMainContent();
    const main = document.querySelector('main')

    const passageOne = createPassage('passage-1', "Thank you for considering Spicy Dosa for your culinary adventure in South Indian cuisine. We're delighted to be a part of your gastronomic journey. Feel free to reach out to us with any inquiries or to plan your visit. Here's how you can get in touch:")
    main.appendChild(passageOne)
}

export default contactPage;