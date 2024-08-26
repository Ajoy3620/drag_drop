// Function to handle the dragstart event
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

// Function to handle the dragover event
function handleDragOver(e) {
  e.preventDefault(); // Necessary to allow dropping
}

// Function to handle the drop event
function handleDrop(e, targetBox) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(id);
  targetBox.appendChild(draggedElement);
}

// Get all list items and set up dragstart event listener
document.querySelectorAll(".list").forEach((item) => {
  item.setAttribute("id", `item-${item.textContent.trim().split(" ")[2]}`); // Set a unique ID based on the item text
  item.addEventListener("dragstart", handleDragStart);
});

// Get the left and right boxes
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

// Set up dragover and drop event listeners for both boxes
[leftBox, rightBox].forEach((box) => {
  box.addEventListener("dragover", handleDragOver);
  box.addEventListener("drop", (e) => handleDrop(e, box));
});
