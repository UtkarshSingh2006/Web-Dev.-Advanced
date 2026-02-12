const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainer");
const emptyMsg = document.getElementById("emptyMsg");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <h4>${title}</h4>
        <p><b>Date:</b> ${date}</p>
        <p><b>Category:</b> ${category}</p>
        <p>${desc}</p>
        <button class="deleteBtn">Delete</button>
    `;

    container.appendChild(card);
    emptyMsg.style.display = "none";
    form.reset();
});


container.addEventListener("click", function (e) {

    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }

    if (container.children.length === 0) {
        emptyMsg.style.display = "block";
    }
});


document.getElementById("clearAll").addEventListener("click", function () {
    container.innerHTML = "";
    emptyMsg.style.display = "block";
});


document.getElementById("addSample").addEventListener("click", function () {

    emptyMsg.style.display = "none";

    const samples = [
        { title: "HTML", date: "2026-02-18", category: "Workshop", desc: "Markup Language" },
        { title: "React Session", date: "2026-03-10", category: "Conference", desc: "Frontend Framework" }
    ];

    samples.forEach(event => {
        const div = document.createElement("div");
        div.classList.add("event-card");

        div.innerHTML = `
            <h4>${event.title}</h4>
            <p><b>Date:</b> ${event.date}</p>
            <p><b>Category:</b> ${event.category}</p>
            <p>${event.desc}</p>
            <button class="deleteBtn">Delete</button>
        `;

        container.appendChild(div);
    });
});


document.addEventListener("keydown", function (e) {
    document.getElementById("keyDisplay").textContent =
        "You Pressed: " + e.key;
});
