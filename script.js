document.addEventListener('DOMContentLoaded', function() {
    fetchCsvAndDisplay('goesser_offers.csv', 'goesserOffers');
    fetchCsvAndDisplay('puntigamer_offers.csv', 'puntigamerOffers');
});

function fetchCsvAndDisplay(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(csv => {
            const data = parseCSV(csv);
            displayCsvData(data, elementId);
        }).catch(error => console.error('Error fetching or parsing CSV:', error));
}

function parseCSV(csv) {
    const rows = csv.split('\n').filter(row => row);
    return rows.map(row => row.split(',').map(cell => cell.trim()));
}

function displayCsvData(data, elementId) {
    const container = document.getElementById(elementId);
    let table = '<table>';
    data.forEach((row, index) => {
        table += '<tr>';
        row.forEach(cell => {
            table += index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`;
        });
        table += '</tr>';
    });
    table += '</table>';
    container.innerHTML = table;
}