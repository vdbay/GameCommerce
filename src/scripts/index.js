var beliButton = document.querySelector("#beli");
var server = "0";
var harga = "0";
var radios;
var denom = "0";
var selector;
var label;
var nick = "-";
var sisadm = "0";
beliButton.addEventListener("click", function() {
    id = document.querySelector("#inputID").value;
    server = document.querySelector("#inputServer").value;
    nick = document.querySelector("#inputNick").value;
    harga = document.querySelector('input[type=radio][name=denom]:checked').value;
    radios = document.querySelectorAll('input[type=radio][name=denom]');
    sisadm = document.querySelector("#inputSisaDM").value;
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
    window.open("https://api.whatsapp.com/send?phone=6287784776041&text=*_FORMAT%20PEMESANAN_*%0AID%20(Server)%20%3A%20" + id + " (" + server + ")%0ANickname%20%3A%20" + nick + "%0AOrder%20%3A%20" + denom + "%0ASisa%20Diamond%20%3A%20" + sisadm + "%0AHarga%20dalam%20Rupiah%20%3A%20Rp" + harga + "%0A%0A%0ASS%20Profil%20%3A%0ASS%20DM%20Sebelum%20%3A%0ASS%2FFoto%20Bukti%20Bayar%20%3A%0A%0A*_TIDAK%20LENGKAP%3F%20TIDAK%20AKAN%20DI%20PROSES!_*")
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