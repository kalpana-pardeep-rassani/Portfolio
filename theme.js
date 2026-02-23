const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 1. Check for saved theme in localStorage on page load
if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// 2. Add click event listener
toggleBtn.addEventListener('click', () => {
    // Toggle the 'dark' class
    htmlElement.classList.toggle('dark');

    // Save the preference
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});