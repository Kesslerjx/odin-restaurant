import Breakfast from './breakfast.jpeg';
import Lunch from './lunch.jpeg';
import Dinner from './dinner.jpeg';

const menuPage = () => {

    let div = document.createElement('div');
    div.id = "menu-content";


    //Creating breakfast menu item
    let breakfastMenuItem = document.createElement('div');
    breakfastMenuItem.classList.add('menu-item');

    let breakfastDiv = document.createElement('div');
    breakfastDiv.classList.add('menu-image-div');

    let breakfast = document.createElement('img');
    breakfast.src = Breakfast;
    breakfast.classList.add('menu-image');

    let breakfastCredit = document.createElement('a');
    breakfastCredit.href = "https://www.pexels.com/@jjagtenberg/";
    breakfastCredit.target = "_blank";
    breakfastCredit.textContent = "@jjagtenberg";

    breakfastDiv.append(breakfast, breakfastCredit);

    let breakfastItemText = document.createElement('p');
    breakfastItemText.textContent = "The Good Breakast. Have you some toast with eggs on top with a side of beans and cheese. Wake yourself up with some delicious coffee. You can't get a better breakfast anywhere else."

    breakfastMenuItem.append(breakfastDiv, breakfastItemText);

    div.append(breakfastMenuItem);

    return div;
};

export {menuPage};