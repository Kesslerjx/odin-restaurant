const contactPage = () => {
    let div = document.createElement('div');
    div.id = "contact-content";

    div.append(callSection(), emailSection());

    return div;
};

//Creates call section
const callSection = () => {

    //Create elements
    let div    = document.createElement('div');
    let title  = document.createElement('p');
    let text   = document.createElement('p');
    let number = document.createElement('p');
    let hours  = document.createElement('p');

    //Create content
    title.textContent  = "Call";
    text.textContent   = "We'd love to hear from you! (not really)";
    number.textContent = "555-555-5555";
    hours.textContent  = "Tue - Sun | 8am - 9pm";

    //Add classes to elements
    div.classList.add('contact-section');
    title.classList.add('section-title');
    text.classList.add('section-text');

    //Add content to div
    div.append(title, text, number, hours);

    return div;

};

//Creates the email section
const emailSection = () => {
    //Create elements
    let div      = document.createElement('div');
    let title    = document.createElement('p');
    let text     = document.createElement('p');
    let form     = document.createElement('form');
    let name     = document.createElement('input');
    let email    = document.createElement('input');
    let emailMsg = document.createElement('textarea');
    let button   = document.createElement('input');

    //Set input types
    name.type  = 'text';
    email.type = 'email';
    button.type = 'submit';

    //Set names
    name.name = "user_name";
    email.name = "user_email";
    emailMsg.name = "user_message";

    //Add content
    title.textContent = 'Email';
    text.textContent  = `Shoot us an email so we can have them automatically moved to the junk folder! ${String.fromCodePoint(0x2764)}`;
    name.placeholder  = "Name";
    email.placeholder = "Email";
    emailMsg.placeholder = "Your message here";
    button.value = "Submit";

    //Add classes
    div.classList.add('contact-section');
    title.classList.add('section-title');
    form.classList.add('contact-form');
    button.classList.add('contact-button');
    name.classList.add('contact-field');
    email.classList.add('contact-field');

    //Add inputs to form
    form.append(name, email, emailMsg, button);

    //Add content to div
    div.append(title, text, form);

    //Set button listener
    button.addEventListener('click', function (event) {
        event.preventDefault(); //Stop it from submitting the form
    })

    return div;

};

export {contactPage};