// Set up references to the elements you will need. Use sensible names so you know what they refer to.
const form = document.getElementById("form");
const friendSD = document.getElementById("friendsSD");
const monthSD = document.getElementById("monthsSD");
const friendHD = document.getElementById("friendsHD");
const monthHD = document.getElementById("monthsHD");
const outputP = document.getElementById("output");
// Call a named function when the form is submitted
form.addEventListener("submit", calculatePrice);
// Create that named function which should…
function calculatePrice(event) {
    event.preventDefault();

    let sd=5.99;
    let hd=7.99;

    let SDfriends = parseInt(friendSD.value);
    let HDfriends = parseInt(friendHD.value);
    let SDmonth = parseInt(monthSD.value);
    let HDmonth = parseInt(monthHD.value);

    let sdCost = ((SDfriends*sd)*SDmonth);
    let hdCost = ((HDfriends*hd)*HDmonth);
    let total = sdCost+hdCost;

    outputP.innerText = `Your total cost of gifting is £${total}`;
}
