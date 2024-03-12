const urlCategorie = "http://localhost:5678/api/categories";
const urlObjet = "http://localhost:5678/api/works";

function fetchObjets() {
    fetch(urlObjet)
        .then(reponse => reponse.json())
        .then(data => {
            buttonAll(data)
            displayAll(data)
        });
}

function fetchCategories() {
    fetch(urlCategorie)
        .then(reponse => reponse.json())
        .then(data => {
            displayCategories(data)
        });
};

const parent = document.querySelector('.categories')

let htmlCloner = '';


function buttonAll(image) {

    const buttonAppear = document.createElement('button');
    buttonAppear.innerText = ('Tout');

    parent.prepend(buttonAppear)

    buttonAppear.addEventListener("click", function () {
        const imageContainers = document.querySelector(".gallery")
        imageContainers.innerHTML = '';
        displayAll(image);
    })
}

function displayAll(donnes) {

    const gallery = document.querySelector('.gallery')

    for (let i = 0; i < donnes.length; i++) {
        const figure = document.createElement('figure')
        figure.className = (`${donnes[i].category.name}`)
        gallery.appendChild(figure)

        const image = document.createElement('img')
        image.src = (`${donnes[i].imageUrl}`);
        image.alt = (`${donnes[i].title}`);

        const figcaption = document.createElement('figcaption')
        figcaption.innerHTML = (`${donnes[i].title}`);

        figure.appendChild(image)
        figure.appendChild(figcaption)
    }

    const contenuGallery = document.querySelector('.gallery')
    htmlCloner = contenuGallery.cloneNode(true)
    console.log(htmlCloner)

}

function stockAll() {
    const imageContainers = document.querySelector(".gallery")
    imageContainers.innerHTML = '';
    const galeryAll = htmlCloner.cloneNode(true);
    imageContainers.appendChild(galeryAll)
}

function displayCategories(project) {

    for (let i = 0; i < project.length; i++) {
        const categoryButton = document.createElement('button')
        categoryButton.innerText = `${project[i].name}`;
        parent.appendChild(categoryButton)
        categoryButton.addEventListener("click", function () {
            showImagesByCategory(project[i].name)
        });
    };
};

function showImagesByCategory(cateName) {

    stockAll();

    const imageFiltrer = Array.from(document.getElementsByClassName(`${cateName}`))
    console.log(imageFiltrer)
    const galleryContainer = document.querySelector('.gallery')
    galleryContainer.innerHTML = '';

    for (let i = 0; i < imageFiltrer.length; i++) {
        const clonedImage = imageFiltrer[i].cloneNode(true);
        console.log(clonedImage)
        galleryContainer.appendChild(clonedImage);
    };
};

fetchCategories()
fetchObjets()

