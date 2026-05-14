Firebase
https://firebase.google.com/

Afegir Firebase a un projecte mitjançant CDN
https://firebase.google.com/docs/web/alt-setup

Guia d'implementació de Cloud Firestore
https://firebase.google.com/docs/firestore/quickstart?hl=es-419#create

# Exercici 1 - Rànquing a la web
Crea un fitxer index.html que mostri un rànquing segons les dades d'una base de dades gestionada amb Firebase Cloud Firestore.

Tingues en compte que a Cloud Firestore trobem col·leccions i documents.

a) Crea un projecte a Firebase, activa Cloud Firestore i crea una col·lecció anomenada puntuacions. Afegeix manualment 3 documents amb els camps nom (text) i puntuació (número),

b) Escriu el codi JavaScript necessari per a connectar-se a Firebase i utilitza la funció getDocs() per a mostrar tots els documents disponibles per consola. Per a aquest projecte demo, verifica que les regles indiquin que la informació d'aquesta base de dades és pública.

c) Amb l'element &lt;ol&gt; d'HTML, mostra una llista ordenada dels elements del rànquing. Per cada element del rànquing mostra el nom i la puntuació.

d) Utilitza les funcions orderBy() i limit() per a ordenar el que la pàgina rep des de Firebase i mostra a l'index.html solament els 5 millors. Escriu en un comentari per què és preferible ordenar les dades mentre es fa la crida a la base de dades.

e) Fes els canvis necessaris a la base de dades i a la pàgina web per a que es pugui guardar i mostrar la data de quan s'ha realitzat el rècord.

# Exercici 2 - Rànquing a Phaser
Escolleix un projecte propi de Phaser que tingui un sistema de puntuacions i connecta-ho a un projecte Firebase per a guardar les seves dades a una base de dades.

a) Investiga la funció addDoc() i crea una funció saveScore(nom, puntuacio) que guardi una puntuació a la base de dades. Comprova a Firebase que s'ha creat el nou registre.

b) Quan el joc acabi la partida, executa la funció saveScore() amb les dades necessàries.

c) Afegeix al document la data actual.

d) Evita tenir diferents documents del mateix nom d'usuari.

# Exercici 3 - Actualització i esborrat de dades
Implementa les funcions d'actualizació i esborrat de dades a Cloud Firestore sobre el projecte de l'anterior exercici.

a) Investiga la funció doc() i la funció updateDoc() per a poder modificar un registre o document segons el seu ID.

b) Investiga la funció doc() i la funció deleteDoc() per a poder esborrar un registre o document segons el seu ID.

# Exercici 4 - Aplicació de tasques
Investiga les funcions addDoc(), getDocs(), updateDoc() i deleteDoc() per a fer una aplicació bàsica de gestió de tasques. L'aplicació ha de poder afegir tasques, visualitzar-les, marcar-les com completades i eliminar-les.

a) Crea una col·lecció tasques a Firestore. Cada tasca ha de tenir un text, un estat (completada o no) i una data de creació.

b) Implementa una web bàsica que es connecti a la col·lecció tasques amb les característiques necessàries per afegir tasca, mostrar tasques, marcar tasca com a completada i eliminar tasca.

c) Investiga Firebase Hosting per poder publicar la web. Aquesta web es podria penjar a GitHub Pages? Per què?

d) Extra: Investiga les queries a Cloud Firestore per poder mostrar només les tasques pendents per a completar o només les tasques completades.

e) Extra: Investiga com podries afegir un sistema d'autentificació d'usuaris. Quins canvis a l'estructura de la base de dades canviaries?
