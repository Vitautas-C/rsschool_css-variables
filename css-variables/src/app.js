import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');


const newPicture = document.querySelector(".photo-editor__button-clear");
const popup = document.querySelector(".modal");
const applyPopupButton = popup.querySelector(".modal__button");
const closePopupButton = popup.querySelector(".modal__button-close");

const photoEditorCardPic = document.querySelector(".photo-editor__card-pic");

let userFileName;

const opening = () => {
    popup.classList.add("block");
};

const canceling = () => {
    popup.classList.remove("block");
};

const addPicture = () => {
    popup.classList.remove("block");

    userFileName = document.querySelector("#user-picture").value;
    if (userFileName) {
        photoEditorCardPic.src = userFileName;
    } else {
        photoEditorCardPic.src = "img\\demo-version.jpg";
    }
    document.querySelector("#user-picture").value = "";
};

const pressEnter = (evt) => {
    if (evt.keyCode === 27) {
        popup.classList.remove("block");
    };
};

newPicture.addEventListener("click", opening);
closePopupButton.addEventListener("click", canceling);
applyPopupButton.addEventListener("click", addPicture);
document.addEventListener("keydown", pressEnter);

const inputs = document.querySelectorAll(".photo-editor__controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('oninput', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));