// Change text and style dynamically
document.getElementById("change-btn").addEventListener("click", () => {
    const textEl = document.getElementById("text-content");
    textEl.textContent = "The content and style have been changed!";
    textEl.style.color = "white";
    textEl.style.backgroundColor = "teal";
    textEl.style.padding = "10px";
    textEl.style.borderRadius = "8px";
  });
  
  // Add or remove a box dynamically
  document.getElementById("toggle-btn").addEventListener("click", () => {
    const container = document.getElementById("box-container");
    const existingBox = document.querySelector(".box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      container.appendChild(newBox);
    }
  });
  