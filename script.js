const videoContainer = document.getElementById('videoContainer');
const ovalVideo = document.getElementById('ovalVideo');

// Function to update the shape of the container based on time
function updateShape() {
    const { width, height } = videoContainer.getBoundingClientRect();

    // Calculate time-based parameters for shape transformation
    const time = performance.now() / 1000; // Convert milliseconds to seconds
    const radiusX = Math.sin(time * 0.5) * 0.5 + 0.5; // Varying radius for X-axis
    const radiusY = Math.cos(time * 0.7) * 0.5 + 0.5; // Varying radius for Y-axis

    // Calculate border radii for each side based on time
    const maxRadiusX = width / 2;
    const maxRadiusY = height / 2;

    const borderRadiusLeft = (radiusX * maxRadiusX) * 50;       // Left side radius
    const borderRadiusRight = ((1 - radiusX) * maxRadiusX) * 50;     // Right side radius
    const borderRadiusTop = (radiusY * maxRadiusY) * 50;         // Top side radius
    const borderRadiusBottom = ((1 - radiusY) * maxRadiusY) * 50;   // Bottom side radius

    // Update border radius styles based on time
    videoContainer.style.borderTopLeftRadius = `${borderRadiusLeft}% ${borderRadiusTop}%`;
    videoContainer.style.borderTopRightRadius = `${borderRadiusRight}% ${borderRadiusTop}%`;
    videoContainer.style.borderBottomLeftRadius = `${borderRadiusLeft}% ${borderRadiusBottom}%`;
    videoContainer.style.borderBottomRightRadius = `${borderRadiusRight}% ${borderRadiusBottom}%`;

    // Request next animation frame
    requestAnimationFrame(updateShape);
}

// Start the animation loop
updateShape();
