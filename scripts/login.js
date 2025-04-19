// Hardcoded credentials (you can change these as needed)
const credentials = {
    patient: { username: 'patient', password: 'test' },
    provider: { username: 'provider', password: 'test' }
};

// Get form elements
const patientForm = document.querySelector('#patient form');
const providerForm = document.querySelector('#provider form');
const patientTab = document.getElementById('patientTab');
const providerTab = document.getElementById('providerTab');

// Show the correct form based on the active tab
function showForm(tab) {
    const patientFormDiv = document.getElementById('patient');
    const providerFormDiv = document.getElementById('provider');

    if (tab === 'patient') {
        patientFormDiv.style.display = 'block';
        providerFormDiv.style.display = 'none';
    } else if (tab === 'provider') {
        patientFormDiv.style.display = 'none';
        providerFormDiv.style.display = 'block';
    }
}

// Switch tabs
patientTab.addEventListener('click', function() {
    showForm('patient');
    patientTab.classList.add('active');
    providerTab.classList.remove('active');
});

providerTab.addEventListener('click', function() {
    showForm('provider');
    providerTab.classList.add('active');
    patientTab.classList.remove('active');
});

// Check login credentials
function checkCredentials(username, password, type) {
    if (type === 'patient') {
        return credentials.patient.username === username && credentials.patient.password === password;
    } else if (type === 'provider') {
        return credentials.provider.username === username && credentials.provider.password === password;
    }
    return false;
}

// Handle form submission for patient login
patientForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = event.target.querySelector('#patient-username').value;
    const password = event.target.querySelector('#patient-password').value;

    if (checkCredentials(username, password, 'patient')) {
        alert('Login successful as Patient');
        window.location.href = 'patient-dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

// Handle form submission for provider login
providerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = event.target.querySelector('#provider-username').value;
    const password = event.target.querySelector('#provider-password').value;

    if (checkCredentials(username, password, 'provider')) {
        alert('Login successful as Provider');
        window.location.href = 'provider-dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

// Initialize with the patient tab selected by default
showForm('patient');
