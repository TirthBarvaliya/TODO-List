// 🔥 Suggestions for smart input
const suggestions = [
  "Buy groceries",
  "Call mom",
  "Meeting at 3 PM",
  "Water the plants",
  "Finish homework",
  "Read a book",
  "Workout session",
  "Reply to emails",
  "Pay electricity bill",
  "Meditation",
];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const suggestionList = document.getElementById("suggestionList");

// ✅ Add new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.title = "Delete Task";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  suggestionList.style.display = "none";
});

// ✅ Smart suggestion dropdown
taskInput.addEventListener("input", () => {
  const input = taskInput.value.toLowerCase();
  suggestionList.innerHTML = "";

  if (input === "") {
    suggestionList.style.display = "none";
    return;
  }

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    suggestionList.style.display = "none";
    return;
  }

  filtered.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = suggestion;
    li.addEventListener("click", () => {
      taskInput.value = suggestion;
      suggestionList.style.display = "none";
    });
    suggestionList.appendChild(li);
  });

  suggestionList.style.display = "block";
});

// ✅ Hide suggestion dropdown on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-area") && e.target.id !== "suggestionList") {
    suggestionList.style.display = "none";
  }
});
