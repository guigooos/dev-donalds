document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");
    const comeback = document.getElementById("comeback");
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener("click", function () {
        if (sideMenu.classList.contains("inactive")) {
            sideMenu.classList.remove("inactive");
        }
        sideMenu.classList.toggle("active");
        overlay.classList.add('active');
    });

    comeback.addEventListener("click", function () {
        if (sideMenu.classList.contains("active")) {
            sideMenu.classList.remove("active");
            sideMenu.classList.add("inactive");
            overlay.classList.remove('active'); // <-- aqui remove o overlay
        }
    });

    // Opcional: fecha menu clicando no overlay também
    overlay.addEventListener('click', function () {
        if (sideMenu.classList.contains("active")) {
            sideMenu.classList.remove("active");
            sideMenu.classList.add("inactive");
            overlay.classList.remove('active');
        }
    });
});
