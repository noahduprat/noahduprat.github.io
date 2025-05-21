console.log("Fichier JS chargé !");
const onglets = document.querySelectorAll(".onglet");
const contenus = document.querySelectorAll(".onglet-contenu .contenu");

onglets.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // Retire la classe active de tous les onglets et contenus
        onglets.forEach(o => o.classList.remove("actif"));
        contenus.forEach(c => c.classList.remove("actif"));

        // Ajoute la classe active à l'onglet et contenu cliqués
        btn.classList.add("actif");
        contenus[index].classList.add("actif");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("histoire")) {
        document.getElementById("onglet-histoire")?.classList.add("actif");
    } else if (path.includes("metiers")) {
        document.getElementById("onglet-metiers")?.classList.add("actif");
    } else if (path.includes("enseignes")) {
        document.getElementById("onglet-enseignes")?.classList.add("actif");
    }
});

