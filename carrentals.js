// Function to show different pages
function showLogin() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("signUpPage").classList.add("hidden");
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("hostCarPage").classList.add("hidden");
}

function showSignUp() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("signUpPage").classList.remove("hidden");
}

function showMainPage() {
    document.getElementById("mainPage").classList.remove("hidden");
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("signUpPage").classList.add("hidden");
    document.getElementById("hostCarPage").classList.add("hidden");
}

function showHostCar() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("hostCarPage").classList.remove("hidden");
}

// Handle user registration
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPasswordSignup").value;

    if (localStorage.getItem(username)) {
        alert("Username already taken! Choose another one.");
    } else {
        localStorage.setItem(username, password);
        alert("Registration successful! Please log in.");
        showLogin();
    }
});

// Handle user login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        showMainPage();
    } else {
        alert("Invalid username or password.");
    }
});

// Logout function
function logout() {
    showLogin();
    alert("Logged out successfully.");
}

// Function to create a car listing
function createCarListing() {
    let carName = document.getElementById("carName").value;
    let carType = document.getElementById("carType").value;
    let carSeats = document.getElementById("carSeats").value;
    let carPrice = document.getElementById("carPrice").value;

    if (carName && carType && carSeats && carPrice) {
        let carDetails = `🚗 ${carName} - ${carType} | Seats: ${carSeats} | $${carPrice}/day`;
        let carDiv = document.createElement("div");
        carDiv.textContent = carDetails;
        document.getElementById("currentCars").appendChild(carDiv);

        alert("Car listed successfully!");
        showMainPage();
    } else {
        alert("Please fill in all fields.");
    }
}
