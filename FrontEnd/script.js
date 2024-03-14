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
    const galleryContainer = document.querySelector('.gallery')
    galleryContainer.innerHTML = '';

    for (let i = 0; i < imageFiltrer.length; i++) {
        const clonedImage = imageFiltrer[i].cloneNode(true);
        galleryContainer.appendChild(clonedImage);
    };
};

fetchCategories()
fetchObjets()


function retrieveToken() {
    return localStorage.getItem('token');
}

function openConnectPage() {
    const token = retrieveToken();
    console.log(token)
    if (token !== null && token !== undefined) {
        showConnectPage();
    }
}

function showConnectPage() {

    const logout = document.querySelector('#logout')
    logout.classList.remove('hidden')
    const login = document.querySelector('#login')
    login.classList.add('hidden')

    const category = document.querySelector('.categories')
    category.classList.add('hidden')

    const portfolio = document.querySelector('.editButton')
    const editButton = document.createElement('button')
    editButton.innerText = ('modifier')
    portfolio.appendChild(editButton)

    const body = document.querySelector('body')
    const editTopLine = document.createElement('button')
    editTopLine.innerText = ('Mode edition')
    body.prepend(editTopLine)
}

function closeConnectPage() {

    localStorage.removeItem('token');
    window.location.href = 'index.html';
    alert('Vous allez être deconnecter.')
}

retrieveToken()
openConnectPage()

/* function displayLocalStorage() {
    // Récupérer toutes les clés du localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
}

// Appeler la fonction pour afficher le contenu du localStorage
displayLocalStorage(); */


