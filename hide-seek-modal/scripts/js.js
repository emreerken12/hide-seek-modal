// resim ekle kaldır başlangıç
function hideShow() {
var getElement = document.querySelector("#foto");
if (getElement.style.display=="none"){
    getElement.style.display="block";
}else {
    getElement.style.display="none"
}
}
// resim ekleme kaldırma bitiş.
// form açma kapama başlangıç

// Buton tuşlarını tanıtma
var modal = document.getElementById("myModal");

// Buton tuşlarını tanıtma
var btn = document.getElementById("myBtn");

// x kapatıcı tuşu butonu
var span = document.getElementsByClassName("close")[0];

// Modal açılış butonu
btn.onclick = function() {
  modal.style.display = "block";
}

// kapatma butonu başlangıç
span.onclick = function() {
  modal.style.display = "none";
}

// herhangi bir yere tıklanıldığında çıkılış
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}