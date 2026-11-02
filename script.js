document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let destination = document.getElementById("destination").value;
    let price = document.getElementById("package").value;
    let travelers = document.getElementById("travelers").value;
    let date = document.getElementById("date").value;

    if (name == "" || phone == "" || destination == "" ||
        price == "" || travelers == "" || date == "") {

        alert("Please fill all the details!");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10 digit mobile number!");
        return;
    }

    if (Number(travelers) < 1 || Number(travelers) > 20) {
        alert("Please enter 1 to 20 travelers!");
        return;
    }

    if (new Date(date + "T00:00:00") < new Date(new Date().toDateString())) {
        alert("Please select a future travel date!");
        return;
    }

    let total = Number(price) * Number(travelers);

    document.getElementById("result").innerHTML =
        "<h3>Booking Summary</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Destination: " + destination + "</p>" +
        "<p>Travelers: " + travelers + "</p>" +
        "<p>Travel Date: " + date + "</p>" +
        "<p>Total Amount: ₹" + total + "</p>" +
        "<h3>Booking Enquiry Submitted Successfully!</h3>";

});