import Breakfast from './breakfast.jpeg';
import Lunch from './lunch.jpeg';
import Dinner from './dinner.jpeg';
import {MenuItem} from './menu-item';

const menuPage = () => {

    let div = document.createElement('div');
    div.id = "menu-content";

    //Array of the items
    let items = [
        MenuItem(Breakfast, "https://www.pexels.com/@jjagtenberg/", "@jjagtenberg", 
        "The Good Breakast. Have you some toast with eggs on top with a side of beans and cheese. Wake yourself up with some delicious coffee. You can't get a better breakfast anywhere else."),
        MenuItem(Lunch, "https://www.pexels.com/@jonathanborba/", "@jonathanborba", 
        "The Good Lunch. Wow, just look at that burger and fries. It looks delicious. I know you want to taste it. Maybe have a beer on the side. Guranteed best burger you'll ever have."),
        MenuItem(Dinner, "https://www.pexels.com/@creative-vix/", "@creative-vix", 
        "The Good Dinner. How about a fancy dinner? You could have some wine with whatever is in that bowl. Can you tell what it is, because I can't. Regardless, it looks kind of fancy.")
    ];

    //Loop through items and display on screen
    items.forEach(item => {
        //Create menu item div
        let menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        //Create menu image div
        let menuItemImageDiv = document.createElement('div');
        menuItemImageDiv.classList.add('menu-image-div');

        //Create and add img
        let image = document.createElement('img');
        image.src = item.getImage();
        image.classList.add('menu-image');

        //Create menu image credit text
        let imageCredit = document.createElement('a');
        imageCredit.href = item.getImageCredit();
        imageCredit.target = "_blank";
        imageCredit.textContent = item.getCreditText();

        //Add image and credit to image div
        menuItemImageDiv.append(image, imageCredit);

        //Create menu item text
        let menuItemText = document.createElement('p');
        menuItemText.textContent = item.getText();

        //Add image and text to div
        menuItemDiv.append(menuItemImageDiv, menuItemText);

        //Add menu item to menu content div
        div.append(menuItemDiv);
    });

    return div;
};

export {menuPage};