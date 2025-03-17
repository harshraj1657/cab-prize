function comparePrices() {
    let pickup = document.getElementById("pickup").value.trim().toLowerCase();
    let destination = document.getElementById("destination").value.trim().toLowerCase();

    if (pickup === "" || destination === "") {
        document.getElementById("result").innerHTML = "Please enter both pickup and destination locations.";
        return;
    }

    let locations = {
        "sgsits college": 0,
        "railway station": 5,
        "bus stand": 7,
        "khajrana temple": 12,
        "patalpani waterfall": 35,
        "rajwada": 10,
        "bhawarkua": 6,
        "vijay nagar": 8,
        "palasia": 9,
        "rani sarai": 15
    };

    if (!(pickup in locations) || !(destination in locations)) {
        document.getElementById("result").innerHTML = "Location not found in our database.";
        return;
    }

    let distance = Math.abs(locations[pickup] - locations[destination]);

    let fares = [
        { company: "Uber", price: (distance * 5.5).toFixed(2) },
        { company: "Ola", price: (distance * 5).toFixed(2) },
        { company: "Rapido", price: (distance * 4.5).toFixed(2) }
    ];

    let resultHTML = `<h3>Estimated Prices (for ${distance} km):</h3><ul>`;
    fares.forEach(cab => {
        resultHTML += `<li>${cab.company}: ₹${cab.price}</li>`;
    });
    resultHTML += "</ul>";

    document.getElementById("result").innerHTML = resultHTML;
}
