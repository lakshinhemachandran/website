let ads = [];
let currentIndex = 0;

function fetchAds() {
    let finalUrl = "";

    if (typeof adsUrl !== "undefined") {
        finalUrl = adsUrl;
    } else if (typeof sheetId !== "undefined") {
        const sheetName = typeof window.sheetName !== "undefined" ? window.sheetName : "Ads";
        finalUrl = `https://script.google.com/macros/s/AKfycbxUeMYekPaJ7tB_v5MF2KE7s-A4hIGtyTxNzS6bBYoMap8EnsNxGnCWLZT4K5FFAwjVyg/exec?sheetId=${sheetId}&sheetName=${sheetName}`;
    } else {
        console.error("❌ No adsUrl or sheetId provided.");
        return;
    }

    fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                ads = data;
                rotateAds();
                setInterval(rotateAds, 5000); // Rotate every 5s
            }
        })
        .catch(error => console.error("⚠️ Error fetching ads:", error));
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
