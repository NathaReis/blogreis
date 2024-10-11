function toggleMenu(desativated='toggle') {
    const $menus = document.querySelectorAll("menu");
    $menus.forEach(($menu) => {
        if(desativated === 'toggle') return $menu.classList.toggle("active");
        desativated ? $menu.classList.remove("active") : $menu.classList.add("active");
    });
    
    const $hamburger = document.querySelector("#hamburger");
    if(desativated === 'toggle') return $hamburger.classList.toggle("active");
    desativated ? $hamburger.classList.remove("active") : $hamburger.classList.add("active");
}
if(window.innerWidth >= 1450) {
    toggleMenu(false)
}

function searchPage() {
    window.location = "./pages/search/";
}