
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("cookieModal").classList.add("show");
    }, 500);
});

document.querySelector('.accept').addEventListener('click', function() {
    alert('Cookies acceptés');
    document.getElementById("cookieModal").style.display = 'none';
});

document.querySelector('.reject').addEventListener('click', function() {
    alert('Cookies non essentiels rejetés');
    document.getElementById("cookieModal").style.display = 'none';
});
