// script.js

function downloadPDF() {
    // Replace 'YourFileName.pdf' with the actual file name of your PDF
    var fileUrl = "Playbook.pdf"; // Assuming 'YourFileName.pdf' is in the same repository
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileUrl, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        var blob = xhr.response;
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "Playbook.pdf"; // Adjust the file name if necessary
        link.click();
    };
    xhr.send();
}
