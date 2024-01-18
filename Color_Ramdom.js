let boiteCouleur = document.querySelector('.boite_Couleur');
let codeCouleur = document.querySelector('.code_couleur');
let ramdomId;
let resultRGB;

function generatorColor(min, max, moy) {

   const rd1 = Math.floor(Math.random() * (min - max) + moy),
         rd2 = Math.floor(Math.random() * (min - max) + moy + 2),
         rd3 = Math.floor(Math.random() * (min - max) + moy);

   // Creer La VAleur
      
   ramdomId = rd1 + ', ' + rd2 + ', ' + rd3; 
   
   resultRGB = `rgb(${ramdomId})`;

   boiteCouleur.style.background = resultRGB;

   codeCouleur.textContent = ramdomId;
   
}



// Partie pour Copié

const btn_Copie = document.querySelector('.copy');

btn_Copie.addEventListener('click', (e) => {

// Message Succes Copie
   
const divCopie = document.createElement('div');

divCopie.className = 'copie';

const textMessage = document.createTextNode('Copié avec succès');

divCopie.appendChild(textMessage);

document.body.insertBefore(divCopie, boiteCouleur);

setTimeout(() => {
   document.querySelector('.copie').remove();
}, 4000);

navigator.clipboard.writeText('rgb('+ e.target.previousElementSibling.innerText +');');

});
   

// Lors du clique pour generer une couleur

generatorColor(000,193,255);

const btn_Hasard = document.querySelector('button.hasard');

btn_Hasard.addEventListener('click', () => {
   generatorColor(000,193,255);
});

// 925DEV