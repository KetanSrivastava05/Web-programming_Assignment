document.getElementById("title").innerText = "Updated Title";

document.getElementsByName("username")[0].value = "John Doe";

const radioButtons = document.getElementsByName("gender");
for (let radio of radioButtons) {
    if (radio.checked) {
        console.log("Selected gender:", radio.value);
    }
}

const paragraphs = document.getElementsByTagName("p");
console.log("Total number of <p> elements:", paragraphs.length);

const listItems = document.getElementsByTagName("li");
for (let li of listItems) {
    console.log("List Item:", li.textContent);
}

const inputFields = document.getElementsByClassName("input-field");
for (let input of inputFields) {
    input.style.backgroundColor = "lightblue";
}

document.querySelector(".info").innerText = "This is the 1st info paragraph";
document.querySelector("input[name='gender']").checked = true;

const infoParagraphs = document.querySelectorAll(".info");
infoParagraphs.forEach(p => console.log("Info Paragraph:", p.textContent));

const hobbies = document.querySelectorAll(".hobby");
hobbies.forEach(checkbox => {
    checkbox.checked = true;
    console.log("Checked hobby:", checkbox.value);
});
