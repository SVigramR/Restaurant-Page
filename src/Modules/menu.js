import { createImage, createPassage, createheading } from "./Submodules/text.js";
import deleteMainContent from "./Submodules/delete.js";
import traditionalDosa from "../Images/traditional-dosa.jpeg";
import masalaDosa from "../Images/masala-dosa.jpg";
import paneerDosa from "../Images/paneer-dosa.jpeg";
import spinachCheeseDosa from "../Images/spinach-cheese-dosa.jpeg";
import chilliCheeseDosa from "../Images/chilli-cheese-dosa.jpeg";
import gheeRoastDosa from "../Images/ghee-roast-dosa.jpeg";
import chocolateDosa from "../Images/chocolate-dosa.jpeg";
import chefSpecialDosa from "../Images/chefs-special-dosa.jpeg";

function menuPage() {
    deleteMainContent();
    const main = document.querySelector('main')

    const paraZero = createPassage('para-0', "Welcome to the heart of our culinary journey. At Spicy Dosa, we bring you an array of dosa creations that showcase the essence of South Indian cuisine, all meticulously prepared with the finest ingredients and a touch of tradition. Explore our menu and get ready to embark on a delightful gastronomic adventure.")
    main.appendChild(paraZero)

    const headOne = createheading('header-1', "1. Traditional Dosa")
    main.appendChild(headOne)
    const imageOne = createImage('image-1', traditionalDosa, 'Traditional Dosa')
    main.appendChild(imageOne)
    const paraOne = createPassage('para-1', "Our homage to the classic dosa. Thin, crispy, and served with a variety of chutneys and sambar.")
    main.appendChild(paraOne)

    const headTwo = createheading('header-2', "2. Masala Dosa")
    main.appendChild(headTwo)
    const imageTwo = createImage('image-2', masalaDosa, "Masala Dosa")
    main.appendChild(imageTwo)
    const paraTwo = createPassage('para-2', "A beloved favorite, featuring a delicious spiced potato filling wrapped in a golden dosa.")
    main.appendChild(paraTwo)

    const headThree = createheading('header-3', "3. Paneer Dosa")
    main.appendChild(headThree)
    const imageThree = createImage('image-3', paneerDosa, "Paneer Dosa")
    main.appendChild(imageThree)
    const paraThree = createPassage('para-3', "Indulge in the creamy goodness of paneer, blended with aromatic spices, and encased in a dosa.")
    main.appendChild(paraThree)

    const headFour = createheading('header-4', "4. Spinach and Cheese Dosa")
    main.appendChild(headFour)
    const imageFour = createImage('image-4', spinachCheeseDosa, "Spinach and Cheese Dosa" )
    main.appendChild(imageFour)
    const paraFour = createPassage('para-4', "A fusion of flavors that combines the healthiness of spinach with the richness of cheese.")
    main.appendChild(paraFour)

    const headFive = createheading('header-5', "5. Chilli Cheese Dosa")
    main.appendChild(headFive)
    const imageFive = createImage('image-5', chilliCheeseDosa, "Chilli Cheese Dosa")
    main.appendChild(imageFive)
    const paraFive = createPassage('para-5', "For the spice lovers! A zesty combination of green chillies and melted cheese.")
    main.appendChild(paraFive)

    const headSix = createheading('header-6', "6. Ghee Roast Dosa")
    main.appendChild(headSix)
    const imageSix = createImage('image-6', gheeRoastDosa, "Ghee Roast Dosa")
    main.appendChild(imageSix)
    const paraSix = createPassage('para-6', "Experience the heavenly aroma and rich taste of ghee in every bite.")
    main.appendChild(paraSix)

    const headSeven = createheading('header-7', "7. Chocolate Dosa")
    main.appendChild(headSeven)
    const imageSeven = createImage('image-7', chocolateDosa, "Chocolate Dosa")
    main.appendChild(imageSeven)
    const paraSeven = createPassage('para-7', "A sweet twist on tradition, this dosa is a dessert lover's dream.")
    main.appendChild(paraSeven)

    const headEight = createheading('header-8', "8. Special Chef's Dosa")
    main.appendChild(headEight)
    const imageEight = createImage('image-8', chefSpecialDosa, "Special Chef's Dosa")
    main.appendChild(imageEight)
    const paraEight = createPassage('para-8', "Our chef's special creation that changes regularly. Ask your server for today's surprise.")
    main.appendChild(paraEight)

    const headNine = createheading('header-9', "Accompaniments:")
    main.appendChild(headNine)
    const paraNine = createPassage('para-9', "Coconut Chutney")
    paraNine.innerHTML += "<br>Tomato Chutney"
    paraNine.innerHTML += "<br>Mint Chutney"
    paraNine.innerHTML += "<br>Sambar"
    main.appendChild(paraNine)

    const headTen = createheading('header-10', "Beverages:")
    main.appendChild(headTen)
    const paraTen = createPassage('para-10', "Fresh Fruit Juices")
    paraTen.innerHTML += "<br>South Indian Filter Coffee"
    paraTen.innerHTML += "<br>Masala Chai"
    main.appendChild(paraTen)

    const headEleven = createheading('header-11', "Visit Spicy Dosa Today!")
    main.appendChild(headEleven)
    const paraEleven = createPassage('para-11', "Our menu is designed to cater to diverse tastes, ensuring there's something for everyone. Whether you're a dosa aficionado or trying it for the first time, we guarantee an unforgettable dining experience.")
    paraEleven.innerHTML += "<br>Join us at Spicy Dosa, where every dosa tells a story of flavor, innovation, and tradition. We look forward to serving you and adding a new chapter to your love for dosas."
    main.appendChild(paraEleven)

    const headTwelve = createheading('header-12', "Spicy Dosa - Where Tradition Meets Innovation on Your Plate")
    main.appendChild(headTwelve)
}

export default menuPage;