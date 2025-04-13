const patients = [
    { PId: 1, Name: "Alen", Age: 39 },
    { PId: 2, Name: "Deena", Age: 47 },
    { PId: 3, Name: "Diana", Age: 21 },
    { PId: 4, Name: "Jack", Age: 54 },
    { PId: 5, Name: "Jain", Age: 23 },
    { PId: 6, Name: "Kelvin", Age: 61 },
    { PId: 7, Name: "Louis", Age: 69 },
    { PId: 8, Name: "Rex", Age: 49 }
];

function displayPatients(data) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    data.forEach(patient => {
        const row = `<tr>
                        <td>${patient.PId}</td>
                        <td>${patient.Name}</td>
                        <td>${patient.Age}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function sortByAge() {
    const sortedPatients = [...patients].sort((a, b) => b.Age - a.Age);
    displayPatients(sortedPatients);
}

function checkPId() {
    const pId = parseInt(document.getElementById("pidInput").value);
    const exists = patients.some(patient => patient.PId === pId);
    document.getElementById("pidResult").innerText = exists ? "P-Id exists in the list!" : "P-Id not found.";
}

function filterByAge() {
    const minAge = parseInt(document.getElementById("minAge").value);
    const maxAge = parseInt(document.getElementById("maxAge").value);
    
    if (isNaN(minAge) || isNaN(maxAge)) {
        alert("Please enter valid age values.");
        return;
    }

    const filteredPatients = patients.filter(patient => patient.Age >= minAge && patient.Age <= maxAge);
    displayPatients(filteredPatients);
}

displayPatients(patients);
