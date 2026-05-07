import { db } from './firebase.js'
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

async function readScores() {
    const snapshot = await getDocs(collection(db, "Puntuacions"));

    const llista = document.getElementById("ranking");
    llista.innerHTML = "";

        // Recorrem els documents de la col·lecció "puntuacions"
        snapshot.forEach(doc => {

            // Dades del document (nom, puntuacio, edat, data, etc.)
            var dades = doc.data();

            console.log(dades);


            // opcio 1
            llista.innerHTML += "<li>" + dades.nom + " - " + dades.puntuacio + "</li>";
            // llista.innerHTML = "<li>Nom - 1a,sjdhkajsdhkasj0</li>";
            
            // opcio 2
            // const element = document.createElement("li");
            // element.textContent = dada.nom + " - " + dada.puntuacio;
            // llista.appendChild(element);


        });
}

readScores();

// Consultar a la base de dades de Firestore
// https://firebase.google.com/docs/firestore/query-data/queries?hl=es-419#simple_queries