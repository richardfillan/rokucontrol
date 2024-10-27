// Store the Roku device address as a constant
const ROKU_ADDRESS = 'http://roku-device-address';

// Configure each button to use the ROKU_ADDRESS constant
const buttonConfigs = {
    1: { url: `${ROKU_ADDRESS}/keypress/play`, method: 'POST' },
    2: { url: `${ROKU_ADDRESS}/keypress/pause`, method: 'POST' },
    3: { url: `${ROKU_ADDRESS}/keypress/home`, method: 'POST' },
    4: { url: `${ROKU_ADDRESS}/keypress/up`, method: 'POST' },
    5: { url: `${ROKU_ADDRESS}/keypress/down`, method: 'POST' },
    6: { url: `${ROKU_ADDRESS}/keypress/select`, method: 'POST' },
};

// Function to send a request based on button ID
function sendRequest(buttonId) {
    const config = buttonConfigs[buttonId];
    fetch(config.url, { method: config.method })
        .then(response => {
            if (!response.ok) throw new Error('Request failed');
            console.log(`Button ${buttonId} executed successfully.`);
        })
        .catch(error => console.error('Error:', error));
}
// Register service worker if supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/rokucontrol/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
