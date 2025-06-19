function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    alert("Message envoyé avec succès !");
    return true;
}
