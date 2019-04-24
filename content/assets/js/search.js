var div = document.getElementById("list-R");
$("#list-R").fadeOut();

function searchInp() {
    $("#list-R").fadeIn();
}
$("#searcrh-inp").click(function () {
    $("#list-R").fadeIn();
})
//obtiendo informacion del DOM para  
document.addEventListener("click", function (e) {
    var clic = e.target;
    if (div.style.display == "block" && clic != div) {
        div.style.display = "none";
    }
});



