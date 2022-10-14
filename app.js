import * as objects from './modules/objects.js';
import * as button from './modules/button.js';
import * as progress from './modules/progressbars.js';
import * as elements from './modules/elements.js';
import * as animations from './modules/animantions.js';

// gecikme fonksiyonu
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// Envanter
elements.kofteEnvanter.innerHTML += (objects.envanter.koftesayi)
elements.ekmekEnvanter.innerHTML += (objects.envanter.ekmeksayi)
elements.tavukEnvanter.innerHTML += (objects.envanter.tavuksayi)
elements.marulEnvanter.innerHTML += (objects.envanter.marulsayi)
elements.tursuEnvanter.innerHTML += (objects.envanter.tursusayi)
elements.domatesEnvanter.innerHTML += (objects.envanter.domatessayi)
elements.soganEnvanter.innerHTML += (objects.envanter.sogansayi)
elements.patatesEnvanter.innerHTML += (objects.envanter.patatessayi)
elements.kolaEnvanter.innerHTML += (objects.envanter.kolasayi)
elements.sosEnvanter.innerHTML += (objects.envanter.sossayi)
// kapalı elementler
button.tavuk.disabled = true;
button.kofte.disabled = true;
button.siparisGonder.disabled = true;
button.servis.disabled = true;
button.hamburgerHazirla.disabled= true;

//saklı elementler
button.azKofte.style.visibility = "hidden";
button.cokKofte.style.visibility = "hidden";
button.ortaKofte.style.visibility = "hidden";
progress.kontroldiv.style.visibility = "hidden";
progress.tavukdiv.style.visibility = "hidden";
progress.koftediv.style.visibility = "hidden";
progress.patatesdiv.style.visibility = "hidden";
progress.koladiv.style.visibility = "hidden";
progress.hamburgerdiv.style.visibility = "hidden";
elements.tablo.style.visibility = "hidden";
elements.buttons.style.visibility = "hidden";

//progress bar fonksiyonu
var mainprogress = async function (div, progress, a, b) {
  div.style.visibility = "visible";
  progress.style.width = "50%";
  await delay(a)
  progress.style.width = "100%";
  await delay(b)
  div.style.visibility = "hidden";
  progress.style.width = "0%";
}
// sipariş başlangıcı ve yeni sipariş
var siparisMenu = document.getElementById('SiparisMenu')
siparisMenu.style.visibility = "hidden";
button.siparis.onclick = async function () {
  button.siparis.disabled = true;
  await mainprogress(progress.kontroldiv, progress.kontrol, 1000, 2000)
  siparisMenu.style.visibility = "visible"
  button.malzeme.disabled = false;
}

//malzeme kontrol
var kontrol = function (variable, add) {
  if (variable > 0) {
    add.style.visibility = "visible";
  }
  else {

  }
}
button.malzeme.onclick = async function () {
  if (objects.envanter.ekmeksayi > 0) {
    await mainprogress(progress.kontroldiv, progress.kontrol, 1500, 3000)
    progress.kontroldiv.style.visibility = "hidden";
    button.kofte.disabled = false;
    button.tavuk.disabled = false;
    button.malzeme.disabled = true;

  }
  else {
    alert("Stoklarımızın Tükenmiştir. Simülasyonu yeniden başlatmak için sayfayı yenileyebilirniz!")
  }
}
//köfte seçimi
button.kofte.onclick = function () {
  objects.envanter.koftesayi--;
  objects.envanter.ekmeksayi--;
  button.azKofte.style.visibility = "visible";
  button.cokKofte.style.visibility = "visible";
  button.ortaKofte.style.visibility = "visible";
  button.kofte.disabled = true;
  button.tavuk.disabled = true;
  elements.kofteEnvanter.innerHTML = (objects.envanter.koftesayi)
  elements.ekmekEnvanter.innerHTML = (objects.envanter.ekmeksayi)
  button.patates.disabled = false;
  button.kola.disabled = false;
  button.azKofte.disabled = false;
  button.ortaKofte.disabled = false;
  button.cokKofte.disabled = false;

}
//tavuk seçimi
button.tavuk.onclick = async function () {
  objects.envanter.tavuksayi--;
  objects.envanter.ekmeksayi--;
  button.kofte.disabled = true;
  button.tavuk.disabled = true;

  button.patates.disabled = false;
  button.kola.disabled = false;
  animations.canvasIn()
  elements.tablo.style.visibility = 'visible';
  elements.buttons.style.visibility = 'visible';
  kontrol(objects.envanter.marulsayi, button.marulEkle)
  kontrol(objects.envanter.sogansayi, button.soganEkle)
  kontrol(objects.envanter.tursusayi, button.tursuEkle)
  kontrol(objects.envanter.domatessayi, button.domatesEkle)
  await mainprogress(progress.tavukdiv, progress.tavuk, 1500, 3000)
  button.hamburgerHazirla.disabled = false;
  elements.tavukEnvanter.innerHTML = (objects.envanter.tavuksayi)
  elements.ekmekEnvanter.innerHTML = (objects.envanter.ekmeksayi)
  animations.tavukfadein()

}
// Köfte pişme düzeyi seçimi
//az pişmiş
button.azKofte.onclick = async function () {
  animations.canvasIn()
  button.ortaKofte.disabled = true;
  button.azKofte.disabled = true;
  button.cokKofte.disabled = true;
  elements.tablo.style.visibility = 'visible';
  elements.buttons.style.visibility = 'visible';
  kontrol(objects.envanter.marulsayi, button.marulEkle)
  kontrol(objects.envanter.sogansayi, button.soganEkle)
  kontrol(objects.envanter.tursusayi, button.tursuEkle)
  kontrol(objects.envanter.domatessayi, button.domatesEkle)
  await mainprogress(progress.koftediv, progress.kofte, 1000, 2000)
  button.hamburgerHazirla.disabled = false;
  animations.koftefadein()
}
//orta pişmiş
button.ortaKofte.onclick = async function () {
  animations.canvasIn()
  button.ortaKofte.disabled = true;
  button.azKofte.disabled = true;
  button.cokKofte.disabled = true;
  elements.tablo.style.visibility = 'visible';
  elements.buttons.style.visibility = 'visible';
  kontrol(objects.envanter.marulsayi, button.marulEkle)
  kontrol(objects.envanter.sogansayi, button.soganEkle)
  kontrol(objects.envanter.tursusayi, button.tursuEkle)
  kontrol(objects.envanter.domatessayi, button.domatesEkle)
  await mainprogress(progress.koftediv, progress.kofte, 1500, 3000)
  button.hamburgerHazirla.disabled = false;
  animations.koftefadein()
}
//çok pişmiş
button.cokKofte.onclick = async function () {
  animations.canvasIn()
  button.ortaKofte.disabled = true;
  button.azKofte.disabled = true;
  button.cokKofte.disabled = true;
  elements.tablo.style.visibility = 'visible';
  elements.buttons.style.visibility = 'visible';
  kontrol(objects.envanter.marulsayi, button.marulEkle)
  kontrol(objects.envanter.sogansayi, button.soganEkle)
  kontrol(objects.envanter.tursusayi, button.tursuEkle)
  kontrol(objects.envanter.domatessayi, button.domatesEkle)
  await mainprogress(progress.koftediv, progress.kofte, 2000, 4000)
  button.hamburgerHazirla.disabled = false;
  animations.koftefadein()
}
// Malzemeleri ekleme
var malzEkleCıkar = function (add, remove, variable, htmlElement, fadein, fadeout) {
  remove.style.visibility = 'hidden';
  add.style.visibility = 'visible';
  add.onclick = function () {

    variable = variable - 1;
    remove.style.visibility = 'visible';
    htmlElement.innerHTML = (variable)
    add.style.visibility = 'hidden';
    fadein();

  }
  remove.onclick = function () {
    variable++;
    remove.style.visibility = 'hidden';
    add.style.visibility = "visible";
    fadeout();
    htmlElement.innerHTML = (variable)
  }
}
malzEkleCıkar(button.marulEkle, button.marulAzalt, objects.envanter.marulsayi, elements.marulEnvanter, animations.marulfadein, animations.marulfadeout)
malzEkleCıkar(button.soganEkle, button.soganAzalt, objects.envanter.sogansayi, elements.soganEnvanter, animations.soganfadein, animations.soganfadeout)
malzEkleCıkar(button.domatesEkle, button.domatesAzalt, objects.envanter.domatessayi, elements.domatesEnvanter, animations.domfadein, animations.domfadeout)
malzEkleCıkar(button.tursuEkle, button.tursuAzalt, objects.envanter.tursusayi, elements.tursuEnvanter, animations.tursufadein, animations.tursufadeout)
//malzeme butonları saklama fonksiyonu
var sakla = function () {
  button.marulAzalt.style.visibility = 'hidden';
  button.tursuAzalt.style.visibility = 'hidden';
  button.domatesAzalt.style.visibility = 'hidden';
  button.soganAzalt.style.visibility = 'hidden';
  button.marulEkle.style.visibility = 'hidden';
  button.domatesEkle.style.visibility = 'hidden';
  button.soganEkle.style.visibility = 'hidden';
  button.tursuEkle.style.visibility = 'hidden';
}
//hamburger hazırlansın
button.hamburgerHazirla.onclick = function () {
  sakla()
  button.hamburgerHazirla.disabled = true;
  mainprogress(progress.hamburgerdiv, progress.hamburger, 1000, 2000)
}
//patates ekleme 
button.patates.onclick = async function () {
  button.patates.disabled = true;
  objects.envanter.patatessayi--;
  await mainprogress(progress.patatesdiv, progress.patates, 2500, 5000)
  elements.patatesEnvanter.innerHTML = (objects.envanter.patatessayi)
  animations.friesfadein();
  button.siparisGonder.disabled = false;
}
//kola ekleme
button.kola.onclick = async function () {
  button.kola.disabled = true;
  objects.envanter.kolasayi--;
  await mainprogress(progress.koladiv, progress.kola, 1000, 2000)
  elements.kolaEnvanter.innerHTML = (objects.envanter.kolasayi)
  animations.cokefadein();
}
// siparişler tepsiye
button.siparisGonder.onclick = async function () {
  await mainprogress(progress.kontroldiv, progress.kontrol, 500, 1000)
  button.siparisGonder.disabled = true;
  objects.envanter.sossayi--;
  elements.sosEnvanter.innerHTML = (objects.envanter.sossayi)
  button.servis.disabled = false;
  animations.canvasOut();
  animations.domfadeout();
  animations.soganfadeout();
  animations.marulfadeout();
  animations.friesfadeout();
  animations.cokefadeout();
  animations.tursufadeout();
  animations.koftefadeout();
  animations.tavukfadeout();
}
// sipariş servis edilsin
button.servis.onclick = async function () {
  await mainprogress(progress.kontroldiv, progress.kontrol, 500, 1000)
  button.servis.disabled = true;
  button.azKofte.style.visibility = "hidden";
  button.cokKofte.style.visibility = "hidden";
  button.ortaKofte.style.visibility = "hidden";
  progress.kontroldiv.style.visibility = "hidden";
  progress.tavukdiv.style.visibility = "hidden";
  progress.koftediv.style.visibility = "hidden";
  progress.patatesdiv.style.visibility = "hidden";
  progress.koladiv.style.visibility = "hidden";
  progress.hamburgerdiv.style.visibility = "hidden";
  elements.tablo.style.visibility = "hidden";
  elements.buttons.style.visibility = "hidden";
  button.tavuk.disabled = true;
  button.kofte.disabled = true;
  button.siparisGonder.disabled = true;
  siparisMenu.style.visibility = "hidden";
  button.siparis.disabled = false;
  sakla()

}
sakla()
