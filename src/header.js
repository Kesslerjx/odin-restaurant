
//Returns a header that will be used to hold the three tab buttons
const header = () => {

    //Create header element
    let headerElement = document.createElement('header');

    //Create p element for header title
    let p = document.createElement('p');
    p.classList.add('header-title');
    p.textContent = "The Good Stuff";

    //Create div for buttons
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('tab-buttons');

    //Create buttons
    let homeBtn = document.createElement('button');
    let menuBtn = document.createElement('button');
    let contactBtn = document.createElement('button');

    homeBtn.innerHTML = "Home";
    homeBtn.id = "home-button";
    homeBtn.classList.add('tab-button');

    menuBtn.innerHTML = "Menu";
    menuBtn.id = "menu-button";
    menuBtn.classList.add('tab-button');

    contactBtn.innerHTML = "Contact";
    contactBtn.id = "contact-button";
    contactBtn.classList.add('tab-button');

    //Add buttons to div
    buttonsDiv.append(homeBtn, menuBtn, contactBtn);

    //Add p and buttons to header
    headerElement.append(p, buttonsDiv);

    return headerElement;
}

export {header};