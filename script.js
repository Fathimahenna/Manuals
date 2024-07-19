// script.js

function downloadPDF() {
    var fileUrl = "QAQCManual.pdf";
    
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "QAQCManual.pdf"; // Adjust the file name if necessary
            link.style.display = 'none'; // Hide the link
            document.body.appendChild(link); // Add the link to the document
            link.click(); // Click the link to download the file
            document.body.removeChild(link); // Remove the link from the document
        })
        .catch(err => console.error('Error fetching file:', err));
}
