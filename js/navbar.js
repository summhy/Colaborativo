
// Pintando el contenido en el navbar
document.getElementById("navbar").innerHTML = `<nav class="menu navbar navbar-expand-lg navbar-dark bg-dark">
<div class="containerAll">
    <div class="logo">
        <a class="navbar-brand " href="#">
            <img src="img/logo.png" alt="Logo"
                width="80" height="40"></a>
    </div>
    <div class="menu collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Servicios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Precios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
            </li>
        </ul>
    </div>
    <div class="burger">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>
</nav>`;

