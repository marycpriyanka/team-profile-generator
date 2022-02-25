const employeeSection = document.getElementById("employeeSection");

addManager();
addEngineers();
addInterns();

function addManager() {
    createCard();
}

function addEngineers() {

}

function addInterns() {

}

function createCard() {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card p-0");
    cardDiv.setAttribute("style", "width: 18rem;");

    const header = document.createElement("div");
    header.setAttribute("class", "card-header bg-dark text-light");
    const titleE = document.createElement("h4");
    titleE.setAttribute("class", "card-title");
    titleE.textContent = "aaaaaaa";
    const textE = document.createElement("h5");
    textE.setAttribute("class", "card-text");
    textE.textContent = "aaaaaaaaaa";
    header.appendChild(titleE);
    header.appendChild(textE);

    const listE = document.createElement("ul");
    listE.setAttribute("class", "list-group list-group-flush");

    const listItemE1 = document.createElement("li");
    listItemE1.setAttribute("class", "list-group-item m-2");
    listItemE1.textContent = "ID: ";
    listE.appendChild(listItemE1);

    const listItem2 = document.createElement("li");
    listItem2.setAttribute("class", "list-group-item m-2");
    const textSpan1 = document.createElement("span");
    textSpan1.textContent = "Email: ";
    const link1 = document.createElement("a");
    link1.setAttribute("href", "#");
    link1.setAttribute("class", "card-link");
    link1.textContent = "fjefj";
    listItem2.appendChild(textSpan1);
    listItem2.appendChild(link1);
    listE.appendChild(listItem2);

    const listItem3 = document.createElement("li");
    listItem3.setAttribute("class", "list-group-item m-2");
    const textSpan2 = document.createElement("span");
    textSpan2.textContent = "Email: ";
    const link2 = document.createElement("a");
    link2.setAttribute("href", "#");
    link2.setAttribute("class", "card-link");
    link2.textContent = "fjefj";
    listItem3.appendChild(textSpan2);
    listItem3.appendChild(link2);
    listE.appendChild(listItem3);  

    cardDiv.appendChild(header);
    cardDiv.appendChild(listE);
    employeeSection.appendChild(cardDiv);
}


