document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('download-button');

    downloadButton.addEventListener('click', function () {
        const pdfUrl = 'img/about-us.pdf';
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = 'About-us.pdf';
        downloadLink.click();
    });
});