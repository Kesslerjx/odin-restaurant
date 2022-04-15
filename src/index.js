//Importing CSS
import './style.css';

//Importing module functions
import {homePage} from './home-page';
import {contactPage} from './contact-page';
import {menuPage} from './menu-page';
import {header} from './header';

//Get content div
let content = document.getElementById('content');

//Add header element
content.append(header());