
//Menu item factory function
const MenuItem = (imageSrc, imageCredit, imageCreditText, menuText) => {

    const getImage = () => imageSrc;
    const getImageCredit = () => imageCredit;
    const getCreditText = () => imageCreditText;
    const getText = () => menuText;

    return {getImage, getImageCredit, getCreditText, getText};
};

export {MenuItem};