
const footer = () => {
    let footer = document.createElement('footer');
    let link = document.createElement('a');
    link.href = "https://github.com/Kesslerjx";
    link.target = "_blank";
    link.textContent = "@kesslerjx";
    footer.appendChild(link);

    return footer;
};

export {footer};