// import { infos } from './src/data';
import { promise } from './src/promise-of-unity';

promise();

const infos = [{
  nom: 'Shin-Yuh', formation: 'WAD', image: 'av_shinyuh.png', texte: 'Bonjour,  je suis Shin-Yuh! Une ‘junior web developer’ en formation! Toujours désireuse d"apprendre de nouvelles choses et espérer construire un meilleur monde par la programmation!', lien: '',
}, {
  nom: 'Siisi4', formation: 'Game', image: 'av_siisie.png', texte: 'Yo ! Moi c"est Siisi4, développeuse de jeux-vidéo Jr. passionnée.. ♥ Je suis également streameuse de variétés à mes heures perdues sur la platforme Twitch. J"aime les jeux et les chats !  °bois son verre de lait °', lien: 'https://siisi4.itch.io',
}, {
  nom: 'Annick', formation: 'WEB', image: 'av_annick.png', texte: '', lien: '',
}, {
  nom: 'Daphné', formation: 'WEB', image: 'av_daphne.png', texte: 'Coucou, je suis en pleine découverte et je trouve cela génial! Débarquer dans ce monde de l"informatique avec cette formation de front-end developer, ça me change ! Que l"exploration continue!', lien: '',
}, {
  nom: 'Claudia', formation: 'Game', image: 'av_claudia.png', texte: 'My name is Claudia and I"m a girl who likes to play a lot. I also have an obsession with cats and cute stuff.', lien: '',
}];

let html = '<div class="presentation">';
for (const info of infos) {
  html += '<div><img src="./static" />';
}
html += '</div>';

document.querySelector('#intro').style.display = 'block';
document.querySelector('#explicatif').style.display = 'none';
document.querySelector('#jeu').style.display = 'none';
document.querySelector('#conceptrices').style.display = 'none';

const btnIntro = document.querySelector('#btnIntro');
btnIntro.addEventListener('click', function () {
  document.querySelector('#intro').style.display = 'block';
  document.querySelector('#explicatif').style.display = 'none';
  document.querySelector('#jeu').style.display = 'none';
  document.querySelector('#conceptrices').style.display = 'none';
  document.querySelector('#play').style.display = 'block';
});
const btnExplicatif = document.querySelector('#btnExplicatif');
btnExplicatif.addEventListener('click', function () {
  document.querySelector('#intro').style.display = 'none';
  document.querySelector('#explicatif').style.display = 'block';
  document.querySelector('#jeu').style.display = 'none';
  document.querySelector('#conceptrices').style.display = 'none';
  document.querySelector('#play').style.display = 'block';
});
const btnJeu = document.querySelector('#btnJeu');
btnJeu.addEventListener('click', function () {
  document.querySelector('#intro').style.display = 'none';
  document.querySelector('#explicatif').style.display = 'none';
  document.querySelector('#jeu').style.display = 'block';
  document.querySelector('#conceptrices').style.display = 'none';
});

const play = document.querySelector('.far');
play.addEventListener('click', function () {
  document.querySelector('#play').style.display = 'none';
});

const btnConceptrices = document.querySelector('#btnConceptrices');
btnConceptrices.addEventListener('click', function () {
  document.querySelector('#intro').style.display = 'none';
  document.querySelector('#explicatif').style.display = 'none';
  document.querySelector('#jeu').style.display = 'none';
  document.querySelector('#conceptrices').style.display = 'block';
  document.querySelector('#play').style.display = 'block';
});
