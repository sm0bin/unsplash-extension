document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    // Add an event listener to copy the link when the button is clicked
    copyButton.addEventListener('click', function () {
        // Get the current tab url
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Copy the url to the clipboard
            const url = tabs[0].url;
            const unsplashUrl = url.trim();
            const imageId = unsplashUrl.substring(unsplashUrl.length - 11);
            const convertedUrl = `https://source.unsplash.com/${imageId}`;
            navigator.clipboard.writeText(convertedUrl);

            copyButton.textContent = 'Copied';
            setTimeout(function () {
                copyButton.textContent = 'Copy';
            }, 1000);
        });
    });
});
