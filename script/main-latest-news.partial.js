const datetimeElement = document.getElementById('datetime');
        function displayDateTime() {
            const currentDateTime = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
            const formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);
            datetimeElement.textContent = formattedDateTime;
        }
        displayDateTime();
        setInterval(displayDateTime, 1000);