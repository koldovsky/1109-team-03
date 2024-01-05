document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('download-button-pdf');

    downloadButton.addEventListener('click', function () {
        const pdfUrl = '.about-us.pdf';
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = 'about-us.pdf';
        downloadLink.click();
    });
});