function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("buttonId").style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.13)";
}

function displayStop() {
    document.getElementById("buttonId").style.display = "inline";
    document.getElementById("myForm").style.display = "none";
}

function fetchDetails(first, last, contact) {
    document.getElementById("buttonId").style.display = "inline";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("formSumbitDisplay").style.display = "block";
    document.body.style.backgroundColor = "white";
    var element = document.getElementById("formSumbitDisplay");
    var node = document.createTextNode("First Name: " + `${first}` + "\n Last Name: " + `${last}` + "\n and contact " + `${contact}`);
    element.appendChild(node);
    element.appendChild(element);
}