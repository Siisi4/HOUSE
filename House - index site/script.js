import { infos } from './src/data';
import { promise } from './src/promise-of-unity';

promise();

let html = '';
for (const info of infos) {
  html += `
  <div class="info">
    <img class="image" src="${info.image}" />
    <h3>${info.nom}</h3>
    <h5>${info.formation}</h5>
    <p>${info.texte}</p>
    <a href="${info.texte}">Vers mon Portfolio</a>
  </div>`;
}

document.querySelector('.presentation').innerHTML = html;

const btnIntro = document.querySelector('#btn_intro');
document.querySelector('#intro').style.display = 'block';
btnIntro.style.textDecorationLine = 'underline';
document.querySelector('#explicatif').style.display = 'none';
document.querySelector('#jeu').style.display = 'none';
document.querySelector('#conceptrices').style.display = 'none';

const play = document.querySelector('.far');
play.addEventListener('click', function () {
  document.querySelector('#play').style.display = 'none';
});

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
