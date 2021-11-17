/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var dropClick = function () {
    var table = document.getElementById("inputExercise");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = this.id;
    cell2.innerHTML = "100 Cal";
}

document.getElementById("pushUps").onclick = dropClick;
document.getElementById("sitUps").onclick = dropClick;
document.getElementById("pullUps").onclick = dropClick;
document.getElementById("squats").onclick = dropClick;
document.getElementById("hipThrusts").onclick = dropClick;
document.getElementById("run").onclick = dropClick;

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}