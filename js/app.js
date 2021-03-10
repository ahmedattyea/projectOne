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
  const allSections = document.querySelectorAll('section');
  const unorderList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function createSectionFour(){
 let allcontainer = document.getElementById("adding-se");
  let addingSection = document.createElement("section");
  let addingH2 = document.createElement("h2");
  let addingDiv = document.createElement("div");
  let addingParag = document.createElement("p");
  addingSection.setAttribute("id", "section4");
  addingSection.setAttribute("data-nav", "Section 4");
  addingDiv.classList.add("landing__container");
  addingH2.innerHTML = "Section 4";
  addingParag.appendChild(
    document.createTextNode(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti."
    )
  );
    addingDiv.appendChild(addingH2);
    addingDiv.appendChild(addingParag);
    addingSection.appendChild(addingDiv);
    allcontainer.appendChild(addingSection);

}
function createNavBar() {
  // Add links
  for (i = 0; i < allSections.length; i++) {
    newList = document.createElement("li");
    newList.innerHTML =
      '<a href ="#" class="menu__link " data-section="' +
      allSections[i].getAttribute("id") +
      '">' +
      allSections[i].getAttribute("id") +
      "</a>";
    unorderList.appendChild(newList);
  }
}


createSectionFour();
createNavBar();

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
// function createListofSections() { // creating a function to add a sections name in nave bar
//   for(section of allSections ){ // making loop on all sections to bring the sections and making functions on it
//        let sectionName = section.getAttribute('data-nav'); // bring the sections name
//        let  link = section.getAttribute('id');// making a link and i use the id because the id is unique
//        listItem = document.createElement('li');
//        listItem.innerHTML =` <a class='menu__link' href='#${link}'>${sectionName}</a>`;
//        unorderList.appendChild(listItem);
//   }
// }
//
//
// createListofSections();
