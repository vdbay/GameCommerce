var beliButton = document.querySelector("#beli");
beliButton.addEventListener("click", function() {
    var id = document.querySelector("#inputID").value;
    var server = document.querySelector("#inputServer").value;
    var selected = document.querySelector('input[type=radio][name=denomML]:checked');
    console.log(selected.value);
});