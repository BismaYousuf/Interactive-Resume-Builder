"use strict";
let form = document.getElementById("form");
function saveProfilePicture(fileInput) {
    var _a;
    const file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            const imageUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            localStorage.setItem('from_image', imageUrl);
        };
        reader.readAsDataURL(file);
    }
}
// Function to populate the form with saved data
function populateForm() {
    document.getElementById("firstName").value = localStorage.getItem('from_name') || '';
    document.getElementById("phoneNo").value = localStorage.getItem('from_phone') || '';
    document.getElementById("email").value = localStorage.getItem('from_email') || '';
    document.getElementById("linkedin").value = localStorage.getItem('from_link') || '';
    document.getElementById("degree").value = localStorage.getItem('from_degree') || '';
    document.getElementById("institution").value = localStorage.getItem('from_institution') || '';
    document.getElementById("graduation").value = localStorage.getItem('from_graduation') || '';
    document.getElementById("skills").value = localStorage.getItem('from_skills') || '';
    document.getElementById("job").value = localStorage.getItem('from_jobtitle') || '';
    document.getElementById("company").value = localStorage.getItem('from_company') || '';
    document.getElementById("startDate").value = localStorage.getItem('from_startDate') || '';
    document.getElementById("endDate").value = localStorage.getItem('from_endDate') || '';
    document.getElementById("description").value = localStorage.getItem('from_description') || '';
}
// Call populateForm on page load to fill the form with existing data
window.onload = populateForm;
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('from_name', document.getElementById("firstName").value);
    localStorage.setItem('from_jobtitle', document.getElementById("job").value);
    localStorage.setItem('from_phone', document.getElementById("phoneNo").value);
    localStorage.setItem('from_email', document.getElementById("email").value);
    localStorage.setItem('from_link', document.getElementById('linkedin').value);
    localStorage.setItem('from_degree', document.getElementById("degree").value);
    localStorage.setItem('from_institution', document.getElementById("institution").value);
    localStorage.setItem('from_graduation', document.getElementById("graduation").value);
    localStorage.setItem('from_skills', document.getElementById("skills").value);
    localStorage.setItem('from_company', document.getElementById("company").value);
    localStorage.setItem('from_startDate', document.getElementById("startDate").value);
    localStorage.setItem('from_endDate', document.getElementById("endDate").value);
    localStorage.setItem('from_description', document.getElementById("description").value);
    // Save profile picture
    saveProfilePicture(document.getElementById("file"));
    // Redirect to the resume page
    window.location.href = "modern.html";
});
