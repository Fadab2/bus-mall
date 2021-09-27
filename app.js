


let allImages = [];
let totalclicks = 0;

function Catalog(url, name) {
    this.name = name;
    this.url = `assets/images/${url}`;
    this.timeShown = 0;
    this.clicks = 0;
    allImages.push(this);
}

let productImagesEl = document.getElementById("all-images");
let leftImageEl = document.getElementById("left-image");
let centerImageEl = document.getElementById("center-image");
let rightImageEl = document.getElementById("right-image");

// render function
function renderCatalog() {
    let leftImageIndex = Math.floor(Math.random() * allImages.length);
    let centerImageIndex = Math.floor(Math.random() * allImages.length);
    let rightImageIndex = Math.floor(Math.random() * allImages.length);
}