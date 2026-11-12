// JavaScript for basic interactivity

document.getElementById("helloBtn").addEventListener("click", function () {
    alert("Hello! Your static website is working.");
}); // Example of a button click event listener that shows an alert message.
document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('visible');
    });
});
// this Javascript file is for basic interactivity, such as handling button clicks and toggling submenu visibility.
// You can expand this file with more complex functionality as needed.