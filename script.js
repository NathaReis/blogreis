function toggleMenu(desativated) {
    const $menu = document.querySelector("menu");
    if(desativated) return $menu.classList.remove("active");
    $menu.classList.toggle("active");
}

function searchPage() {
    window.location = "./pages/search/";
}