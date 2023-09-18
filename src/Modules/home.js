import {createPassage, createheading} from './Submodules/text.js'
import { header, footer } from './Submodules/onload.js';

function homePage() {
    header()
    const content = document.querySelector('#content')
    const main = document.createElement('main')

    const headOne = createheading('head-1', 'Welcome to Spicy Dosa - A Century of Dosa Excellence!')
    main.appendChild(headOne)
    const headTwo = createheading('head-2', 'Discover the Essence of South Indian Cuisine')
    main.appendChild(headTwo)
    const passageOne = createPassage('pass-1', 'At Spicy Dosa, we take pride in introducing you to the exquisite world of dosa, a beloved South Indian delicacy that has captured hearts and palates for generations. Our journey began a century ago, and today, we continue the tradition of serving the finest dosas, crafted with passion and heritage.')
    main.appendChild(passageOne)

    const headthree = createheading('head-3', 'A Culinary Marvel')
    main.appendChild(headthree)
    const passageTwo = createPassage('pass-2', 'Dosa, a thin savory pancake, is a marvel in South Indian cuisine. Our dosas are a true labor of love, prepared from a meticulously fermented batter of ground black lentils and rice. Each dosa embodies the perfect balance of flavors and textures, making every bite a delightful experience.')
    main.appendChild(passageTwo)

    const headFour = createheading('head-4', 'Innovation Amidst Tradition')
    main.appendChild(headFour)
    const passageThree = createPassage('pass-3', 'Creating a name out of this simple yet cherished dish is a continuous journey of creativity and dedication. At Spicy Dosa, we embrace both tradition and innovation. Our menu boasts a diverse range of dosas, from time-honored classics to our own signature creations, each with a unique twist that will tantalize your taste buds.')
    main.appendChild(passageThree)

    const headFive = createheading('head-5', 'A Legacy of Flavor')
    main.appendChild(headFive)
    const passageFour = createPassage('pass-4', 'Our roots trace back to Chennai, where a humble diner transformed into a sprawling restaurant. Throughout the years, we owe our success to the unwavering dedication of our predecessors. They ensured that our doors remained open during challenging times, preserving the authenticity and quality of our food.')
    main.appendChild(passageFour)

    const headSix = createheading('head-6', '100 Years of Culinary Heritage')
    main.appendChild(headSix)
    const passageFive = createPassage('pass-5', "Today, it's our honor to continue this rich legacy. Spicy Dosa is more than a restaurant; it's a testament to a century of dedication to serving exceptional dosas. We cherish our heritage and are determined to carry it forward for generations to come.")
    main.appendChild(passageFive)

    const headSeven = createheading('head-7', 'Your Journey Begins Here')
    main.appendChild(headSeven)
    const passageSix = createPassage('pass-6', 'As we look to the future, our mission is clear: to successfully run the restaurant and expand our reach. We envision multiple chains and franchises across the globe, all proudly carrying the Spicy Dosa name.')
    main.appendChild(passageSix)

    const headEight = createheading('head-8', 'Visit Us and Be Transformed')
    main.appendChild(headEight)
    const passageSeven = createPassage('pass-7', "We invite you to embark on a gastronomic journey with us. Come and savor the magic of dosa at Spicy Dosa. We are confident that once you've experienced our dosas, you'll return time and again, becoming a part of our extended family.")
    main.appendChild(passageSeven)
    const passageEight = createPassage('pass-8', "Join us as we continue our legacy of flavor, innovation, and tradition. Spicy Dosa welcomes you with open arms and a plateful of mouthwatering dosas. Your adventure in South Indian cuisine awaits!")
    main.appendChild(passageEight)

    const headNine = createheading('head-9', 'Spicy Dosa - Where Every Dosa Tells a Story')
    main.appendChild(headNine)
    const headTen = createheading('head-10', 'Discover our menu, explore our flavors, and become a part of our legacy.')
    main.appendChild(headTen)

    content.appendChild(main)

    footer()
}

export default homePage;