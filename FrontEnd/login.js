const url = 'http://localhost:5678/api/users/login';

function submitForm() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value
    console.log(email, password)

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'email': email,
            'password': password
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur dans l’identifiant ou le mot de passe');
            }
            return response.json();
        })
        .then(data => {
            saveToken(data.token);

            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Erreur lors de la connexion:', error.message);
            document.getElementById("errorMessage").innerHTML = error.message;
        });


}

function saveToken(token) {
    localStorage.setItem("token", token);
    console.log(token)
}


