const cashButton = document.getElementById("cash");
const property = {
    kioskQuantity: document.getElementById("property1quantity"),
    kioskBuy: document.getElementById("kioskBuy"),
    shopQuantity: document.getElementById("property2quantity"),
    shopBuy: document.getElementById("shopBuy"),
    bankQuantity: document.getElementById("property3quantity"),
    bankBuy: document.getElementById("bankBuy"),
    kioskInfo: document.getElementById("kiosk"),
    shopInfo: document.getElementById("shop"),
    bankInfo: document.getElementById("bank")
}
let gameData = {
    cash: 0,
    kiosks: 0,
    shops: 0,
    banks: 0,
};

function updateCash() {
    cashButton.innerHTML = "$" + gameData.cash;
}

function drawGameData() {
    property.kioskQuantity.innerHTML = gameData.kiosks;
    property.shopQuantity.innerHTML = gameData.shops;
    property.bankQuantity.innerHTML = gameData.banks;
}

cashButton.addEventListener("click", function () {
    gameData.cash++;

    updateCash();
});

updateCash();

setInterval(function () {
    const income = gameData.kiosks * 1; // Nuo kiekvieno kiosko uždirbame po $1 per sekundę

    gameData.cash += income;
    updateCash();
}, 1000);

setInterval(function () {
    const income = gameData.shops * 10; // Nuo kiekvienos parduotuves uždirbame po $10 per sekundę

    gameData.cash += income;
    updateCash();
}, 1000);

setInterval(function () {
    const income = gameData.banks * 100; // Nuo kiekvieno banko uždirbame po $100 per sekundę

    gameData.cash += income;
    updateCash();
}, 1000);

kioskBuy.addEventListener("click", function () {
    console.log("Žaidėjas nori nusipirkti kioską");
    const kioskPrice = 10;

    // Patikriname ar žaidėjui užtenka pinigų kioskui
    if (gameData.cash >= kioskPrice) {
        gameData.kiosks++;
        gameData.cash -= kioskPrice;
        drawGameData();
        updateCash();
    }
});

shopBuy.addEventListener("click", function () {
    console.log("Žaidėjas nori nusipirkti parduotuvę");
    const shopPrice = 100;

    // Patikriname ar žaidėjui užtenka pinigų parduotuvei
    if (gameData.cash >= shopPrice) {
        gameData.shops++;
        gameData.cash -= shopPrice;

        updateCash();
        drawGameData();
    }
});

bankBuy.addEventListener("click", function () {
    console.log("Žaidėjas nori nusipirkti banką");
    const bankPrice = 1000;

    // Patikriname ar žaidėjui užtenka pinigų parduotuvei
    if (gameData.cash >= bankPrice) {
        gameData.banks++;
        gameData.cash -= bankPrice;

        updateCash();
        drawGameData();
    }
});

// property.kioskBuy.addEventListener("mouseenter", function(){
//  console.log("Žalia spalva reiškia, kad užtenka lėšų");
//  if()
// })

property.kioskBuy.addEventListener("mouseenter", function () {
    console.log("Žaidėjas nori gauti informaciją apie kioską");
    property.kioskInfo.style.display = "block";
    const kioskPrice = 10;
    if (gameData.cash >= kioskPrice){
        property.kioskBuy.style.borderColor = "#33d9b2";
    } else { 
        property.kioskBuy.style.borderColor = "#ff5252";
    }
});

property.kioskBuy.addEventListener("mouseleave", function () {
    property.kioskInfo.style.display = "none";
});

property.shopBuy.addEventListener("mouseenter", function () {
    console.log("Žaidėjas nori gauti informaciją apie parduotuvę");
    property.shopInfo.style.display = "block";
    const shopPrice = 100;
    if (gameData.cash >= shopPrice){
        property.shopBuy.style.borderColor = "#33d9b2";
    } else { 
        property.shopBuy.style.borderColor = "#ff5252";
    }
});

property.shopBuy.addEventListener("mouseleave", function () {
    property.shopInfo.style.display = "none";
});

property.bankBuy.addEventListener("mouseenter", function () {
    console.log("Žaidėjas nori gauti informaciją apie banką");
    property.bankInfo.style.display = "block";
    const bankPrice = 1000;
    if (gameData.cash >= bankPrice){
        property.bankBuy.style.borderColor = "#33d9b2";
    } else { 
        property.bankBuy.style.borderColor = "#ff5252";
    }
});

property.bankBuy.addEventListener("mouseleave", function () {
    property.bankInfo.style.display = "none";
})