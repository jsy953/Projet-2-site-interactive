const urlCategorie = "http://localhost:5678/api/categories";
const urlObjet = "http://localhost:5678/api/works";

function fetchObjets() {
    fetch(urlObjet)
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data)
        });
}

function fetchCategories() {
    fetch(urlCategorie)
        .then(reponse => reponse.json())
        .then(data => {
            /* displayCategories(data) */
            console.log(data)
        });
};




fetchCategories();
fetchObjets()