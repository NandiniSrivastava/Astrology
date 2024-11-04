document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history-list');
    const historyMessage = document.getElementById('history-message');

    // Replace this with your actual API call to fetch user history
    fetchUserHistory()
        .then(history => {
            historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
        })
        .catch(error => {
            historyMessage.textContent = 'Error fetching history: ' + error.message;
        });

    document.getElementById('future-opportunities-btn').addEventListener('click', () => {
        window.location.href = 'opportunities.html';
    });
});

function fetchUserHistory() {
    // Replace this with your actual API call to fetch user history
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['You viewed your horoscope for Aries on Nov 1, 2024.']);
        }, 1000); // Simulate a delay
    });
}