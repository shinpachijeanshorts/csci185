const nameList = [
    "Atlas",
    "Avery",
    "Cali",
    "Cameron",
    "Carol",
    "Dean",
    "Destiny",
    "Dylan",
    "Heather",
    "Jack",
    "Joe",
    "Keiran",
    "Kelly",
    "Maria",
    "Merlin",
    "Natasha",
    "Nicholas",
    "Olivia",
    "Rinta",
    "Trey",
];

// Your code goes here....
const containerEl = document.querySelector("#output_container");

function drawNamesDifferent() {
    for (let i = 0; i < nameList.length; i++) {
        const myTemplate = `<p>${nameList[i]}</p>`;
        containerEl.insertAdjacentHTML("beforeend", myTemplate);
    }
}

function clearContainer() {
    containerEl.innerHTML = "";
}
