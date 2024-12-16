const addTextForm = document.querySelector('.input');
const addImgContainer = document.querySelector('.imgs_container');

addTextForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const imgElem = document.createElement('div');
    imgElem.classList.add('img-element');  
    const imgUrl = e.target.elements.text.value;  
    imgElem.style.backgroundImage = `url(${imgUrl})`; 
    addImgContainer.append(imgElem);
    e.target.reset();  
});