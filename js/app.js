/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables

 *
*/
let allSections; //adding a global variable to know the name of section
let unorderList; //adding a global variable to make link to the  section
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//create a createSectionFour function to create section 4 using js
function createSectionFour() {
    let allcontainer = document.getElementById("adding-se"); // get the main container to adding the section inside it
    let addingSection = document.createElement("section"); //create a new section
    let addingH2 = document.createElement("h2"); //create a new h2 for the section
    let addingDiv = document.createElement("div"); //create a new div
    let addingParag = document.createElement("p"); // create a new paragraph
    addingSection.setAttribute("id", "section4"); // set a new attribute to the new section
    addingSection.setAttribute("data-nav", "Section 4"); //set a new attribute to new section
    addingDiv.classList.add("landing__container"); // adding a new class to the div
    addingH2.innerHTML = "Section 4"; // write section 4 word inside the h2
    addingParag.appendChild( // append and put the content of section inside it
        document.createTextNode(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti."
        )
    );
    addingDiv.appendChild(addingH2); // adding h2 to the div
    addingDiv.appendChild(addingParag); // adding paragraph inside the div also
    addingSection.appendChild(addingDiv); //adding the div inside the section
    allcontainer.appendChild(addingSection); //adding the section inside the main container

};
createSectionFour(); // call the function
allSections = document.querySelectorAll('section'); // this a variable that call all section inside the page
unorderList = document.getElementById('navbar__list'); // this a varibale that call the  elements have a navbar__list id
// the following function create a new nav bar and puth the name of all sections inside it and when you press on any section then they scroll to specific section
function createListofSections() { // create a new function called createListofSections that create a navbar with all sections that included in the page
    var count = 0;
    for (section of allSections) {
        count++;
        link = section.getAttribute('id');
        sectionName = section.getAttribute('data-nav');
        newList = document.createElement("li");
        newList.innerHTML = ` <a class='menu__link' id='${count}' data-link='${link}'>${sectionName}</a>`; // put the link and name of section oinside the nav bar
        unorderList.appendChild(newList); //put the li inside the ul
    }
    var nav = document.getElementsByClassName("menu__link");
    for (na of nav) {
        na.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById(this.getAttribute("data-link")).scrollIntoView();
        });
    }

}

createListofSections(); // call the  createListofSections

function scroll(section) { // making a new  function to know the position of section
    return Math.floor(section.getBoundingClientRect().top);
};

function deleteActive(section) { // delete the hover from last section
    section.classList.remove('your-active-class');
    document.getElementById(section.getAttribute('id').substr(7)).classList.remove('custom');
};

function putActive(focus, section) { // adding a active to specific section
    if (focus) {
        section.classList.add('your-active-class');
        document.getElementById(section.getAttribute('id').substr(7)).classList.add('custom');
    };
};

function hoverTheSection() { // make a function to know what is the section when scrolling
    for (section of allSections) {
        let hoverElemnet = scroll(section);
        inviewport = () => hoverElemnet < 150 && hoverElemnet >= -150;
        deleteActive(section);
        putActive(inviewport(), section);
    };
};
window.addEventListener('scroll', hoverTheSection);


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
