window.onload = function() {
    const savedColor = localStorage.getItem('bgColor'); // Fix typo
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};

function toggleBackground() {
    const currentColor = document.body.style.backgroundColor || '#01021B'; // Default to #01021B
    const newColor = currentColor === 'rgba(1, 2, 27, 1)' ? 'lightblue' : '#01021B'; // Use rgb for comparison
    document.body.style.backgroundColor = newColor;
    localStorage.setItem('bgColor', newColor);
}

let bubbleSpeed = 8; // Default speed in seconds

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    // Random size between 30px and 60px
    const size = Math.random() * 30 + 30;
    bubble.style.width = bubble.style.height = `${size}px`;
    // Random horizontal position
    bubble.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    // Animation duration based on bubbleSpeed (±2s random)
    const duration = Math.max(2, bubbleSpeed + (Math.random() * 4 - 2));
    bubble.style.animationDuration = `${duration}s`;

    // Pop effect on click
    bubble.onclick = function() {
        bubble.style.transform = 'scale(0)';
        setTimeout(() => bubble.remove(), 200);
    };

    document.body.appendChild(bubble);

    // Remove bubble when animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Generate bubbles at intervals
setInterval(createBubble, 800);

// Optional: pop all bubbles when any button is clicked
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.transform = 'scale(0)';
            setTimeout(() => bubble.remove(), 200);
        });
    });
});

// Add slider for bubble speed
window.addEventListener('DOMContentLoaded', () => {
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'bubble-slider-container';
        sliderContainer.innerHTML = `
            <label for="bubbleSpeed">Bubble Speed:</label>
            <input type="range" id="bubbleSpeed" min="2" max="16" value="${bubbleSpeed}" step="1">
            <span style="font-size:0.9em; color:#fff; margin-left:8px;">(Slower ←→ Faster)</span>
        `;
        document.body.appendChild(sliderContainer);

        const slider = document.getElementById('bubbleSpeed');
        const valueDisplay = document.getElementById('bubbleSpeedValue');
        // Reverse logic: left = slower, right = faster
        slider.addEventListener('input', function() {
                // Map slider value: left (min) = slowest, right (max) = fastest
                bubbleSpeed = 18 - Number(this.value); // 18 - value: min=2→16, so bubbleSpeed=16→2
                valueDisplay.textContent = bubbleSpeed;
        });
});
