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