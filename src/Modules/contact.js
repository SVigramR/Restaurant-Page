import { createPassage, createheading } from "./Submodules/text.js";
import deleteMainContent from "./Submodules/delete.js";

function contactPage() {
    deleteMainContent();
    const main = document.querySelector('main')
    const passageOne = createPassage('passage-1', "Thank you for considering Spicy Dosa for your culinary adventure in South Indian cuisine. We're delighted to be a part of your gastronomic journey. Feel free to reach out to us with any inquiries or to plan your visit. Here's how you can get in touch:")
    main.appendChild(passageOne)

    const headingOne = createheading('heading-1', 'Address:')
    main.appendChild(headingOne)
    const passageTwo = createPassage('passage-2', "Spicy Dosa Restaurant")
    passageTwo.innerHTML += "<br>[Insert Address Here]"
    passageTwo.innerHTML += "<br>Chennai, India [Insert ZIP Code]"
    main.appendChild(passageTwo)

    const headingTwo = createheading('heading-2', 'Phone:')
    main.appendChild(headingTwo)
    const passageThree = createPassage('passage-3', "Customer Service: +91-XXXXXXXXXX")
    passageThree.innerHTML += "<br>Reservation: +91-XXXXXXXXXX";
    main.appendChild(passageThree)
    
    const headingThree = createheading('heading-3', 'Email:')
    main.appendChild(headingThree)
    const passageFour = createPassage('passage-4', 'General Inquiries: info@spicydosa.com')
    passageFour.innerHTML += '<br>Reservations: reservations@spicydosa.com'
    main.appendChild(passageFour)

    const headingFour = createheading('heading-4', 'Connect with Us Online:')
    main.appendChild(headingFour)
    const passageFive = createPassage('passage-5', 'Website: www.spicydosa.com')
    passageFive.innerHTML += "<br>Facebook: www.facebook.com/SpicyDosa"
    passageFive.innerHTML += "<br>Instagram: www.instagram.com/SpicyDosa"
    passageFive.innerHTML += "<br>Twitter: www.twitter.com/SpicyDosa"
    main.appendChild(passageFive)

    const headingFive = createheading('heading-5', 'Operating Hours:')
    main.appendChild(headingFive)
    const passageSix = createPassage('passage-6', 'Monday - Sunday: 7:00 AM - 10:00 PM')
    main.appendChild(passageSix)

    const headingSix = createheading('heading-6', 'Your Feedback Matters:')
    main.appendChild(headingSix)
    const passageSeven = createPassage('passage-7', "At Spicy Dosa, we value your feedback and strive to provide the best dining experience. Please don't hesitate to share your thoughts with us. Your comments and suggestions help us continually enhance our offerings and service.")
    passageSeven.innerHTML += "<br>We look forward to welcoming you to Spicy Dosa, where every dosa tells a story, and every visit is a culinary journey. Join us, and let's create delicious memories together!"
    main.appendChild(passageSeven)

    const headingSeven = createheading('heading-7', 'Spicy Dosa - Where Tradition and Innovation Meet on Your Plate')
    main.appendChild(headingSeven)
}

export default contactPage;