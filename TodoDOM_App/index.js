let form = document.getElementById("todoForm");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;

    if (task === "" || priority === "") {
        alert("Please fill all details");
        return;
    }

    let tr = document.createElement("tr");


    if (priority === "High") {
        tr.classList.add("high-priority");
    } else {
        tr.classList.add("low-priority");
    }

    let td1 = document.createElement("td");
    td1.innerText = task;

    let td2 = document.createElement("td");
    td2.innerText = priority;

    let td3 = document.createElement("td");
    td3.innerText = "Add to Fav";
    td3.style.cursor = "pointer";

    tr.append(td1, td2, td3);
    tbody.append(tr);

    form.reset();
});
