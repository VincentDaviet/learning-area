const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=0; i<5; i++) {
    // affiche les images sur thumbbar
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/pic" + (i+1) + ".jpg");
    thumbBar.appendChild(newImage);

// ajoute le gestionnaire d'évènement  onclick
   newImage.onclick = changeImageDisplayed;
}
function changeImageDisplayed(evt) {
    // récupère la valeur src de l'image courante
    const srcDisplayed = evt.target.src;
    displayedImage.setAttribute('src', srcDisplayed)
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    if(btn.getAttribute("class")==="dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor="rgba(0,0,0,0)";
    }
}