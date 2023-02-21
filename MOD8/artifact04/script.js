function validateForm() {
    // Status remains false by default
    var validator = false;
    // var validZipcode = false;

    // Expressions much match alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // Error message variable
    let error = "";

    // Input variables
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;

    

    // If statements
    if (firstname === null || firstname == "" || firstname.length > 20) {
        error += "<p>The first name is required and cannot exceed 20 characters</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (lastname === null || lastname === "" || lastname.length > 50){
        error += "<p>The last name is required and cannot exceed 50 characters</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (email === null || email === "") {
        error += "<p>Invalid email</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (phone === null || phone.length > 15 || phone === "") {
        error += "<p>Invalid phone number</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (username === null || username.length > 12 || username === "") {
        error += "<p>The username is required and cannot exceed 12 characters</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (password === null || password.length > 7 || password === "") {
        error += "<p>Password cannot exceed 7 characters</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (address === null || address === "") {
        error += "<p>Address is required</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (city === null || city === "") {
        error += "<p>City is required</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (state === null || state === "Select State") {
        error += "<p>Please select a state</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    if (country === null || country === "Select Country") {
        error += "<p>Please select a country</p>";
        document.getElementById("errorMessages").innerHTML = error;
    }

    // if (country === "United States of America") {
    //     while (zipcode.length > 5 || zipcode === null || zipcode === "")
    //     error += "<p>Zipcode is required and cannot exceed 5 digits</p>";
    //     document.getElementById("errorMessages").innerHTML = error;
    // }

    // Zipcode validation if country is USA

    else {
        validator = true;
    }

    return validator;
}