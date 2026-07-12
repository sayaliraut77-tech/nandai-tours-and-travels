function bookNow() {
    alert("Thank you for choosing Nandai Tours & Travels!\n\nCall: +91 7350205707");
}
const images = [
    "hero.jpg",
    "crysta.jpg",
    "ertiga.jpg",
    "dzire.jpg"
];

let current = 0;

setInterval(() => {
    current = (current + 1) % images.length;

    document.querySelector(".hero").style.background =
        `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[current]}')`;

    document.querySelector(".hero").style.backgroundSize = "cover";
    document.querySelector(".hero").style.backgroundPosition = "center";

}, 4000);
function sendBooking() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let date = document.getElementById("date").value;
    let vehicle = document.getElementById("vehicle").value;

    if (name === "" || mobile === "" || pickup === "" || drop === "" || date === "" || vehicle === "Select Vehicle") {
        alert("Please fill all details");
        return;
    }

    let message =
`🚖 New Cab Booking

👤 Name: ${name}
📞 Mobile: ${mobile}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}
📅 Date: ${date}
🚗 Vehicle: ${vehicle}`;

    let url = "https://wa.me/917350205707?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}