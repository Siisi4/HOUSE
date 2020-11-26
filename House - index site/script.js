import { infos } from './src/data';
import { promise } from './src/promise-of-unity';

promise();

// CREATION SECTION CONCEPTRICES
let html = '';
for (const info of infos) {
  html += `
  <div class="info">
    <img id="image_${info.id}"class="image" src="${info.image}" />
    <h3>${info.nom}</h3>
    <h5>${info.formation}</h5>
  </div>`;
}
document.querySelector('.presentation').innerHTML = html;

// MISE EN PLACE POUR OUVERTIRE de 1ERE PAGE
const btnIntro = document.querySelector('#btn_intro');
document.querySelector('#intro').style.display = 'block';
btnIntro.style.textDecorationLine = 'underline';
document.querySelector('#explicatif').style.display = 'none';
document.querySelector('#jeu').style.display = 'none';
document.querySelector('#conceptrices').style.display = 'none';

// AFIN QUE LE CACHE JEU S'ENLEVE AU CLIC SUR PLAY
const play = document.querySelector('.far');
play.addEventListener('click', function () {
  document.querySelector('#play').style.display = 'none';
});

// CLIQUAGE DES LIENS DU MENU
const links = document.querySelectorAll('.link');
const pages = document.querySelectorAll('.page');
for (const link of links) {
  link.addEventListener('click', function (e) {
    for (const lien of links) {
      lien.style.textDecorationLine = 'none';
    }
    for (const page of pages) {
      page.style.display = 'none';
    }
    e.currentTarget.style.textDecorationLine = 'underline';
    const id = e.currentTarget.id.split('_');
    document.querySelector(`#${id[1]}`).style.display = 'block';
    document.querySelector('#play').style.display = 'block';
  });
}

// CLIQUAGE SUR CONCEPTRICES

const images = document.querySelectorAll('.image');
const bio = document.querySelector('.bio');
bio.style.display = 'none';
for (const image of images) {
  image.addEventListener('click', function (e) {
    const id = e.currentTarget.id.split('_');
    bio.style.display = 'block';
    bio.innerHTML = `<p>${infos[id[1]].texte}</p>
    <div class="flex"><a href="${infos[id[1]].lien}">Vers mon Portfolio</a>
    <button> X </button></div>`;
    e.currentTarget.style.filter = 'none';
    document.querySelector('button').addEventListener('click', function () {
      bio.style.display = 'none';
      for (const img of images) {
        img.style.filter = 'grayscale(100%)';
      }
    });
  });
}
