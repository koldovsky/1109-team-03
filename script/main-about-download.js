    const downloadButton = document.getElementById('download-button-pdf');

    downloadButton.addEventListener('click', function () {
        const pdfUrl = 'img/about-us.pdf';
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = 'about-us.pdf';
        downloadLink.click();
    });