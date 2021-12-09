function navigate() {
    var x = document.getElementById("search-input").value;

    if (x.toLowerCase() === "kminh") {
        document.getElementById('kminh').scrollIntoView();
    }
    else if (x.toLowerCase() === "preston") {
        document.getElementById('preston').scrollIntoView();
    }
    else if (x.toLowerCase() === "binh minh") {
        document.getElementById('binh-minh').scrollIntoView();
    }
    else {
        alert("Invalid search input!")
    }
}