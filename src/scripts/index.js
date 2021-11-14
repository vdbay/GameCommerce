var beliButton = document.querySelector("#beli");
var server = "0";
var harga = "0";
var radios;
var denom = "0";
var selector;
var label;
var nick = "-";
beliButton.addEventListener("click", function() {
    id = document.querySelector("#inputID").value;
    server = document.querySelector("#inputServer").value;
    nick = document.querySelector("#inputNick").value;
    harga = document.querySelector('input[type=radio][name=denom]:checked').value;
    radios = document.querySelectorAll('input[type=radio][name=denom]');
    denom = "0";
    for (var i = 0; i < radios.length; i++) {
        selector = 'label[for=' + radios[i].id + ']';
        label = document.querySelector(selector);
        if (radios[i].checked) {
            denom = label.innerText;
        }
    }
    console.log(id);
    console.log(server);
    console.log(nick);
    console.log(harga);
    console.log(denom);
    window.open("https://api.whatsapp.com/send?phone=6287784776041&text=*_FORMAT%20PEMESANAN_*%0A" + "ID%20(Server)%20%3A%20%0A" + id + "Nickname%20%3A%20%0A" + nick + "Order%20%3A%20%0A" + denom + "Sisa%20diamond%20%3A%0A" + "%0A" + "SS%20Profil%20%3A%0A" + "SS%20DM%20Sebelum%20%3A%0A" + "SS%2FFoto%20Bukti%20Bayar%20%3A%0A" + "%0A" + "*_TIDAK%20LENGKAP%3F%20TIDAK%20AKAN%20DI%20PROSES!_*")
});
var hargatopup = document.querySelector("#harga");
var rad = document.querySelectorAll('input[type=radio][name=denom]');
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }
        hargatopup.innerText = this.value;
    });
}