let records = [];
let searchResults = [];

function showUserMode() {
    document.getElementById("user-search").classList.remove("hidden");
    document.getElementById("admin-login").classList.add("hidden");
    document.getElementById("admin-upload").classList.add("hidden");
}

function showAdminMode() {
    document.getElementById("user-search").classList.add("hidden");
    document.getElementById("admin-login").classList.remove("hidden");
    document.getElementById("admin-upload").classList.add("hidden");
}

function showAdminUpload() {
    document.getElementById("user-search").classList.add("hidden");
    document.getElementById("admin-login").classList.add("hidden");
    document.getElementById("admin-upload").classList.remove("hidden");
}
function searchRecords() {
    searchResults = []; // Clear previous search results

    const searchById = document.getElementById("searchById").value.toLowerCase();
    const searchByYear = document.getElementById("searchByYear").value.toLowerCase();
    const searchByDistrict = document.getElementById("searchByDistrict").value.toLowerCase();

    searchResults = records.filter((record) => {
        const adharNumber = (record["Adhar Number"] || "").toString().toLowerCase();
        const engineeringYear = (record["Engineering Year"] || "").toString().toLowerCase();
        const district = (record["District"] || "").toString().toLowerCase();

        return (
            (searchById === "" || adharNumber === searchById) &&
            (searchByYear === "" || engineeringYear.includes(searchByYear)) &&
            (searchByDistrict === "" || district.includes(searchByDistrict))
        );
    });

    renderSearchResults(searchResults);
}


document.getElementById('ClearScreen').addEventListener('click', ()=>{
    searchResults = []; // Clear previous search results
    
})

function renderSearchResults(results) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "";

    if (results.length === 0) {
        resultContainer.innerHTML = "<p>No records found.</p>";
    } else {
        results.forEach((record) => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <p><strong>Adhar Number:</strong> ${record["Adhar Number"]}</p>
                <p><strong>Full Name:</strong> ${record["Full Name"]}</p>
                <p><strong>State:</strong> ${record["State"]}</p>
                <p><strong>District:</strong> ${record["District"]}</p>
                <p><strong>School/College:</strong> ${record["School/College"]}</p>
                <p><strong>10th Year:</strong> ${record["10th Year"]}</p>
                <p><strong>12th Year:</strong> ${record["12th Year"]}</p>
                <p><strong>Engineering Year:</strong> ${record["Engineering Year"]}</p>
                <p><strong>Experience:</strong> ${record["Experience"] || "No Experience"}</p>
                <p><strong>Experience Year:</strong> ${record["Experience Year"] || "N/A"}</p>
            `;
            resultContainer.appendChild(card);
        });
    }
}

function renderNextSearchResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "";

    if (searchResults.length === 0) {
        resultContainer.innerHTML = "<p>No records found.</p>";
    } else {
        const record = searchResults.pop();

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <p><strong>Adhar Number:</strong> ${record["Adhar Number"] || "N/A"}</p>
            <p><strong>Full Name:</strong> ${record["Full Name"] || "N/A"}</p>
            <p><strong>State:</strong> ${record["State"] || "N/A"}</p>
            <p><strong>District:</strong> ${record["District"] || "N/A"}</p>
            <p><strong>School/College:</strong> ${record["School/College"] || "N/A"}</p>
            <p><strong>10th Year:</strong> ${record["10th Year"] || "N/A"}</p>
            <p><strong>12th Year:</strong> ${record["12th Year"] || "N/A"}</p>
            <p><strong>Engineering Year:</strong> ${record["Engineering Year"] || "N/A"}</p>
            <p><strong>Experience:</strong> ${record["Experience"] || "No Experience"}</p>
            <p><strong>Experience Year:</strong> ${record["Experience Year"] || "N/A"}</p>
        `;
        resultContainer.appendChild(card);
    }
}

function adminLogin() {
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;

    if (adminUsername === "1" && adminPassword === "1") {
        showAdminUpload();
    } else {
        alert("Admin login failed. Please check your credentials.");
    }
}

function uploadExcel() {
    const excelFileInput = document.getElementById("excelFile");
    const file = excelFileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            records = XLSX.utils.sheet_to_json(sheet);

            console.log(records);

            searchResults = []; // Clear previous search results
            renderNextSearchResult();

            // Show a success message
            alert("File uploaded successfully!");
        };

        reader.readAsArrayBuffer(file);
    }
}


function clearScreen() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Clear the search results
}
