// define adsUrl with const adsUrl = "Deployment URL"
let ads = [];
let currentIndex = 0;

function fetchAds() {
    fetch(adsUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                ads = data;
                rotateAds();
                setInterval(rotateAds, 5000); // Change ad every 5 seconds
            }
        })
        .catch(error => console.error("Error fetching ads:", error));
}

function rotateAds() {
    if (ads.length === 0) return;

    const ad = ads[currentIndex];
    document.getElementById("ad-image").src = ad.image;
    document.getElementById("ad-link").href = ad.link;
    document.getElementById("ad-text").innerText = ad.text;

    currentIndex = (currentIndex + 1) % ads.length;
}

fetchAds();