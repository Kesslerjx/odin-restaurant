//Importing CSS
import './style.css';

//Importing module functions
import {homePage} from './home-page';
import {contactPage} from './contact-page';
import {menuPage} from './menu-page';
import {header} from './header';

const TAB = {
    HOME: 'home',
    MENU: 'menu',
    CONTACT: 'contact'
}

//Set tab to home to start
let currentTab = TAB.HOME;

//Get required HTML elements
let body    = document.querySelector('body');
let content = document.getElementById('content');

//Add header element to top of the body
body.prepend(header());

//Add event listeners to buttons in header
setEventListeners();

//Show page based on current tab
switchTabs();

//FUNCTIONS

function setEventListeners() {
    let homeBtn = document.getElementById('home-button');
    let menuBtn = document.getElementById('menu-button');
    let contactBtn = document.getElementById('contact-button');

    homeBtn.addEventListener('click', setTab);
    menuBtn.addEventListener('click', setTab);
    contactBtn.addEventListener('click', setTab);
}

//Sets tab based on what button is pressed
function setTab(event) {

    if(event.target.id === 'home-button') {
        currentTab = TAB.HOME;
    } else
    if(event.target.id === 'menu-button') {
        currentTab = TAB.MENU;
    } else {
        currentTab = TAB.CONTACT;
    }

    switchTabs();
}

//Function for handling tab button pressing
function switchTabs() {
    //Remove what's in the content div
    clearContent();
    
    switch (currentTab) {
        case TAB.MENU:
            content.appendChild(menuPage());
            break;
        case TAB.CONTACT:
            content.appendChild(contactPage());
            break;
        default:
            content.appendChild(homePage());
            
    }
}

//Clears out the content div
function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}