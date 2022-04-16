import ExampleImage from './burger.jpeg';

const homePage = () => {

    let div = document.createElement('div');
    div.id = "home-content";

    //Create subheadline
    let subHeadline = document.createElement('p');
    subHeadline.textContent = "You know when you're hungry and think \"Man I could use some good food right now.\" This restaurant is where you can get good food. That's why it's called The Good Stuff. You want the good stuff, we have the good stuff, come get the good stuff.";
    subHeadline.classList.add('sub-headline');

    //Create an example image with div and credit
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('image-div');

    let exampleImage = new Image();
    exampleImage.src = ExampleImage;

    let imageCredit = document.createElement('a');
    imageCredit.href = "https://www.pexels.com/@jonathanborba/";
    imageCredit.target = "_blank";
    imageCredit.textContent = "@jonathanborba";

    imageDiv.append(exampleImage, imageCredit);

    //Add elements to home div
    div.append(subHeadline, imageDiv);

    return div;
};

export {homePage};