document.getElementById('check-btn').addEventListener('click', function() {
    let phoneNumber = document.getElementById('user-input').value;
    if (!phoneNumber) {
        alert('Please provide a phone number');
        return;
    }
    let result = validatePhoneNumber(phoneNumber) ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;
    document.getElementById('results-div').textContent = result;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});

function validatePhoneNumber(phone) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(phone);
}
