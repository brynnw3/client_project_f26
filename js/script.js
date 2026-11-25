const yearElement = document.getElementById("current-year");

if(yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const checklistItems = document.querySelectorAll(".readiness-item");
const progressText = document.getElementById("checklist-progress");
const progressBar = document.getElementById("readiness-progress");

function updateProgress() {
    const completed = document.querySelectorAll(".readiness-item:checked").length;
    const total = checklistItems.length;
    progressText.textContent = `${completed} of ${total} tasks completed.`;
    progressBar.value = completed;
}

checklistItems.forEach(item => {
    item.addEventListener("change", updateProgress);
});