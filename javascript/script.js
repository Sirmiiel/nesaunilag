

// Array of random quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteText = document.getElementById("quote-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;

    // Add a CSS class to fade out the container
    quoteText.classList.add("fade-out");

    // After a short delay, change the quote and remove the fade-out class
    setTimeout(() => {
        quoteText.textContent = randomQuote;
        quoteText.classList.remove("fade-out");
    }, 300); // 500 milliseconds to match the CSS transition duration
}

// Display a random quote initially
displayRandomQuote();

// Set an interval to change the quote every 8 seconds
setInterval(displayRandomQuote, 8000);







function initMap() {
    const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Initial map center coordinates (e.g., San Francisco)
        zoom: 12, // Initial zoom level
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Add a marker for a specific location (e.g., your live location)
    const marker = new google.maps.Marker({
        position: { lat: 6.515995483883474, lng: 3.391665910716194 }, // Replace with your live location coordinates
        map: map,
        title: "Your Location", // Marker tooltip
    });
}







