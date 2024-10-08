function toggleMenu(desativated) {
    const $menu = document.querySelector("menu");
    if(desativated) return $menu.classList.remove("active");
    $menu.classList.toggle("active");
}
function toggleTheme(element) {
    const $html = document.querySelector("html");
    $html.classList.toggle("dark");
    element.classList.toggle("dark");
}

function searchPage() {
    window.location = "./pages/search/";
}

const $containerMain = document.querySelector(".container-main #blog-content");
// const exemple = '# Tesouro Selic \n ![Image](https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) \n Texto Texto \n # Title \n Texto Texto ';
$containerMain.innerHTML = marked.parse(exemple);