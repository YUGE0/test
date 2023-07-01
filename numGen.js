

function gen() {
    let n1 = Number(document.getElementById("input1").value);
    let n2 = Number(document.getElementById("input2").value);
    document.getElementById("v").innerHTML = Math.round(Math.random() * (n2 - n1)) + n1;
}