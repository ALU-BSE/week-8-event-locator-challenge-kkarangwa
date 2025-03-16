// Sample event data (replace with your data source)
const events = [
    {
        id: 1,
        name: "Tech Conference",
        date: "2024-03-10",
        category: "Technology",
        location: "Convention Center",
        description: "A conference for tech enthusiasts."
    },
    {
        id: 2,
        name: "Music Festival",
        date: "2024-03-15",
        category: "Music",
        location: "City Park",
        description: "A weekend of live music performances."
    },
    // ... more events
];

// Function to generate event cards
function generateEventCards(events) {
    const container = document.getElementById("event-list-container");
    if (!container) return; // Exit if container is not found

    container.innerHTML = ""; // Clear previous cards
    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><span class="math-inline">\{event\.name\}</h5\></5\>
