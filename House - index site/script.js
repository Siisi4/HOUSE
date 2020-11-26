// import { infos } from './src/data';
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
