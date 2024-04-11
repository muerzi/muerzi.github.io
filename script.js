<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        fetchCsvAndDisplay('https://raw.githubusercontent.com/muerzi/muerzi.github.io/main/g%C3%B6sser_offers.csv', 'gösserOffers');
        fetchCsvAndDisplay('https://raw.githubusercontent.com/muerzi/muerzi.github.io/main/puntigamer_offers.csv', 'puntigamerOffers');
    });

    function fetchCsvAndDisplay(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(csv => {
                Papa.parse(csv, {
                    complete: function(results) {
                        displayCsvData(results.data, elementId);
                    }
                });
            });
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
</script>
