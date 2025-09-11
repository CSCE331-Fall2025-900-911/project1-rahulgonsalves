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
