

let form = document.getElementById("form") as HTMLFormElement;

function saveProfilePicture(fileInput: HTMLInputElement) {
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target?.result as string;
            localStorage.setItem('from_image', imageUrl); 
        };
        reader.readAsDataURL(file);
    }
}

// Function to populate the form with saved data
function populateForm() {
    (document.getElementById("firstName") as HTMLInputElement).value = localStorage.getItem('from_name') || '';
    (document.getElementById("phoneNo") as HTMLInputElement).value = localStorage.getItem('from_phone') || '';
    (document.getElementById("email") as HTMLInputElement).value = localStorage.getItem('from_email') || '';
    (document.getElementById("linkedin") as HTMLInputElement).value = localStorage.getItem('from_link') || '';
    (document.getElementById("degree") as HTMLInputElement).value = localStorage.getItem('from_degree') || '';
    (document.getElementById("institution") as HTMLInputElement).value = localStorage.getItem('from_institution') || '';
    (document.getElementById("graduation") as HTMLInputElement).value = localStorage.getItem('from_graduation') || '';
    (document.getElementById("skills") as HTMLInputElement).value = localStorage.getItem('from_skills') || '';
    (document.getElementById("job") as HTMLInputElement).value = localStorage.getItem('from_jobtitle') || '';
    (document.getElementById("company") as HTMLInputElement).value = localStorage.getItem('from_company') || '';
    (document.getElementById("startDate") as HTMLInputElement).value = localStorage.getItem('from_startDate') || '';
    (document.getElementById("endDate") as HTMLInputElement).value = localStorage.getItem('from_endDate') || '';
    (document.getElementById("description") as HTMLTextAreaElement).value = localStorage.getItem('from_description') || '';
    
}

// Call populateForm on page load to fill the form with existing data
window.onload = populateForm;

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Save form data to local storage
    localStorage.setItem('from_name', (document.getElementById("firstName") as HTMLInputElement).value);
    localStorage.setItem('from_jobtitle', (document.getElementById("job") as HTMLInputElement).value);
    localStorage.setItem('from_phone', (document.getElementById("phoneNo") as HTMLInputElement).value);
    localStorage.setItem('from_email', (document.getElementById("email") as HTMLInputElement).value);
    localStorage.setItem('from_link', (document.getElementById('linkedin') as HTMLInputElement).value);
    localStorage.setItem('from_degree', (document.getElementById("degree") as HTMLInputElement).value);
    localStorage.setItem('from_institution', (document.getElementById("institution") as HTMLInputElement).value);
    localStorage.setItem('from_graduation', (document.getElementById("graduation") as HTMLInputElement).value);
    localStorage.setItem('from_skills', (document.getElementById("skills") as HTMLInputElement).value);
    localStorage.setItem('from_company', (document.getElementById("company") as HTMLInputElement).value);
    localStorage.setItem('from_startDate', (document.getElementById("startDate") as HTMLInputElement).value);
    localStorage.setItem('from_endDate', (document.getElementById("endDate") as HTMLInputElement).value);
    localStorage.setItem('from_description', (document.getElementById("description") as HTMLTextAreaElement).value);

    // Save profile picture
    saveProfilePicture(document.getElementById("file") as HTMLInputElement);

    // Redirect to the resume page
    window.location.href = "modern.html";
});
