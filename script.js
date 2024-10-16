function toggleMenu(desativated='toggle') {
    const $menus = document.querySelectorAll("menu");
    $menus.forEach(($menu) => {
        if(desativated === 'toggle') return $menu.classList.toggle("active");
        desativated ? $menu.classList.remove("active") : $menu.classList.add("active");
    });
}
if(window.innerWidth >= 1330) {
    toggleMenu(false)
}

function searchPage() {
    window.location = "./pages/search/";
}