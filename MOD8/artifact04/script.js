function validateForm() {
    // Error message variable
    let error = "";
    // Expressions much match alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    var result = true;

    if (!validateFirstName()) {
        result = false;
    }
    if (!validateLastName()) {
        result = false;
    }
    if (!validateEmail()) {
        result = false;
    }
    if (!validatePhone()) {
        result = false;
    }
    if (!validateUsername()) {
        result = false;
    }
    if (!validatePassword()) {
        result = false;
    }
    if (!validateAddress()) {
        result = false;
    }
    if (!validateCity()) {
        result = false;
    }
    if (!validateState()) {
        result = false;
    }
    if (!validateCountry()) {
        result = false;
    }
    // Zipcode if applicable
    if (!validateZipCode()) {
        result = false;
    }
    return result;

    // First name validation
    function validateFirstName() {
        var firstname = document.getElementById("firstname").value;

        if (firstname === null || firstname == "" || firstname.length > 20 || !re.test(firstname)) {
            error += "<p>The first name is required and cannot exceed 20 characters</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // Last name validation
    function validateLastName() {
        var lastname = document.getElementById("lastname").value;

        if (lastname === null || lastname === "" || lastname.length > 50) {
            error += "<p>The last name is required and cannot exceed 50 characters</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false
        }
        else {
            return true;
        }
    }
    // Email validation
    function validateEmail() {
        var email = document.getElementById("email").value;

        if (email === null || email === "") {
            error += "<p>Invalid email</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // Phone validation
    function validatePhone() {
        var phone = document.getElementById("phone").value;
        if (phone === null || phone.length > 15 || phone === "") {
            error += "<p>Invalid phone number</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // Username validation
    function validateUsername () {
        var username = document.getElementById("username").value;
        if (username === null || username.length > 12 || username === "") {
            error += "<p>The username is required and cannot exceed 12 characters</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // Password validation
    function validatePassword() {
        var password = document.getElementById("password").value;
        if (password === null || password.length > 7 || password === "") {
            error += "<p>Password cannot exceed 7 characters</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true
        }
    }
    // Address validation
    function validateAddress () {
        var address = document.getElementById("address").value;
        if (address === null || address === "") {
            error += "<p>Address is required</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // City validation
    function validateCity() {
        var city = document.getElementById("city").value;
        if (city === null || city === "") {
            error += "<p>City is required</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }   
        else {
            return true;
        } 
    }

    function validateState () {
        var state = document.getElementById("state").value;
        if (state === null || state === "Select State") {
            error += "<p>Please select a state</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // Country validation
    function validateCountry () {
        var country = document.getElementById("country").value;
        if (country === null || country === "Select Country") {
            error += "<p>Please select a country</p>";
            document.getElementById("errorMessages").innerHTML = error;
            return false;
        }
        else {
            return true;
        }
    }
    // Zipcode validation
    function validateZipCode (country) {
        var zipcode = document.getElementById("zipcode").value;

        if (document.getElementById("country").value === "United States of America") {
            if (zipcode.length != 5 || zipcode === null || zipcode === "") {
                error += "<p>Zipcode is required and must be 5 digits</p>";
                document.getElementById("errorMessages").innerHTML = error;
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
}