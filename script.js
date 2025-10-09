//your JS code here. If required.
// 1. Select all necessary elements from the DOM
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

// 2. State management: Keep track of the current active step
let currentActive = 1;

// 3. Event Listener for the "Next" button
nextButton.addEventListener("click", () => {
  currentActive++; // Increment the active step

  // Prevent it from going beyond the last circle
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateUI(); // Call the function to update the screen
});

// 4. Event Listener for the "Prev" button
prevButton.addEventListener("click", () => {
  currentActive--; // Decrement the active step

  // Prevent it from going below the first circle
  if (currentActive < 1) {
    currentActive = 1;
  }

  updateUI(); // Call the function to update the screen
});

// 5. The core function to update the UI
function updateUI() {
  // Update circles: Loop through all circles
  circles.forEach((circle, index) => {
    // The index is 0-based, currentActive is 1-based
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update lines: Loop through all lines
  lines.forEach((line, index) => {
    // A line is active if the circle before it is active
    if (index < currentActive - 1) {
      line.classList.add("active-line");
    } else {
      line.classList.remove("active-line");
    }
  });

  // Update button states
  if (currentActive === 1) {
    // If we are at the beginning, disable "Prev"
    prevButton.disabled = true;
  } else if (currentActive === circles.length) {
    // If we are at the end, disable "Next"
    nextButton.disabled = true;
  } else {
    // In all other cases, enable both buttons
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}