function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("buttonId").style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.13)";
    document.getElementById("formSumbitDisplay").style.display = "none";
}

function displayStop() {
    document.getElementById("buttonId").style.display = "inline";
    document.getElementById("myForm").style.display = "none";
    document.body.style.backgroundColor = "white";
}

function fetchDetails(first, last, contact) {
    document.body.style.backgroundColor = "white";
    document.getElementById("buttonId").style.display = "inline";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("formSumbitDisplay").style.display = "block";
    var element = document.getElementById("formSumbitDisplay");
    let arr1 = [];
    arr1.push({val: "First Name: " + `${first}`},{val: "Last Name: " + `${last}`},{val: "Contact: " + `${contact}`})
    arr1.forEach(value=> {
        var node = document.createElement("LI");  
        var textnode = document.createTextNode(value.val); 
        node.appendChild(textnode); 
        document.getElementById("formSumbitDisplay").appendChild(node);
    })
}